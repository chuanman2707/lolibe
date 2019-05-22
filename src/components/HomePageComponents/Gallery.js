import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { styles, Section } from "../../utils"
import Img from "gatsby-image"
import { Link } from "gatsby"
const GETIMAGEGRAPHQL = graphql`
  {
    img1: file(relativePath: { eq: "homeGallery/img1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img2: file(relativePath: { eq: "homeGallery/img2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img3: file(relativePath: { eq: "homeGallery/img3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default function Gallery() {
  return (
    <StaticQuery
      query={GETIMAGEGRAPHQL}
      render={data => {
        const img1 = data.img1.childImageSharp.fluid
        const img2 = data.img2.childImageSharp.fluid
        const img3 = data.img3.childImageSharp.fluid
        return (
          <Section>
            <GalleryWrapper>
              <div className="item item-1">
                <Img fluid={img1} />
                <Link to="/host/" className="info">
                  Netherland
                </Link>
              </div>
              <div className="item item-2">
                <Img fluid={img2} />
                <Link to="/host/" className="info">
                  German
                </Link>
              </div>
              <div className="item item-3">
                <Img fluid={img3} />
                <Link to="/host/" className="info">
                  France
                </Link>
              </div>
            </GalleryWrapper>
          </Section>
        )
      }}
    />
  )
}

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  .item {
    position: relative;
  }
  .info {
    position: absolute;
    top: 50%;
    left: 50%;
    text-decoration: none;
    color: ${styles.colors.mainWhite};
    transform: translate(-50%, -50%);
    font-size: 3rem;
    letter-spacing: 0.5rem;
    text-transform: capitalize;
    ${styles.transition({})};
    &:hover {
      color: ${styles.colors.mainYellow};
      font-size: 3.3rem;
    }
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 992px) {
    .gatsby-image-wrapper {
      height: 100%;
    }
    grid-template-areas:
      "one one two two"
      "one one three three";
    .item-1 {
      grid-area: one;
    }
    .item-2 {
      grid-area: two;
    }
    .item-3 {
      grid-area: three;
    }
  }
`
