import React, { Component } from 'react';
import { Dropdown } from "react-bootstrap";
import Slider from './Slider'

export default function InputCardSliderOnly(props) {
    if (props.desc == null) {
        return (
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">{props.title}</h4>
                    <Slider min={props.min} max={props.max} disabled={false} />
                </div>
            </div>
        );
    } else {
        return (
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">{props.title}</h4>
                    <p>{props.desc}</p>
                    <Slider min={props.min} max={props.max} disabled={false} />
                </div>
            </div>
        );
    }
    
    
}