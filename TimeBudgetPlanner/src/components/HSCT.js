import React from 'react'
import CardDeck from "../components/CardDeck";

export default function HSCT(props) {
    return (
        <div class="container">
            <div class="content-section-heading text-center">
                <h2 class="text-secondary mb-0">Homework/Study/Class Time</h2>
                <h4>Please leave it as "Choose..." if you do not have a class in that section. All hours are listed per 7-day week.</h4>
                <h5>Hours are teacher reported and averaged. You cannot select a lower amount than the average.</h5>
                <CardDeck titles={["History", "Science", "Math"]} mins={[4, 5, 6]} maxs={[16, 17, 18]} />
            </div>
        </div>
    )
}
