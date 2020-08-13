import React from "react"
import * as CSV from 'csv-string';
import HSCT from "../components/HSCT";
import PT from "../components/PT"
import Necessities from "../components/Necessities"
import { Doughnut } from 'react-chartjs-2';

export default function School(data) {
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

  let chart_data = {
    labels: [
      'Homework',
      'Sleep',
      'School Hours',
      'Job',
      'Family Time',
      'Sports and Clubs',
      'Play Time',
      'Other',
      'Down Time'
    ],
    datasets: [{
      data: [300, 50, 100],
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
  };

  return (
    <div>
      {console.log(classes)}
      <div>Hello</div>
      <HSCT data = {categorizedClasses} />
      <PT />
      <Necessities />
      <Doughnut data={chart_data} />
    </div>
  )
} 