import React from 'react'
import RangeSlider from 'react-bootstrap-range-slider';

export default function Slider(props) {
    const [ value, setValue ] = React.useState(props.min);

    return (
        <RangeSlider
        value={value}
        onChange={e => setValue(e.target.value)}
        min={props.min}
        max={props.max}
        />
    );
}