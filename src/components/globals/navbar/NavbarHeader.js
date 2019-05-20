import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../../images/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import styled from "styled-components"

export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <img src={logo} alt="lolibe" />
        </Link>
        <FaAlignRight
          className="toggle-icon"
          onClick={() => {
            handleNavbar()
          }}
        />
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  display: 2vh;
`
