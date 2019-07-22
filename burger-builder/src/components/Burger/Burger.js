import React from 'react'

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
    console.log(transformedIngredients)
    let ingredients = [];

    for (let i = 0; i < transformedIngredients.length; i++) {
        for (let j = 0; j < props.ingredients[transformedIngredients[i]]; j++) {
            console.log(transformedIngredients[i])
            ingredients.push(<BurgerIngredient type={transformedIngredients[i]} />)
        }
    }
    console.log(ingredients)

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger