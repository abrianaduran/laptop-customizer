import React from 'react'
import Options from './Options'
import FEATURES from '../FEATURES'

function Features(props) {
    const features = Object.keys(FEATURES).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      return (
        <fieldset className="feature" key={props.featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        <Options 
          selected={props.selected}
          updateFeature={props.updateFeature}
          feature={feature}
          features={FEATURES} 
          featureHash={featureHash}
          USCurrencyFormat={props.USCurrencyFormat}
        />
      </fieldset>)
    });
    return features;
  }
  
  export default Features
   