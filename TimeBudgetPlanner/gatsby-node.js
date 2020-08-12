/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions}) => {
  const { createNodeField } = actions
  console.log("NODE_OWNER: " + node.internal.owner)
  if(node.internal.owner == 'gatsby-source-filesystem'){
    slugName = createFilePath({ node, getNode, basePath: `schools` })
    createNodeField({
        node,
        name: `slug`,
        value: slugName,
      })
  }
}

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
}

exports.createPages = async ({ graphql, actions, getNode }) => {
    const { createPage } = actions
    const result = await graphql(`
    {
      allFile {
        edges {
          node {
            extension
            id
          }
        }
      }
    }
  `)
    
   await asyncForEach(result.data.allFile.edges, async ({ node }) => {
       if(node.extension == 'csv'){
        console.log(node.id);
        pNode = getNode(node.id);

        await createPage({
            path: pNode.fields.slug,
            component: path.resolve(`./src/pages/school.js`),
            context: {
              data: pNode.internal.content,
              slug: pNode.fields.slug,
            },
          })
        
        await console.log(pNode.fields.slug + " page created");
       }
   })
  }
