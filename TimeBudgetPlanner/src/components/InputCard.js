import React, { Component } from 'react';
import { Dropdown } from "react-bootstrap";
import Slider from './Slider'

export default class InputCard extends Component {

    state = {
        item: ''
    }

    handleSelect = (value) => {
        this.setState({item: value})
    }

    render(){

        const classItems = Object.keys(this.props.classes).map(function(key, index) {
            return <Dropdown.Item eventKey={key}>{key}</Dropdown.Item>;
        });

        if (this.state.item == ''){
            return (
                <div class="card">
                    
                    <div class="card-body">
                        <h4 class="card-title">{this.props.title}</h4>
                        <Dropdown class="custom-select my-1 mr-sm-2" onSelect={this.handleSelect}>
                            <Dropdown.Toggle>
                                Select a Class
                            </Dropdown.Toggle>
                            <Dropdown.Menu id="menu">
                                {classItems}
                            </Dropdown.Menu>
                        </Dropdown>
        
                        <Slider min={0} max={0} disabled={true}/>
                    </div>
                </div>
            );
        } else {
            return (
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">{this.props.title}</h4>
                        <Dropdown class="custom-select my-1 mr-sm-2" onSelect={this.handleSelect}>
                            <Dropdown.Toggle>
                                {this.state.item}
                            </Dropdown.Toggle>
                            <Dropdown.Menu id="menu">
                                {classItems}
                            </Dropdown.Menu>
                        </Dropdown>
        
                        <Slider 
                            min={this.props.classes[this.state.item][0]} 
                            max={this.props.classes[this.state.item][1]} 
                            onChange={this.props.onChange.bind(this, this.props.title)}
                            value={(this.props.value == null) ? (this.props.classes[this.state.item][0]) : (this.props.value)} 
                        />
                    </div>
                </div>
            );
        }
    }
}