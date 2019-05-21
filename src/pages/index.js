import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner, BannerButton } from "../utils"
import img from "../images/bcg/abc.jpeg"
import QuickInfo from "../components/HomePageComponents/Quickinfo"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader img={img}>
      <Banner title="Lolibe" subtitle="Solo travel never been so easy">
        <BannerButton style={{ margin: "2rem auto" }}>Host</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
  </Layout>
)

export default IndexPage
