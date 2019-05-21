import React from "react"
// import { Link } from "gatsby"
import { PageHeader, Banner } from "../utils"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HostImg from "../images/bcg/menuBcg.jpeg"

const HostPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={HostImg}>
      <Banner title="Friendly Host" subtitle={`Friendly host`} />
    </PageHeader>
  </Layout>
)

export default HostPage
