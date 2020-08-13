import React from 'react'
import CardDeck from "../components/CardDeck";
import _ from 'lodash'

export default class HSCT extends React.Component {

    keys = Object.keys(this.props.data)

    handleValChangeHSCT = (name, e) => {
        var currentHours = this.state.hourValues;
        currentHours[name] = e.target.value;
        this.setState({hourValues: currentHours})
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
                    <h2 class="text-secondary mb-0">Homework/Study/Class Time</h2>
                    <h4>Please leave it as "Choose..." if you do not have a class in that section. All hours are listed per 7-day week.</h4>
                    <h5>Hours are teacher reported and averaged. You cannot select a lower amount than the average.</h5>
                    
                    <CardDeck 
                        data={_.pick(this.props.data, ["History", "English", "Math"])}
                        onChange={this.handleValChangeHSCT}
                        hourValues={this.state.hourValues}
                    />
                    <CardDeck 
                        data={_.pick(this.props.data, ["Science", "Foreign Language", "Visual and Performing arts"])}
                        onChange={this.handleValChangeHSCT}
                        hourValues={this.state.hourValues}
                    />
                </div>
            </div>
        )
    }
}
