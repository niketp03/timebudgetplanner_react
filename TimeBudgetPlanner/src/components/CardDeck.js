import React, { Component } from 'react';
import InputCard from './InputCard'
import InputCardSliderOnly from './InputCardSliderOnly'

export default function CardDeck(props) {
    const data = props.data

    const keys = Object.keys(data)

    if (props.sliderOnly == true){
        return (
            <div>
                <div class="card-deck">
                    <InputCardSliderOnly title={keys[0]} min={data[keys[0]][0]} max={data[keys[0]][1]} desc={data[keys[0]][2]}/>
                    <InputCardSliderOnly title={keys[1]} min={data[keys[1]][0]} max={data[keys[1]][1]} desc={data[keys[1]][2]}/>
                    <InputCardSliderOnly title={keys[2]} min={data[keys[2]][0]} max={data[keys[2]][1]} desc={data[keys[2]][2]}/>
                </div>
                <div class="card-deck">
                    <InputCardSliderOnly title={keys[3]} min={data[keys[3]][0]} max={data[keys[3]][1]} desc={data[keys[3]][2]}/>
                    <InputCardSliderOnly title={keys[4]} min={data[keys[4]][0]} max={data[keys[4]][1]} desc={data[keys[4]][2]}/>
                    <InputCardSliderOnly title={keys[5]} min={data[keys[5]][0]} max={data[keys[5]][1]} desc={data[keys[5]][2]}/>
                </div>
            </div>
        );
    }
    return (
        <div class="card-deck">
            <InputCard title={keys[0]} classes={data[keys[0]]}/>
            <InputCard title={keys[1]} classes={data[keys[1]]}/>
            <InputCard title={keys[2]} classes={data[keys[2]]}/>
        </div>
    );
}