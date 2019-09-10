import React from 'react';
import styled from 'styled-components'
import theme from '../../styles/theme'
import cooking from '../../icons/cooking.svg'

const {colors} = theme

const FooterContainer = styled.div`
  display: flex
  justify-content: center
  background-color: ${colors.orange}
  margin-top: 10rem

  h2 {
    span {
      color: ${colors.white}
    }
    &:before{
      display: inline-block;
      content: '';
      background: url(${cooking}) no-repeat;
      background-size: 30px 30px;
      height: 30px;
      width: 30px;
      padding-right: 10px;
    }
  }
`

const Footer = () => (
  <FooterContainer>
    <h2>my<span className="emphasize">Recipes</span></h2>

  </FooterContainer>

)

export default Footer