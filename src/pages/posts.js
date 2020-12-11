import React from 'react'
import Layout from "../components/Layout"
import Posts from '../components/Posts'
import Allposts from '../components/Allposts'
import {graphql} from 'gatsby'
import SEO from '../components/SEO'

const postsPage = ({data}) => {
    const {allMdx:{nodes:posts}}=data
    return (
  <Layout>
    <SEO title="Blog | Recently Published" />
    <Posts posts={posts} title="recently published" />
    <Allposts />
  </Layout>
    )
}

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC} limit: 3) {
      nodes {
        excerpt
        frontmatter {
          title
          author
          category
          date(formatString: "MMMM Do, Y")
          slug
          readTime
          image {
            childImageSharp {
              fluid (maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`

export default postsPage
