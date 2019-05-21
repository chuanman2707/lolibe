import React from "react"
import styled from "styled-components"
import img from "../images/bcg/download.jpeg"
function HomeHeader({ img, children }) {
  return <IndexHeader img={img}>{children}</IndexHeader>
}
function PageHeader({ img, children }) {
  return <DefaultHeader img={img}>{children}</DefaultHeader>
}

const IndexHeader = styled.header`
  min-height: calc(100vh - 52px);
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.img}) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`
const DefaultHeader = styled(IndexHeader)`
  min-height: calc(100vh - 50px);
`
HomeHeader.defaultProps = {
  img: img,
}
DefaultHeader.defaultProps = {
  img: img,
}
export { HomeHeader, PageHeader }
