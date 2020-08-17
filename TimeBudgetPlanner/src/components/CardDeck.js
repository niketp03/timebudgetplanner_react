import React, { Component } from 'react';
import InputCard from './InputCard'
import InputCardSliderOnly from './InputCardSliderOnly'

export default class CardDeck extends Component {
    keys = Object.keys(this.props.data)

    render() {
        if (this.props.sliderOnly == true){
            return (
                <div class="card-deck">
                    <InputCardSliderOnly title={this.keys[0]} data={this.props.data[this.keys[0]]} onChange={this.props.onChange} value={this.props.hourValues[this.keys[0]]}/>
                    <InputCardSliderOnly title={this.keys[1]} data={this.props.data[this.keys[1]]} onChange={this.props.onChange} value={this.props.hourValues[this.keys[1]]}/>
                    <InputCardSliderOnly title={this.keys[2]} data={this.props.data[this.keys[2]]} onChange={this.props.onChange} value={this.props.hourValues[this.keys[2]]}/>
                </div>
            );
        }
        return (
            <div class="card-deck">
                <InputCard title={this.keys[0]} classes={this.props.data[this.keys[0]]} onChange={this.props.onChange} value={this.props.hourValues[this.keys[0]]} onSelect={this.props.onSelect} item={this.props.itemValues[this.keys[0]]}/>
                <InputCard title={this.keys[1]} classes={this.props.data[this.keys[1]]} onChange={this.props.onChange} value={this.props.hourValues[this.keys[1]]} onSelect={this.props.onSelect} item={this.props.itemValues[this.keys[1]]}/>
                <InputCard title={this.keys[2]} classes={this.props.data[this.keys[2]]} onChange={this.props.onChange} value={this.props.hourValues[this.keys[2]]} onSelect={this.props.onSelect} item={this.props.itemValues[this.keys[2]]}/>
            </div>
        );
    }
}