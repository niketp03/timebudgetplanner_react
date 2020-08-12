import React from 'react'
import CardDeck from "../components/CardDeck";

export default function PT(props) {
    return (
        <div class="container">
            <div class="content-section-heading text-center">
                <h2 class="text-secondary mb-0">Personal Time</h2>

                <CardDeck 
                    sliderOnly={true}
                    data = {{
                        "Athletics": [0, 25],
                        "School Clubs": [0, 25],
                        "Job": [0, 40],
                        "Religious Activities": [0, 25],
                        "Community Service": [0, 25],
                        "Other": [0, 25]
                    }}
                />
            </div>
        </div>
    )
}