import React, { Component } from 'react';
import { Dropdown } from "react-bootstrap";
import Slider from './Slider'

export default class InputCardSliderOnly extends Component {
    render() {
        return (
            <div class="card">
                <div class="card-body">
                    <div class="d-flex justify-content-center">
                        <h4 class="card-title">{this.props.title}</h4>
                        {(this.props.data[3] != null) && /*BUTTON_HERE REMOVE P*/<p>test</p>}
                    </div>
                     
                    <Slider 
                        min={this.props.data[0]} 
                        max={this.props.data[1]} 
                        onChange={this.props.onChange.bind(this, this.props.title)}
                        value={(this.props.value == null) ? (this.props.data[0]) : (this.props.value)}  
                    />
                    {(this.props.data[2] != null) && <p>{this.props.data[2]}</p>}
                </div>
            </div>
        );
    }
}