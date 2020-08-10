import React from "react"
import { graphql } from "gatsby";

import Header from "../components/header"
import Image from "../components/image"
import SEO from "../components/seo"
import InputCard from '../components/InputCard'

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
        <InputCard title={node.Class_Name} min={node.Minimum_Recomended_Hours} max={node.Maximum_Recomended_Hours}/>
      ))}
    </div>
  )
}

export default IndexPage
