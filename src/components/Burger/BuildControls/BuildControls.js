import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
  <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(crtl => (
      <BuildControl
        added={() => props.ingredientAdded(crtl.type)} 
        removed={() => props.ingredientRemoved(crtl.type)}
        disabled={props.disabled[crtl.type]}
        key={crtl.label}
        label={crtl.label} />
    ))}
    <button 
      onClick={props.ordered}
      className={classes.OrderButton} 
      disabled={!props.purchasable}>ORDER NOW</button>
  </div>
);

export default buildControls;