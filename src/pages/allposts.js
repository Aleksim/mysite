import React from 'react'
import Layout from "../components/Layout"
import Posts from '../components/Posts'
import SEO from '../components/SEO'
import {graphql} from 'gatsby'

const postsPage = ({data}) => {
    const {allMdx:{nodes:posts}}=data
    return (
  <Layout>
    <SEO title="Blog | All Posts" />
    <Posts posts={posts} title="All Posts" />
  </Layout>
    )
}

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
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
