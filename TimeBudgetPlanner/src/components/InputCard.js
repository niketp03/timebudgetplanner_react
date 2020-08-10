import React, { Component } from 'react';
import { Dropdown } from "react-bootstrap";
import Slider from './Slider'

export default function InputCard(props) {
    return (
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">{props.title}</h4>
                <Dropdown class="custom-select my-1 mr-sm-2">
                    <Dropdown.Toggle>
                        Choose a class
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/fhs" value="World-Cultures">World Cultures</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Slider min={props.min} max={props.max} />

                <h3 class="card-text" id="aHours">0 hours</h3>
            </div>
        </div>
    );
}