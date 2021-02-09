import React from "react";
import { Dropdown } from "react-bootstrap";
import Printable from '../components/Printable';
import { Helmet } from "react-helmet"

const IndexPage = () => {
  return (
    <div>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Time Budget Planner</title>       
      </Helmet>

      <header class="masthead d-flex" id="headerMaster">
        <div class="container text-center my-auto" style={{backgroundSize: "cover cover"}}>
          <h1 class="mb-1" style={{"paddingBottom": "100px"}}>Time Budget Planner</h1>
          <Dropdown id="schoolSelect" style={{"paddingBottom": "100px"}}>
            <Dropdown.Toggle>
              Select a School
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/fhs" value="fhs">Folsom High School</Dropdown.Item>
              <Dropdown.Item href="/chs" value="chs">Cordova High School</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/school-gen" value="school-gen">Non-Affliated School</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div class="d-xl-none">
            <h4>This device may be too small to properly print this webpage</h4>
          </div>
          <h4 class="mb-4">Please complete the Time Budget Worksheet to determine the feasibility of your schedule next year. Please select your classes and other activities that you plan on participating in for the 2021 - 2022 school year.</h4>
        </div>
      </header>
    </div>

  )
}

export default IndexPage
