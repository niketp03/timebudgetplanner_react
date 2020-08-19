import React, { useState } from 'react';
import * as CSV from 'csv-string';
import HSCT from "../components/HSCT";
import PT from "../components/PT"
import Necessities from "../components/Necessities"
import { Doughnut } from 'react-chartjs-2';
import { Alert } from 'react-bootstrap';

export default function School(data) {

  const [timeSum, setTimeSum] = useState(0)

  //Parse CSV into classes
  let classes = CSV.parse(data.pageContext.data)
  classes = classes.slice(1)

  const charToCat = {
    'a' : 'History',
    'b' : 'English',
    'c' : 'Math',
    'd' : 'Science',
    'e' : 'Foreign Language',
    'f' : 'Visual and Performing arts',
    'g' : 'College Prep Elective',
    'o' : 'Extra Class 1',
    'o2' : 'Extra Class 2'
  }

  let categorizedClasses = {
    "History": {},
    "English": {},
    "Math": {},
    "Science": {},
    "Foreign Language": {},
    "Visual and Performing arts": {},
    "College Prep Elective": {},
    "Extra Class 1": {},
    'Extra Class 2': {}
  }
  
  for (var i = 0; i < classes.length; i++) { 
    let class_ = classes[i]
    let cats = class_[3].split('')
    for (var j = 0; j < cats.length; j++) {
      categorizedClasses[charToCat[cats[j]]][class_[0]] = [class_[1],class_[2]]
      categorizedClasses[charToCat['o']][class_[0]] = [class_[1],class_[2]]
      categorizedClasses[charToCat['o2']][class_[0]] = [class_[1],class_[2]]
    }
  } 
    
  //Handle Charting

  var chartReference = {}; // Used to force chart update
  
  const [chartState, setChartState] = useState(formatChartJSON([0,63,0,0,0,0,0,0,0,0,119])); //Set initial chart conditions

  function formatChartJSON(chartData){
    return {
      labels: [
        'Homework',
        'Sleep',
        'School Hours',
        'Job',
        'Family Time',
        'Sports and Clubs',
        'Play Time',
        'Down Time',
        'Other Necessities',
        'Other Personal Time',
        'Time Not Used'
      ],
      datasets: [{
        data: chartData,
        backgroundColor: [
          "#3188b9",
          "#690f77",
          "#cd382e",
          "#fca476",
          "#87d9c0",
          "#ba67fa",
          "#3d782f",
          "#4DB6AC",
          "#677dde",
          "#faf172"
        ]
      }],
      options: {
        responsive: false,
        maintainAspectRatio: true
      }
    }
  }

  let Homework_ = {};
  let PersonalTime_ = {};
  let Necessities_ = {};
  let Classes_ = {};

  function updateChart(Homework, PersonalTime, Necessities, Classes){
    Homework_ = Homework;
    PersonalTime_ = PersonalTime;
    Necessities_ = Necessities;
    Classes_ = Classes;

    let chartData = chartState.datasets[0].data
    
    //Update Homework Hours and School Hours
    if(Homework != null){
      let HomeworkSum = 0
      for (let [k, v] of Object.entries(Homework)) {
        if(k != 'Hours per week in school'){
          HomeworkSum = HomeworkSum + parseFloat(v)
        }else{
          chartData[2] = parseFloat(v)
        }
      }

      chartData[0] = HomeworkSum
    }
    
    //Update Sleep Hours
    if(Necessities != null){
      if(Necessities['Sleep'] != null){
        chartData[1] = parseFloat(Necessities['Sleep'])
      }
    }

    //Update Job Hours
    if(PersonalTime != null){
      if(PersonalTime['Job'] != null){
        chartData[3] = parseFloat(PersonalTime['Job'])
      }
    }

    //Update Family Time Hours
    if(Necessities != null){
      if(Necessities['Family Time'] != null){
        chartData[4] = parseFloat(Necessities['Family Time'])
      }
    }
    
    //Update Sports and Clubs
    if(PersonalTime != null){
      let tmp = 0

      if(PersonalTime['Athletics'] != null){
        tmp += parseFloat(PersonalTime['Athletics'])
      }

      if(PersonalTime['School Clubs'] != null){
        tmp += parseFloat(PersonalTime['School Clubs'])
      }

      chartData[5] = tmp
    }

    //Update Play Time Hours
    if(Necessities != null){
      if(Necessities['Play Time'] != null){
        chartData[6] = parseFloat(Necessities['Play Time'])
      }
    }

    //Update Down Time Hours
    if(Necessities != null){
      if(Necessities['Down Time'] != null){
        chartData[7] = parseFloat(Necessities['Down Time'])
      }
    }

    //Update Other Necessities
    if (Necessities != null){
      var tmp = 0

      if(Necessities['Necessities'] != null){
        tmp += parseFloat(Necessities['Necessities'])
      }
      
      if(Necessities['Other'] != null){
        tmp += parseFloat(Necessities['Other'])
      }        

      chartData[8] = tmp
    }

    //Update Other Personal Time
    if (PersonalTime != null){
      var tmp = 0

      if(PersonalTime['Religious Activities'] != null){
        tmp += parseFloat(PersonalTime['Religious Activities'])
      }

      if(PersonalTime['Community Service'] != null){
        tmp += parseFloat(PersonalTime['Community Service'])
      }
      
      if(PersonalTime['Other'] != null){
        tmp += parseFloat(PersonalTime['Other'])
      }        

      chartData[9] = tmp
    }

    //Update Time Left Over
    setTimeSum(0)
    for(var i = 0; i < chartData.length - 1; i++){
      setTimeSum(timeSum + chartData[i])
    }
    chartData[10] = 168 - timeSum

    //Fix float precision errors
    for(var i = 0; i < chartData.length; i++){
      chartData[i] = parseFloat(chartData[i].toFixed(2))
    }
     
    setChartState(formatChartJSON(chartData))

    let d = chartReference.chartInstance
    d.update();
  }

  let chartHeight = 0

  if(window.screen.width < 500){
    chartHeight = 600
  }else{
    chartHeight = 175
  }

  return (
    <div>
      {/* Homework / Study / Class Time */}
      <HSCT data = {categorizedClasses} updateChart = {updateChart}/>

      {/* Personal Time */}
      <PT updateChart = {updateChart}/>

      <Necessities updateChart = {updateChart}/>

      <div class = "container">
        {timeSum-168 > 0 && <Alert variant={"danger"}>You are {timeSum-168} hours over the limit! There are only 168 hours in a week</Alert>}
        <Doughnut ref={(reference) => chartReference = reference } id = 'mainChart' data={chartState} height={chartHeight}/>
      </div>

      {console.log(chartHeight)}
    </div>
  )
}   