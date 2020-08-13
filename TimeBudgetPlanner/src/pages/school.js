import React from "react"
import * as CSV from 'csv-string';

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

  console.log(categorizedClasses)

  return (
    <div>
      {console.log(classes)}
      <div>Hello</div>
    </div>
  )
} 