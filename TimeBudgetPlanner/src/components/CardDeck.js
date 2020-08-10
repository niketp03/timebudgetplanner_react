import React, { Component } from 'react';
import InputCard from './InputCard'

export default function CardDeck(props) {
    return (
        <div class="card-deck">
            <InputCard title={props.titles[0]} min={props.mins[0]} max={props.maxs[0]}/>
        </div>
    );
}