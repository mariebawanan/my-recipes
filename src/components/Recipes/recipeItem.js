import React from 'react'
import styled from 'styled-components'
import theme from '../../styles/theme'
import mixins from '../../styles/mixins'
import media from '../../styles/media'
import time from '../../icons/time.svg'

const { colors, fontSizes } = theme;

const RecipeContainer = styled.div`
  display: grid
  border: 1px solid ${colors.orange}
  background-color: ${colors.lightGrey}

  ${media.medium`
    justify-items: center;
    text-align: center;
  `}
`

const DateContainer = styled.div`
  display: flex
  justify-content: space-between
  font-size: ${fontSizes.small}

  ${media.medium`
    font-size: ${fontSizes.tiny}
  `}
`

const Image = styled.img`
  width: 100%;
`

const DetailsContainer = styled.div`
  padding: 15px 15px 50px;
  h4 {
    ${mixins.header}
  }
  p {
    font-style: italic
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

  ${media.medium`
    flex-direction: column;
  `}

`
const MainContainer = styled.div`
  display: grid
  width: 80%;
  .label {
    color: ${colors.grey}
    font-style: italic
  }
  ${media.large`
    width: 80%;
  `}
  ${media.medium`
    width: 90%;
  `}
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

  ${media.medium`
    justify-self: center;
    margin-right: 0
  `}
`

const RecipeItem = ({recipe}) => {
  return(
    <MainContainer>
    <DateContainer>
      <p><span className="label">Posted: </span>{recipe.postDate}</p>
      <p><span className="label">Edited: </span>{recipe.editDate}</p>
    </DateContainer>
    <RecipeContainer>
      <Image src={recipe.images.medium} />
      <DetailsContainer>
        <h4>{recipe.title}</h4>
        <p>{recipe.description}</p>
        <TimeDetails>
          <p><span className="label">Prep: </span>{recipe.prepTime} mins</p>
          <p><span className="label">Cook: </span>{recipe.cookTime} mins</p>
        </TimeDetails>
      </DetailsContainer>
    </RecipeContainer>
    <ViewButton>View Recipe</ViewButton>
    </MainContainer>
  )
}

export default RecipeItem