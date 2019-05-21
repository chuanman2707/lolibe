import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import { HomeHeader } from "../utils"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader />
  </Layout>
)

export default IndexPage
