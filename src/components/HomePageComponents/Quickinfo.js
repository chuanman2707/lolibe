import React, { Component } from "react"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../utils"
export default class Quickinfo extends Component {
  render() {
    return (
      <Section>
        <Title message="let us tell you" title="Our Mission" />
        <QuickInfoWrapper>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nisi
            totam in ducimus laudantium deleniti, culpa, accusamus ipsa dicta
            quis accusantium fugit, blanditiis repudiandae! Nesciunt rem
            reiciendis molestias consectetur eos!
          </p>
        </QuickInfoWrapper>
        <Link to="/about/" style={{ textDecoration: "none" }}>
          <SectionButton style={{ margin: "2rem auto" }}>About</SectionButton>
        </Link>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 992px) {
    width: 60%;
  }
`
