import React from 'react'
import styled from 'styled-components'
import theme from '../../styles/theme'
import cooking from '../../icons/cooking.svg'

const {colors} = theme

const HeaderContainer = styled.div`
  display: flex
  margin: 3rem 10rem
  h1 {
    span {
      color: ${colors.orange}
    }
    &:before{
      display: inline-block;
      content: '';
      background: url(${cooking}) no-repeat;
      background-size: 50px 50px;
      height: 50px;
      width: 50px;
      padding-right: 10px;
    }
  }


`

const Header = () => {
  return (
    <HeaderContainer>
        <h1>my<span className="emphasize">Recipes</span></h1>
    </HeaderContainer>
  )
}

export default Header;