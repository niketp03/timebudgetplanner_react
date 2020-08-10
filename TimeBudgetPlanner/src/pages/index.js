import React from "react"
import { Link } from "gatsby"
import { Button } from "react-bootstrap"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <header class="masthead d-flex" id="headerMaster">
      <div class="container text-center my-auto" style={{"background-size": "cover cover"}}>
        <h1 class="mb-1" style={{"padding-bottom": "100px"}}>Time Budget Planner</h1>
        <h4><a href="https://www.youtube.com/watch?v=mjYurmncCwo&amp;t=1s" target="_blank">Tutorial Video and Explaination</a></h4>
        <select id="schoolSelect" class="custom-select my-1 mr-sm-2" style={{"width":"25%"}}>
            <option value="" selected="" disabled="">Select your school</option>
            <option value="fhs">Folsom High School</option>
            <option value="chs">Cordova High School</option>
        </select>
        <div class="d-xl-none">
          <h4>This device may be too small to properly print this webpage</h4>
        </div>
        <Button variant="primary">Go</Button> 
        <h4 class="mb-4">Please complete the Time Budget Worksheet to determine the feasibility of your schedule next year. Please select your classes and other activities that you plan on participating in for the 2019-2020 school year. Once you have completed the survey, please press the "print" button and attach to your AP Contract.</h4>
      </div>
		</header>
  )
}

export default IndexPage
