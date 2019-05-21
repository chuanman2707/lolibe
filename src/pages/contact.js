import React from "react"
// import { Link } from "gatsby"
import { PageHeader, Banner } from "../utils"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactImg from "../images/bcg/contactBcg.jpeg"
const ContactPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={ContactImg}>
      <Banner title="Contact Us" subtitle="Feel Free to contact us anytime" />
    </PageHeader>
  </Layout>
)

export default ContactPage
