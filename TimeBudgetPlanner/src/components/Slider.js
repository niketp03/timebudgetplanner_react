import React from 'react'
import RangeSlider from 'react-bootstrap-range-slider';

export default class Slider extends React.Component {

    render() {
        if (this.props.disabled == true){
            return (
                <RangeSlider
                value={0}
                onChange={this.props.onChange}
                disabled
                />
            );
        } else {
            return (
                <div>
                    <RangeSlider
                    value={this.props.value}
                    onChange={this.props.onChange}
                    min={this.props.min}
                    max={this.props.max}
                    step={0.5}
                    />
                    <h3 class="card-text">{parseFloat(this.props.value).toFixed(1)} hours</h3>
                </div>
            );
        }
    }
}