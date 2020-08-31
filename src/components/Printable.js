import React, { Component } from 'react'

export default class Printable extends Component {
    render() {
        return (
            <div class="container"   style={{display: "block"}}>
                <div class="content-section-heading text-center">
                    <h2 class="text-secondary mb-0">Homework and Class Time</h2>

                    <h5>Time in School: 35 Hours</h5>
                    <div class="row">
                        <div class="col-sm-4">
                            <h5>History: {}</h5>
                            <h5>English: None</h5>
                            <h5>Mathematics: None</h5>
                        </div>
                        <div class="col-sm-4">
                            <h5>Science: None</h5>
                            <h5>World Language: None</h5>
                            <h5>Visual and Performing Arts: None</h5>
                        </div>
                        <div class="col-sm-4">
                            <h5>College Prep Elective: None</h5>
                            <h5>Extra Class 1: None</h5>
                            <h5>Extra Class 2: None</h5>
                        </div>
                        <h5>Total Hours: 35 Hours</h5>
                    </div>

                    <h2 class="text-secondary mb-0">Personal Time</h2>

                    <div class="row">
                        <div class="col-sm-4">
                            <h4>Athletics - 0 Hours</h4>
                            <h4>Religious - 0 Hours</h4>
                        </div>
                        <div class="col-sm-4">
                            <h4>School Clubs - 0 Hours</h4>
                            <h4>Community Service - 0 Hours</h4>
                        </div>
                        <div class="col-sm-4">
                            <h4>Job - 0 Hours</h4>
                            <h4>Other - 0 Hours</h4>
                        </div>
                        <h5>Total Hours: 0 Hours</h5>
                    </div>

                    <h2 class="text-secondary mb-0">Necessities</h2>

                    <div class="row">
                        <div class="col-sm-4">
                            <h4>Sleep - 49 Hours</h4>
                            <h4>Family - 0 Hours</h4>
                        </div>
                        <div class="col-sm-4">
                            <h4>Necessities - 0 Hours</h4>
                            <h4>Play Time - 0 Hours</h4>
                        </div>
                        <div class="col-sm-4">
                            <h4>Down Time - 0 Hours</h4>
                            <h4>Other - 0 Hours</h4>
                        </div>
                        <h5>Total Hours: 49 Hours</h5>
                    </div>


                    <div   style={{display: "block"}}>
                        <h3>Student Signature_______________________________________</h3>
                        <h3>Parent Signature________________________________________</h3>
                        <h3>Date________________</h3>
                    </div>
                </div>
            </div>
        )
    }
}
