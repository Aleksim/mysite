import React from 'react'
import Layout from "../components/Layout"
import SEO from '../components/SEO'
import Random from '../components/Random'


const services = () => {
    return (
  <Layout>
    <SEO title="Random stuff" />
    <Random />
  </Layout>
    )
}

export default services
