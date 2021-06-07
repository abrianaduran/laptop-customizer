import React from 'react'
import Item from './Item' 
import slugify from 'slugify';

export default function Options(props) {
    const options = props.features[props.feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));

        return (
            <Item
            selected={props.selected}
            updateFeature={props.updateFeature}
            feature={props.feature}
            features={props.features} 
            featureHash={props.featureHash}
            USCurrencyFormat={props.USCurrencyFormat}
            itemHash={itemHash}
            item={item}
            />
        )
    });
    return options;
}

