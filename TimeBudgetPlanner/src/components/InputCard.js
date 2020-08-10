import React, { Component } from 'react';

class InputCard extends Component {
  render() {
    return (
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">History</h4>
                    <select id="a" class="custom-select my-1 mr-sm-2">
                    <option selected="">Choose...</option>
                    <option value="World-Cultures">World Cultures</option></select>
                <input step="0.1" type="range" class="custom-range" id="aRange" value="0"/>
                <h3 class="card-text" id="aHours">0 hours</h3>
            </div>
        </div>
    );
  }
}

export default InputCard;