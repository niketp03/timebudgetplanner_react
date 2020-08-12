import React from 'react'
import CardDeck from "../components/CardDeck";

export default function HSCT(props) {
    return (
        <div class="container">
            <div class="content-section-heading text-center">
                <h2 class="text-secondary mb-0">Homework/Study/Class Time</h2>
                <h4>Please leave it as "Choose..." if you do not have a class in that section. All hours are listed per 7-day week.</h4>
                <h5>Hours are teacher reported and averaged. You cannot select a lower amount than the average.</h5>
                <CardDeck 
                    data={{
                        "History": {"World Cultures": [10, 36], "Other Cls": [4, 16], "Other Cls2": [4, 16]},
                        "Science": {"Sciency Class": [10, 36], "Other Cls Sci": [4, 16]},
                        "Math": {"Calc": [10, 36], "Precalc": [4, 16], "IM5": [4, 16]}
                    }}
                />
            </div>
        </div>
    )
}
