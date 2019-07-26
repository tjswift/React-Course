import React from 'react'

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    const transformedIngredients = Object.keys(props.ingredients) //throws the state from BurgerBuilder.js into this const
    let ingredients = [];

    //loops through Transformed ingredients length
    for (let i = 0; i < transformedIngredients.length; i++) {
        //loops over the amount of each ingredient is in TransformedIngredients
        for (let j = 0; j < props.ingredients[transformedIngredients[i]]; j++) {
            console.log(transformedIngredients[i])
            //adds the ingredient with a key (meat1, meat2)
            ingredients.push(<BurgerIngredient key={transformedIngredients[i] + j} type={transformedIngredients[i]} />)
        }
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {/* if there are no ingredients it returns "please add ingredients" */}
            {ingredients.length > 0 ? ingredients : <p>Please add some ingredients!</p>}
            {console.log(ingredients)}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger