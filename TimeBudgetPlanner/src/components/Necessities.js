import React from 'react'
import CardDeck from "../components/CardDeck";

export default class Necessities extends React.Component {

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
                    <h2 class="text-secondary mb-0">Necessities</h2>
    
                    <CardDeck 
                        sliderOnly={true}
                        data = {{
                            "Sleep": [49, 70, "Preset at 7 hours of sleep a night however 9 hours is highly recommended for high school teens"],
                            "Necessities": [0, 25, "Eating, showering, chores, etc."],
                            "Down Time": [0, 25, "Meditation, transportation, etc."]
                        }}
                        onChange={this.handleValChange}
                        hourValues={this.state.hourValues}
                    />

                    <CardDeck 
                        sliderOnly={true}
                        data = {{
                            "Family Time": [0, 25],
                            "Play Time": [0, 25, "Social media, Movies/TV, Video Games"],
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