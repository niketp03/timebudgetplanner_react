import React from "react"
import * as CSV from 'csv-string';

export default function School(data) {
  const classes = CSV.parse(data.pageContext.data)
  return (
    <div>
      {console.log(classes)}
      <div>Hello</div>
    </div>
  )
} 