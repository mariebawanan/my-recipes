import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import styled from 'styled-components'
import bgHero from '../../assets/bg-hero.jpeg'
import GlobalStyle from '../../styles/GlobalStyle'

const LayoutContainer = styled.div`
  &:before {
    background: url(${bgHero});
    background-size: cover;
    content: "";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    opacity: 0.2
  }
`

const Layout = props => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <LayoutContainer>
        <Header />
        <div>{props.children}</div>
        <Footer />
      </LayoutContainer>
    </React.Fragment>
  )
}

export default Layout