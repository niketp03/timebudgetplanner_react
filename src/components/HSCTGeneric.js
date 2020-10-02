import React from 'react'
import CardDeck from "../components/CardDeck";
import _ from 'lodash'
import InputCardSliderOnly from './InputCardSliderOnly';

export default class HSCTGeneric extends React.Component {

    handleValChangeHSCT = (name, e) => {
        var currentHours = this.state.hourValues;
        currentHours[name] = e.target.value;
        this.setState({hourValues: currentHours})
        this.props.updateChart(currentHours, null, null)
      }

    state = {
        hourValues: {}
    }

    render(){
        
        /*for (var i = 0; i < this.keys.length; i++){
            if (this.state.hourValues[this.keys[i]] == null) {
                this.state.hourValues[this.keys[i]] = 0
            }
        }*/

        return (
            <div class="container">
                <div class="content-section-heading text-center">
                    <h2 class="text-secondary mb-0">Homework and Class Time</h2>
                    <h4>All hours are listed per 7-day week.</h4>
                    <h5>Please indicate the average number of hours you spend per week doing homework for each subject.</h5>
                    <InputCardSliderOnly 
                        title={"Hours per week in school"} 
                        data={[0, 60]} 
                        onChange={this.handleValChangeHSCT} 
                        value={this.state.hourValues["Hours per week in school"]} 
                    />
                    <CardDeck
                        sliderOnly={true}
                        data = {{
                            "History": [0, 16],
                            "English": [0, 16],
                            "Math": [0, 16]
                        }}
                        onChange={this.handleValChangeHSCT}
                        hourValues={this.state.hourValues}
                    />
                    <CardDeck 
                        sliderOnly={true}
                        data = {{
                            "Science": [0, 16],
                            "Foreign Language": [0, 16],
                            "Visual and Performing arts": [0, 16]
                        }}
                        onChange={this.handleValChangeHSCT}
                        hourValues={this.state.hourValues}
                    />
                    <CardDeck 
                        sliderOnly={true}
                        data = {{
                            "College Prep Elective": [0, 16],
                            "Extra Class 1": [0, 16],
                            "Extra Class 2": [0, 16]
                        }}
                        onChange={this.handleValChangeHSCT}
                        hourValues={this.state.hourValues}
                    />
                </div>
            </div>
        )
    }
}
