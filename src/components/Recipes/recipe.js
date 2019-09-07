import React from 'react'
import styled from 'styled-components'

const RecipeContainer = styled.div`
  display: grid

  .label {
    color: #73706e
  }
`

const DateContainer = styled.div`
  display: flex
  justify-content: space-between
`

const Image = styled.img`
`

const DetailsContainer = styled.div`
  h4 {
    color: #da7340
    text-transform: uppercase
  }

  p {
    font-style: italic
  }
`

const Recipe = ({recipe}) => {
  return(
    <RecipeContainer>
      <DateContainer>
        <p><span class="label">Posted: </span>Jan 5, 2019</p>
        <p><span class="label">Edited: </span>Jan 5, 2019</p>
      </DateContainer>
      <Image src={recipe.images.medium} />
      <DetailsContainer>
        <h4>{recipe.title}</h4>
        <p>{recipe.description}</p>
        <p><span class="label">Prep: </span>5</p>
      </DetailsContainer>
      <button>View Recipe</button>
    </RecipeContainer>
  )
}

export default Recipe