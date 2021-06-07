import React from 'react';
import FormatTotal from './FormatTotal'

export default function Total(props) {
const total = Object.keys(props.selected.selected).reduce(
    (acc, curr) => acc + props.selected.selected[curr].cost,
    0
  );
 return ( total,
   <FormatTotal 
     total={total} 
     USCurrencyFormat={props.USCurrencyFormat}
   />
         )
        
}