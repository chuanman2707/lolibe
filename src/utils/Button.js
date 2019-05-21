import styled from "styled-components"
import { styles } from "../utils"

const BannerButton = styled.button`
  display: block;
  /* background-image: linear-gradient(
    to right,
    #02aab0 0%,
    #00cdac 51%,
    #02aab0 100%
  ); */
  color: ${styles.colors.mainWhite};
  background: transparent;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 0.5rem;
  font-weight: 700;
  ${styles.border({ color: `${styles.colors.mainWhite}` })};
  margin-bottom: 1rem;
  ${styles.transition({})};
  &:hover {
    background-position: right center;
    background: ${styles.colors.mainWhite};
    color: ${styles.colors.mainBlack};
    cursor: pointer;
  }
`

const SectionButton = styled(BannerButton)`
  color: ${styles.colors.mainBlack};
  ${styles.border({ color: `${styles.colors.mainBlack}` })};
  &:hover {
    background: ${styles.colors.mainBlack};
    color: ${styles.colors.mainYellow};
  }
`
export { BannerButton, SectionButton }
