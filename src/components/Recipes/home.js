import React, { Component } from 'react'
import Layout from '../Layout'
import RecipeItem from './recipeItem'
import { getAllRecipes } from '../../queries'
import styled from 'styled-components';
import media from '../../styles/media'


const RecipeListContainer = styled.div`
  display: grid;
  justify-items: center
  grid-template-columns: 50% 50%;
  grid-row-gap: 4rem
  justify-content: space-around
  ${media.medium`
    grid-template-columns: 100%
    justify-content: center
  `}
`

class Home extends Component {

  state = {
    recipes: []
  }

  componentDidMount() {
    this.getRecipes()
  }

  getRecipes = async () => {
    let res = await getAllRecipes()
    this.setState({ recipes: res.data })
  };

  displayRecipes = () => this.state.recipes && this.state.recipes.map(recipe => <RecipeItem recipe={recipe} key={recipe.uuid}/>)
  

  render() {
    return (
      <Layout>
          <RecipeListContainer>{this.displayRecipes()}</RecipeListContainer>
      </Layout>
    )
  }
      
}

export default Home