import React from 'react'

import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Lettuce', type: 'lettuce' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

//maps over the array to create indivicual build controls (ie. BuildControl.js)
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.addIngredient(ctrl.type)}
                removed={() => props.removeIngredient(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls