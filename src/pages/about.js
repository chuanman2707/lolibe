import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import AboutImg from "../images/bcg/aboutBcg.jpeg"
const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={AboutImg}>
      <Banner title="About Us" subtitle="a little about us" />
    </PageHeader>
  </Layout>
)

export default AboutPage
