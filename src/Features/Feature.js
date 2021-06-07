import React from 'react' 
import Options from './Options'

export default function Feature(props) {
  
    return (
        <fieldset className="feature" key={props.featureHash}>
          <legend className="feature__name">
            <h3>{props.feature}</h3>
          </legend>
          <Options 
            selected={props.selected}
            updateFeature={props.updateFeature}
            feature={props.feature}
            features={props.features} 
            featureHash={props.featureHash}
            USCurrencyFormat={props.USCurrencyFormat}
          />
        </fieldset>
      );
}
