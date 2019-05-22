import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"
import { Link } from "gatsby"
export default class Footer extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: <Link to="https://facebook.com" />,
      },
      {
        id: 2,
        icon: <FaTwitter className="icon twitter-icon" />,
        path: <Link to="https://twitter.com" />,
      },
      {
        id: 3,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: <Link to="https://instagram.com" />,
      },
    ],
  }
  render() {
    return (
      <FooterWrapper>
        <div className="title">Lolibe</div>
        <div className="icons">
          {this.state.icons.map(icon => {
            return (
              <a
                href={icon.path}
                key={icon.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon.icon}
              </a>
            )
          })}
        </div>
        <p className="copyright">Copyright &copy; 2019 Lolibe</p>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer`
  background: ${styles.colors.mainBlack};
  padding: 2rem 0;
  .icons {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .icon {
    color: ${styles.colors.mainWhite};
    font-size: 1.3rem;
    ${styles.transition({})};
    &:hover {
      color: ${styles.colors.mainYellow};
      font-size: 1.5rem;
    }
  }
  .copyright {
    color: ${styles.colors.mainYellow2};
    text-transform: capitalize;
    text-align: center;
    font-size: 0.7rem;
    margin: 1rem 0;
  }
  .title {
    margin: 0 auto 2rem auto;
    width: 10rem;
    text-transform: uppercase;
    padding: 0.3rem 1rem;
    text-align: center;
    color: ${styles.colors.mainYellow};
    font-size: 1.5rem;
    ${styles.border({})};
  }
`
