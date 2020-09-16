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
        (this.props.hours == null) ? (this.hours = {}) : (this.hours = this.props.hours);
        (this.props.names == null) ? (this.names = {}) : (this.names = this.props.names);
        (this.props.personalTime == null) ? (this.personalTime = {}) : (this.personalTime = this.props.personalTime);
        (this.props.necessities == null) ? (this.necessities = {}) : (this.necessities = this.props.necessities);
        return (
            <div class="container"   style={{display: "block"}}>
                <div class="content-section-heading text-center">
                    <h2 class="text-secondary mb-0" style={{paddingTop: "35px"}}>Homework and Class Time</h2>

                    <h5>Time in School: {("Hours per week in school" in this.hours) ? this.hours["Hours per week in school"] + " hours" : "None"}</h5>
                    <div class="row">
                        <div class="col-sm-4">
                            <h5>History: {("History" in this.names && "History" in this.hours) ? this.names["History"] + " - " + this.hours["History"] + " hours" : "None"}</h5>
                            <h5>English: {("English" in this.names && "English" in this.hours) ? this.names["English"] + " - " + this.hours["English"] + " hours": "None"}</h5>
                            <h5>Math: {("Math" in this.names && "Math" in this.hours) ? this.names["Math"] + " - " + this.hours["Math"] + " hours": "None"}</h5>
                        </div>
                        <div class="col-sm-4">
                            <h5>Science: {("Science" in this.names && "Science" in this.hours) ? this.names["Science"] + " - " + this.hours["Science"] + " hours": "None"}</h5>
                            <h5>Foreign Language: {("Foreign Language" in this.names && "Foreign Language" in this.hours) ? this.names["Foreign Language"] + " - " + this.hours["Foreign Language"] + " hours": "None"}</h5>
                            <h5>Visual and Performing arts: {("Visual and Performing arts" in this.names && "Visual and Performing arts" in this.hours) ? this.names["Visual and Performing arts"] + " - " + this.hours["Visual and Performing arts"] + " hours": "None"}</h5>
                        </div>
                        <div class="col-sm-4">
                            <h5>College Prep Elective: {("College Prep Elective" in this.names && "College Prep Elective" in this.hours) ? this.names["College Prep Elective"] + " - " + this.hours["College Prep Elective"] + " hours": "None"}</h5>
                            <h5>Extra Class 1: {("Extra Class 1" in this.names && "Extra Class 1" in this.hours) ? this.names["Extra Class 1"] + " - " + this.hours["Extra Class 1"] + " hours": "None"}</h5>
                            <h5>Extra Class 2: {("Extra Class 2" in this.names && "Extra Class 2" in this.hours) ? this.names["Extra Class 2"] + " - " + this.hours["Extra Class 2"] + " hours": "None"}</h5>
                        </div>

                    </div>

                    <h2 class="text-secondary mb-0" style={{paddingTop: "35px"}}>Personal Time</h2>

                    <div class="row">
                        <div class="col-sm-4">
                            <h4>Athletics: {("Athletics" in this.personalTime) ? this.personalTime["Athletics"] + " hours" : "0 hours"}</h4>
                            <h4>Religious Activities: {("Religious Activities" in this.personalTime) ? this.personalTime["Religious Activities"] + " hours" : "0 hours"}</h4>
                        </div>
                        <div class="col-sm-4">
                            <h4>School Clubs: {("School Clubs" in this.personalTime) ? this.personalTime["School Clubs"] + " hours" : "0 hours"}</h4>
                            <h4>Community Service: {("Community Service" in this.personalTime) ? this.personalTime["Community Service"] + " hours" : "0 hours"}</h4>
                        </div>
                        <div class="col-sm-4">
                            <h4>Job: {("Job" in this.personalTime) ? this.personalTime["Job"] + " hours" : "0 hours"}</h4>
                            <h4>Other: {("Other" in this.personalTime) ? this.personalTime["Other"] + " hours" : "0 hours"}</h4>
                        </div>
                    </div>

                    <h2 class="text-secondary mb-0" style={{paddingTop: "35px"}}>Necessities</h2>

                    <div class="row">
                        <div class="col-sm-4">
                            <h4>Sleep: {("Sleep" in this.necessities) ? this.necessities["Sleep"] + " hours" : "63 hours"}</h4>
                            <h4>Family Time: {("Family Time" in this.necessities) ? this.necessities["Family Time"] + " hours" : "0 hours"}</h4>
                        </div>
                        <div class="col-sm-4">
                            <h4>Necessities: {("Necessities" in this.necessities) ? this.necessities["Necessities"] + " hours" : "0 hours"}</h4>
                            <h4>Play Time: {("Play Time" in this.necessities) ? this.necessities["Play Time"] + " hours" : "0 hours"}</h4>
                        </div>
                        <div class="col-sm-4">
                            <h4>Down Time: {("Down Time" in this.necessities) ? this.necessities["Down Time"] + " hours" : "0 hours"}</h4>
                            <h4>Other: {("Other" in this.necessities) ? this.necessities["Other"] + " hours" : "0 hours"}</h4>
                        </div>

                    </div>


                    <div style={{paddingTop: "35px"}}>
                        <h3 style={{paddingTop: "20px"}}>Student Signature_______________________________________</h3>
                        <h3 style={{paddingTop: "20px"}}>Parent Signature________________________________________</h3>
                        <h3 style={{paddingTop: "20px"}}>Date________________</h3>
                    </div>
                </div>
            </div>
        )
    }
}
