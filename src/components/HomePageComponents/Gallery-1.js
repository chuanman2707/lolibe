import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { styles, Section } from "../../utils"
import Img from "gatsby-image"
import { Link } from "gatsby"
const GETIMAGEGRAPHQL = graphql`
  {
    getImages: allFile(filter: { relativeDirectory: { eq: "homeGallery" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
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
        const images = data.getImages.edges

        return (
          <Section>
            <GalleryWrapper>
              {images.map(({ node }, index) => {
                return (
                  <div key={index} className={`item item-${index + 1}`}>
                    <Img fluid={node.childImageSharp.fluid} />
                    <Link to="/about/" className="info">
                      Holland
                    </Link>
                  </div>
                )
              })}
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
