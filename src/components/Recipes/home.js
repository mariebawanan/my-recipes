import React, { Component } from 'react'
import Layout from '../Layout'
import Recipe from './recipe'
import { getAllRecipes } from '../../queries'
import styled from 'styled-components';

const RecipeListContainer = styled.div`
  display: grid;
  justify-items: center
  width: 90vw
  margin: 4rem auto
  grid-template-columns: 50% 50%;
  grid-row-gap: 4rem
  justify-content: space-around
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

  displayRecipes = () => this.state.recipes && this.state.recipes.map(recipe => <Recipe recipe={recipe} key={recipe.uuid}/>)
  

  render() {
    return (
      <Layout>
          <RecipeListContainer>{this.displayRecipes()}</RecipeListContainer>
      </Layout>
    )
  }
      
}

export default Home