import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";

//Manages the prices of the difference ingredients
const INGREDIENT_PRICES = {
    lettuce: 0.5,
    cheese: 0.75,
    meat: 1.5,
    bacon: 1.0
};

class BurgerBuilder extends Component {
    //initial state for the application
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    };

    componentDidMount() {
        axios
            .get(
                "https://react-my-burger-37bcb.firebaseio.com/ingredients.json"
            )
            .then(response => {
                this.setState({ ingredients: response.data });
            })
            .catch(error => {
                this.setState({error: true})
            });
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchasable: sum > 0 });
    }

    //Used as a handler for the add ingredient button
    addIngredientHandler = type => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({ totalPrice: newPrice, ingredients: updatedIngredient });
        this.updatePurchaseState(updatedIngredient);
    };

    //Used as a handler for the remove ingredient button
    removeIngredientHandler = type => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        console.log("oldCount", oldCount);
        const updatedCount = oldCount - 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        console.log("updateIngredient", updatedIngredient);
        updatedIngredient[type] = updatedCount;
        const priceSubtraction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceSubtraction;

        this.setState({ totalPrice: newPrice, ingredients: updatedIngredient });
        this.updatePurchaseState(updatedIngredient);
    };

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    };

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    };

    purchaseContinueHandler = () => {
        //alert('You continue!');
        this.setState({ loading: true });
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: "Tristen",
                address: {
                    street: "testStreet",
                    zipCode: "41351",
                    country: "USA"
                },
                email: "test@test.com"
            },
            deliveryMethod: "fastest"
        };

        axios
            .post("/orders.json", order)
            .then(response => {
                this.setState({
                    loading: false,
                    purchasing: false
                });
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    purchasing: false
                });
            });
    };

    render() {
        const disableInfo = {
            ...this.state.ingredients
        }; //puts the ingredients into a new object
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        } //prevents the console from throwing an error if the count is below 0

        let orderSummary = null;

        let burger = this.state.error ? <p>Ingredients Can't be loaded</p> : <Spinner />;

        if (this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        addIngredient={this.addIngredientHandler}
                        removeIngredient={this.removeIngredientHandler}
                        disabled={disableInfo}
                        purchasable={this.state.purchasable}
                        price={this.state.totalPrice}
                        ordered={this.purchaseHandler}
                    />
                </Aux>
            );
            orderSummary = (
                <OrderSummary
                    price={this.state.totalPrice}
                    ingredients={this.state.ingredients}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                />
            );
        }
        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        return (
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}
                >
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);
