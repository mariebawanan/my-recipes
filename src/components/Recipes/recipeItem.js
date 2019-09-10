import React from 'react'
import {Link} from 'react-router-dom'
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
    flex-direction: column
  `}
`

const Image = styled.img`
  width: 100%;
`

const DetailsContainer = styled.div`
  padding: 15px 50px 50px;
  h2 {
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
  width: 70%;
  .label {
    ${mixins.label}
  }
  ${media.large`
    width: 80%;
  `}
`

const ViewButton = styled(Link)`
    
    justify-self: flex-end
    margin-top: -25px
    margin-right: 40px
    justify-items: center
    
    ${media.medium`
      justify-self: center;
      margin-right: 0
    `}

    ${mixins.button}
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
        <h2>{recipe.title}</h2>
        <p>{recipe.description}</p>
        <TimeDetails>
          <p><span className="label">Prep: </span>{recipe.prepTime} mins</p>
          <p><span className="label">Cook: </span>{recipe.cookTime} mins</p>
        </TimeDetails>
      </DetailsContainer>
    </RecipeContainer>
    <ViewButton to={`/recipe/${recipe.uuid}`}>View Recipe</ViewButton>
    </MainContainer>
  )
}

export default RecipeItem