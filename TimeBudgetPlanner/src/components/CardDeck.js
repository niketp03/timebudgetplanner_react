import React, { Component } from 'react';
import InputCard from './InputCard'
import InputCardSliderOnly from './InputCardSliderOnly'

export default class CardDeck extends Component {
    keys = Object.keys(this.props.data)

    render() {
        if (this.props.sliderOnly == true){
            return (
                <div>
                    <div class="card-deck">
                        <InputCardSliderOnly title={this.keys[0]} min={this.props.data[this.keys[0]][0]} max={this.props.data[this.keys[0]][1]} desc={this.props.data[this.keys[0]][2]}/>
                        <InputCardSliderOnly title={this.keys[1]} min={this.props.data[this.keys[1]][0]} max={this.props.data[this.keys[1]][1]} desc={this.props.data[this.keys[1]][2]}/>
                        <InputCardSliderOnly title={this.keys[2]} min={this.props.data[this.keys[2]][0]} max={this.props.data[this.keys[2]][1]} desc={this.props.data[this.keys[2]][2]}/>
                    </div>
                </div>
            );
        }
        return (
            <div class="card-deck">
                <InputCard 
                    title={this.keys[0]} 
                    classes={this.props.data[this.keys[0]]} 
                    onChange={this.props.onChange} 
                    value={this.props.hourValues[this.keys[0]]}
                />
                <InputCard title={this.keys[1]} classes={this.props.data[this.keys[1]]} onChange={this.props.onChange} value={this.props.hourValues[this.keys[1]]}/>
                <InputCard title={this.keys[2]} classes={this.props.data[this.keys[2]]} onChange={this.props.onChange} value={this.props.hourValues[this.keys[2]]}/>
            </div>
        );
    }
}