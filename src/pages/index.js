import React from "react"
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Now from '../components/Now'
import Posts from '../components/Posts'
import {graphql} from 'gatsby'
import Projects from "../components/Projects"

const Home = ({data}) =>{
  const {allMdx:{nodes:posts}}=data
  return(
    <Layout>
      <SEO title="Alexi's site"/>
      <Now/>
      <Posts posts={posts} title="recently published" />
      <Projects/>
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
          date(formatString: "DD-MM-Y")
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

export default Home
