import React, { Component } from 'react'

export default class Printable extends Component {
    
    state = {
        value: this.props
    };
      
    componentDidUpdate(prevProps) {
        if(prevProps !== this.props) {
          this.setState({value: this.props});
        }
      }

    render() {
        return (
            <div class="container"   style={{display: "block"}}>
                <div class="content-section-heading text-center">
                    <h2 class="text-secondary mb-0">Homework and Class Time</h2>

                    <h5>Time in School: {("Hours per week in school" in this.props.hours) ? this.props.hours["Hours per week in school"] + " hours" : "None"}</h5>
                    <div class="row">
                        <div class="col-sm-4">
                            <h5>History: {("History" in this.props.names && "History" in this.props.hours) ? this.props.names["History"] + " - " + this.props.hours["History"] + " hours" : "None"}</h5>
                            <h5>English: {("English" in this.props.names && "English" in this.props.hours) ? this.props.names["English"] + " - " + this.props.hours["English"] + " hours": "None"}</h5>
                            <h5>Mathematics: {("Mathematics" in this.props.names && "Mathematics" in this.props.hours) ? this.props.names["Mathematics"] + " - " + this.props.hours["Mathematics"] + " hours": "None"}</h5>
                        </div>
                        <div class="col-sm-4">
                            <h5>Science: {("Science" in this.props.names && "Science" in this.props.hours) ? this.props.names["Science"] + " - " + this.props.hours["Science"] + " hours": "None"}</h5>
                            <h5>World Language: {("World Language" in this.props.names && "World Language" in this.props.hours) ? this.props.names["World Language"] + " - " + this.props.hours["World Language"] + " hours": "None"}</h5>
                            <h5>Visual and Performing Arts: {("Visual and Performing Arts" in this.props.names && "Visual and Performing Arts" in this.props.hours) ? this.props.names["Visual and Performing Arts"] + " - " + this.props.hours["Visual and Performing Arts"] + " hours": "None"}</h5>
                        </div>
                        <div class="col-sm-4">
                            <h5>College Prep Elective: {("College Prep Elective" in this.props.names && "College Prep Elective" in this.props.hours) ? this.props.names["College Prep Elective"] + " - " + this.props.hours["College Prep Elective"] + " hours": "None"}</h5>
                            <h5>Extra Class 1: {("Extra Class 1" in this.props.names && "Extra Class 1" in this.props.hours) ? this.props.names["Extra Class 1"] + " - " + this.props.hours["Extra Class 1"] + " hours": "None"}</h5>
                            <h5>Extra Class 2: {("Extra Class 2" in this.props.names && "Extra Class 2" in this.props.hours) ? this.props.names["Extra Class 2"] + " - " + this.props.hours["Extra Class 2"] + " hours": "None"}</h5>
                        </div>

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
