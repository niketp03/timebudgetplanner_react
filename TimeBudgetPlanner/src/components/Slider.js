import React from 'react'
import RangeSlider from 'react-bootstrap-range-slider';

export default function Slider(props) {
    const [ value, setValue ] = React.useState(props.min);
    
    if (props.disabled == true){
        return (
            <RangeSlider
            value={0}
            onChange={e => setValue(e.target.value)}
            disabled
            />
        );
    } else {
        return (
            <div>
                <RangeSlider
                value={value}
                onChange={e => setValue(e.target.value)}
                min={props.min}
                max={props.max}
                step={0.1}
                />
                <h3 class="card-text" id="aHours">{value} hours</h3>
            </div>
        );
    }


}