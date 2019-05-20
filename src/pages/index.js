import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3>hello from index</h3>
    <div className="container">
      <div className="row">
        <div className="col-6">hello world</div>
        <ButtonWrapper>Click Me</ButtonWrapper>
      </div>
    </div>
  </Layout>
)

const ButtonWrapper = styled.button`
  background: blue;
  color: white;
`
export default IndexPage
