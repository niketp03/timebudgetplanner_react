import React from "react"
import * as CSV from 'csv-string';
import HSCT from "../components/HSCT";
import PT from "../components/PT"
import Necessities from "../components/Necessities"
import { Doughnut } from 'react-chartjs-2';

export default function School(data) {

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
    'o' : 'Other'
  }

  let categorizedClasses = {
    "History": {},
    "English": {},
    "Math": {},
    "Science": {},
    "Foreign Language": {},
    "Visual and Performing arts": {},
    "College Prep Elective": {},
    "Other": {}
  }
  
  for (var i = 0; i < classes.length; i++) { 
    let class_ = classes[i]
    let cats = class_[3].split('')
    for (var j = 0; j < cats.length; j++) {
      categorizedClasses[charToCat[cats[j]]][class_[0]] = [class_[1],class_[2]]
      categorizedClasses[charToCat['o']][class_[0]] = [class_[1],class_[2]]
    }
  } 
    
  //Handle Charting
  const getChartState = () => ({
    labels: [
      'Homework',
      'Sleep',
      'School Hours',
      'Job',
      'Family Time',
      'Sports and Clubs',
      'Play Time',
      'Other',
      'Down Time',
      'Time Not Used'
    ],
    datasets: [{
      data: [
        getHomework(),
        getSleep(),
        getSchoolHours(),
        getJob(),
        getFamilyTime(),
        getSportsAndClubs(),
        getPlayTime(),
        getOther(),
        getDownTime(),
        getTimeNotUsed()],
      backgroundColor: [
        "#3188b9",
        "#690f77",
        "#cd382e",
        "#fca476",
        "#87d9c0",
        "#ba67fa",
        "#3d782f",
        "#677dde",
        "#faf172",
      ]
    }]
  });
    
  const getHomework = () => (
    10
  );

  const getSleep = () => (
    10
  );

  const getSchoolHours = () => (
    10
  );

  const getJob = () => (
    10
  );

  const getFamilyTime = () => (
    10
  );

  const getSportsAndClubs = () => (
    10
  );

  const getPlayTime = () => (
    10
  );

  const getOther = () => (
    10
  );

  const getDownTime = () => (
    10
  );

  const getTimeNotUsed = () => (
    168 - (getHomework() + getSleep() + getSchoolHours() + getJob() + getFamilyTime() + getSportsAndClubs() + getPlayTime() + getDownTime())
  );

  var chartState = getChartState()

  return (
    <div>
      {console.log(classes)}
      <HSCT data = {categorizedClasses} />
      <PT />
      <Necessities />
      <Doughnut  id = 'mainChart' data={chartState} />
      
    </div>
  )
} 