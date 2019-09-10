import React from 'react'
import styled from 'styled-components'
import theme from '../../styles/theme'
import mixins from '../../styles/mixins'
import time from '../../icons/time.svg'

const { colors, fontSizes } = theme;

const RecipeContainer = styled.div`
  display: grid
  border: 1px solid ${colors.orange}
`

const DateContainer = styled.div`
  display: flex
  justify-content: space-between
  font-size: ${fontSizes.small}
`

const Image = styled.img`
  width: 100%;
`

const DetailsContainer = styled.div`
  padding: 15px 15px 50px;
  h4 {
    ${mixins.header}
  }

`

const TimeDetails = styled.div`
  display: flex;

  p {
    margin-right: 40px
    .label:before {
      display: inline-block;
      content: '';
      background: url(${time}) no-repeat;
      background-size: 10px 10px;
      height: 10px;
      width: 10px;
      padding-right: 10px;
    }
  }

`
const MainContainer = styled.div`
  display: grid
  width: 400px;
  .label {
    color: ${colors.grey}
    font-style: italic
  }
`

const ViewButton = styled.button`
  width: 50%
  height: 50px
  color: ${colors.white} 
  background-color: ${colors.orange}
  text-transform: uppercase;
  font-size: 1rem
  justify-self: flex-end
  margin-top: -25px
  paddin-top: 20px
  margin-right: 40px
  font-weight: 700
  transition: all 0.3s ease 0s;
  &:hover {
    background-color: ${colors.orange};
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
    color: #fff;
    transform: translateX(7px);
  }
`

const Recipe = ({recipe}) => {
  return(
    <MainContainer>
    <DateContainer>
      <p><span class="label">Posted: </span>Jan 5, 2019</p>
      <p><span class="label">Edited: </span>Jan 5, 2019</p>
    </DateContainer>
    <RecipeContainer>
      <Image src={recipe.images.medium} />
      <DetailsContainer>
        <h4>{recipe.title}</h4>
        <p>{recipe.description}</p>
        <TimeDetails>
          <p><span class="label">Prep: </span>5</p>
          <p><span class="label">Cook: </span>10</p>
        </TimeDetails>
      </DetailsContainer>
    </RecipeContainer>
    <ViewButton>View Recipe</ViewButton>
    </MainContainer>
  )
}

export default Recipe