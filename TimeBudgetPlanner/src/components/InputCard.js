import React, { Component } from 'react';
import { Dropdown } from "react-bootstrap";
import Slider from './Slider';
import $ from 'jquery';
import TestUtils from 'react-dom/test-utils';

export default class InputCard extends Component {

    constructor(props){
        super(props)

        this.sliderRef = React.createRef()
    }

    render(){

        const classItems = Object.keys(this.props.classes).map(function(key, index) {
            return <Dropdown.Item eventKey={key}>{key}</Dropdown.Item>;
        });

        if (this.props.item == null){
            return (
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">{this.props.title}</h4>
                        <Dropdown class="custom-select my-1 mr-sm-2" onSelect={this.props.onSelect.bind(this, this.props.title)} >
                            <Dropdown.Toggle>
                                Select a Class
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {classItems}
                            </Dropdown.Menu>
                        </Dropdown>
        
                        <Slider ref={this.sliderRef} min={0} max={0} disabled={true}/>
                    </div>
                </div>
            );
        } else {
            return (
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">{this.props.title}</h4>
                        <Dropdown class="custom-select my-1 mr-sm-2" onSelect={this.props.onSelect.bind(this, this.props.title)}>
                            <Dropdown.Toggle>
                                {this.props.item}
                            </Dropdown.Toggle>
                            <Dropdown.Menu id="menu">
                                {classItems}
                            </Dropdown.Menu>
                        </Dropdown>
        
                        <Slider
                            ref={this.sliderRef}
                            min={this.props.classes[this.props.item][0]} 
                            max={this.props.classes[this.props.item][1]} 
                            onChange={this.props.onChange.bind(this, this.props.title)}
                            value={(this.props.value == null) ? (this.props.classes[this.props.item][0]) : (this.props.value)} 
                        />
                    </div>
                </div>
            );
        }
    }
}