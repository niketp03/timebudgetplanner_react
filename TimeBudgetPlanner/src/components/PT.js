import React from 'react'
import CardDeck from "../components/CardDeck";

export default class PT extends React.Component {

    handleValChange = (name, e) => {
        var currentHours = this.state.hourValues;
        currentHours[name] = e.target.value;
        this.setState({hourValues: currentHours})
      }

    state = {
        hourValues: {}
    }

    render() {
        return (
            <div class="container">
                <div class="content-section-heading text-center">
                    <h2 class="text-secondary mb-0">Personal Time</h2>
    
                    <CardDeck 
                        sliderOnly={true}
                        data = {{
                            "Athletics": [0, 25, "test of desc"],
                            "School Clubs": [0, 25],
                            "Job": [0, 40]
                        }}
                        onChange={this.handleValChange}
                        hourValues={this.state.hourValues}
                    />
                    <CardDeck 
                        sliderOnly={true}
                        data = {{
                            "Religious Activities": [0, 25],
                            "Community Service": [0, 25],
                            "Other": [0, 25]
                        }}
                        onChange={this.handleValChange}
                        hourValues={this.state.hourValues}
                    />                  
                </div>
            </div>
        )
    }
}