import React from 'react'
import CardDeck from "../components/CardDeck";

export default class Necessities extends React.Component {

    handleValChange = (name, e) => {
        var currentHours = this.state.hourValues;
        currentHours[name] = e.target.value;
        this.setState({hourValues: currentHours})
        this.props.updateChart(null, null, currentHours)
      }

    state = {
        hourValues: {"Sleep": 63}
    }
    render() {
        return (
            <div class="container">
                <div class="content-section-heading text-center">
                    <h2 class="text-secondary mb-0">Necessities</h2>
    
                    <CardDeck 
                        sliderOnly={true}
                        data = {{
                            "Sleep": [49, 70, "Preset at the recommended 9 hours of sleep a night however please adjust this to the amount of time you normally sleep.", "https://www.loom.com/share/25b369a3ae7941c29f24386d02208278"],
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
                            "Play Time": [0, 25, "Social media, Movies/TV, Video Games", "https://www.loom.com/share/581d2ae0c67e4635a1941f8b3296e9d3"],
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