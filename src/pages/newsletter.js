import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Giff's Miscellanea" />
    <h1>Giff's Miscellanea</h1>
    <p>This is an email newsletter about things that interest me. And maybe you, too.</p>
    <iframe scrolling="no" style={{width: '100%', height: '220px', border: '0'}} src="https://buttondown.email/mattg?as_embed=true"></iframe>
  </Layout>
)

export default IndexPage
