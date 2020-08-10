import React, { Component } from 'react';
import InputCard from './InputCard'

export default function CardDeck(props) {
    return (
        <div class="card-deck">
            <InputCard title={props.titles[0]} min={props.mins[0]} max={props.maxs[0]}/>
            <InputCard title={props.titles[1]} min={props.mins[1]} max={props.maxs[1]}/>
            <InputCard title={props.titles[2]} min={props.mins[2]} max={props.maxs[2]}/>
        </div>
    );
}