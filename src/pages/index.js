import React from "react"
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Now from '../components/Now'
import Past from '../components/Past'

export default function Home() {
  return(
    <Layout>
      <SEO title="Alexi's site"/>
      <Now/>
      <Past/>
    </Layout>
  )
}
