import React from 'react'
import CardDeck from "../components/CardDeck";
import _ from 'lodash'
import InputCardSliderOnly from './InputCardSliderOnly';

export default class HSCT extends React.Component {

    keys = Object.keys(this.props.data)

    handleSelect = (name, value) => {
        var currentItems = this.state.itemValues;
        currentItems[name] = value;
        this.setState({itemValues: currentItems})
        var currentHours = this.state.hourValues;
        currentHours[name] = this.props.data[name][value][0];
        this.setState({hourValues: currentHours})
        this.props.updateChart(currentHours, null, null)
    }

    handleValChangeHSCT = (name, e) => {
        var currentHours = this.state.hourValues;
        currentHours[name] = e.target.value;
        this.setState({hourValues: currentHours})
        this.props.updateChart(currentHours, null, null)
      }

    state = {
        hourValues: {},
        itemValues: {}
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
                    <h2 class="text-secondary mb-0">Homework/Study/Class Time</h2>
                    <h4>Please leave it as "Choose..." if you do not have a class in that section. All hours are listed per 7-day week.</h4>
                    <h5>Hours are teacher reported and averaged. You cannot select a lower amount than the average.</h5>
                    <InputCardSliderOnly 
                        title={"Hours per week in school"} 
                        data={[0, 60]} 
                        onChange={this.handleValChangeHSCT} 
                        value={this.state.hourValues["Hours per week in school"]} 
                    />
                    <CardDeck 
                        data={_.pick(this.props.data, ["History", "English", "Math"])}
                        onChange={this.handleValChangeHSCT}
                        hourValues={this.state.hourValues}
                        onSelect={this.handleSelect}
                        itemValues={this.state.itemValues}
                    />
                    <CardDeck 
                        data={_.pick(this.props.data, ["Science", "Foreign Language", "Visual and Performing arts"])}
                        onChange={this.handleValChangeHSCT}
                        hourValues={this.state.hourValues}
                        onSelect={this.handleSelect}
                        itemValues={this.state.itemValues}
                    />
                </div>
            </div>
        )
    }
}
