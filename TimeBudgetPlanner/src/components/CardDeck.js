import React, { Component } from 'react';
import InputCard from './InputCard'

export default function CardDeck(props) {
    return (
        <div class="card-deck">
            <InputCard title={props.titles[0]} classes = {{"World Cultures": [10, 36], "Other Cls": [4, 16], "Other Cls2": [4, 16]}} />
        </div>
    );
}