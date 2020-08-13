import React from 'react'
import RangeSlider from 'react-bootstrap-range-slider';

export default function Slider(props) {
    const [ value, setValue ] = React.useState(props.min);
    const updateValue = (e) => {
        if (e < props.min) {
            e = props.min
        } else if (e > props.max) {
            e = props.max
        }
        setValue(e.target.value)
    }
    
    if (props.disabled == true){
        return (
            <RangeSlider
            value={0}
            onChange={updateValue}
            disabled
            />
        );
    } else {
        return (
            <div>
                <RangeSlider
                value={value}
                onChange={updateValue}
                min={props.min}
                max={props.max}
                />
                <h3 class="card-text" id="aHours">{value} hours</h3>
            </div>
        );
    }


}