import React, { Component } from 'react';
import { Dropdown } from "react-bootstrap";
import Slider from './Slider'

export default function InputCard(props) {

    const [ item, setItem ] = React.useState('');
    const handleSelect = (e) => {
        console.log(e)
        console.log("hello")
        console.log(Object.keys(classes))
        setItem(e)
        
    }
    const classes = props.classes

    const classItems = Object.keys(classes).map(function(key, index) {
        console.log(classes[key])
        return <Dropdown.Item eventKey={key}>{key}</Dropdown.Item>;
    });



    if (item == ''){
        return (
            <div class="card">
                
                <div class="card-body">
                    <h4 class="card-title">{props.title}</h4>
                    <Dropdown class="custom-select my-1 mr-sm-2" onSelect={handleSelect}>
                        <Dropdown.Toggle>
                            Select a Class
                        </Dropdown.Toggle>
                        <Dropdown.Menu id="menu">
                            {classItems}
                        </Dropdown.Menu>
                    </Dropdown>
    
                    <Slider min={0} max={0} disabled={true} />
                </div>
            </div>
        );
    } else {
        return (
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">{props.title}</h4>
                    <Dropdown class="custom-select my-1 mr-sm-2" onSelect={handleSelect}>
                        <Dropdown.Toggle>
                            {item}
                        </Dropdown.Toggle>
                        <Dropdown.Menu id="menu">
                            {classItems}
                        </Dropdown.Menu>
                    </Dropdown>
    
                    <Slider min={classes[item][0]} max={classes[item][1]} />
                </div>
            </div>
        );
    }
}