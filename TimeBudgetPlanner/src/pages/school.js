import React from "react"
import { graphql } from "gatsby";

import Header from "../components/header"
import Image from "../components/image"
import SEO from "../components/seo"

const schoolCode = 'Fhs';

export const query = graphql`
  {
    allFhsCsv {
      nodes {
        Class_Name
        Category_Letters
        Maximum_Recomended_Hours
        Minimum_Recomended_Hours
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const classNodes = data.allFhsCsv.nodes
  console.log(classNodes)
  return (
    <div>
      <p>Test</p>

      {classNodes.map(node => (
        <p>{node.Class_Name}</p>
      ))}
    </div>
  )
}

export default IndexPage
