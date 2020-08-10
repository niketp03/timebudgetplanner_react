import React from "react";
import { Link } from "gatsby";
import { Button, Dropdown } from "react-bootstrap";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import HSCT from "../components/HSCT";

const IndexPage = () => {
  return (
    <div>
      <div>
        <HSCT />
      </div>
      

      <header class="masthead d-flex" id="headerMaster">
        <inputCard></inputCard>
        <div class="container text-center my-auto" style={{backgroundSize: "cover cover"}}>
          <h1 class="mb-1" style={{"padding-bottom": "100px"}}>Time Budget Planner</h1>
          <Dropdown id="schoolSelect" style={{"padding-bottom": "100px"}}>
            <Dropdown.Toggle>
              Select a School
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/fhs" value="fhs">Folsom High School</Dropdown.Item>
              <Dropdown.Item href="/chs" value="chs">Cordova High School</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div class="d-xl-none">
            <h4>This device may be too small to properly print this webpage</h4>
          </div>
          <h4 class="mb-4">Please complete the Time Budget Worksheet to determine the feasibility of your schedule next year. Please select your classes and other activities that you plan on participating in for the 2019-2020 school year. Once you have completed the survey, please press the "print" button and attach to your AP Contract.</h4>
        </div>
      </header>
    </div>

  )
}

export default IndexPage
