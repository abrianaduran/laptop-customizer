import React from 'react'
import SelectedOption from './SelectedOption'
import Total from './Total'

export default function Summary(props) {

  const summary = Object.keys(props.selected.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = props.selected.selected[feature];

    return (
      <SelectedOption
        selected={props.selected.selected}
        USCurrencyFormat={props.USCurrencyFormat}
        featureHash={featureHash}
        selectedOption={selectedOption}
        feature={feature}
      />
    );
  });
return [summary,
  <Total
    selected={props.selected}
    USCurrencyFormat={props.USCurrencyFormat} 
  />
  ]
}