import React from 'react'
import CardDeck from "../components/CardDeck";

export default function Necessities(props) {
    return (
        <div class="container">
            <div class="content-section-heading text-center">
                <h2 class="text-secondary mb-0">Necessities</h2>

                <CardDeck 
                    sliderOnly={true}
                    data = {{
                        "Sleep": [49, 70, "Preset at 7 hours of sleep a night however 9 hours is highly recommended for high school teens"],
                        "Necessities": [0, 25, "Eating, showering, chores, etc."],
                        "Down Time": [0, 25, "Meditation, transportation, etc."],
                        "Family Time": [0, 25],
                        "Play Time": [0, 25, "Social media, Movies/TV, Video Games"],
                        "Other": [0, 25]
                    }}
                />
            </div>
        </div>
    )
}