import React, { Component } from 'react'
import styled from 'styled-components'
import { getRecipe } from '../../queries'
import mixins from '../../styles/mixins'
import theme from '../../styles/theme'
import { Link } from 'react-router-dom'
import bgBody from '../../assets/bg-body.jpg'

const {colors}= theme

const RecipeContainer = styled.div`
  display: grid
  grid-auto-flow: column
  justify-items: center
  grid-row-gap: 2rem
`
const Image = styled.img`
  
` 

const Details = styled.div`
  display: flex
  flex-direction: column
  justify-self: flex-start
  width: 90%
  h1 {
    ${mixins.header}
    margin-bottom: 0
  }

  p {
    font-style: italic
  }
`

const BackButton = styled(Link)`
  ${mixins.button}
  justify-self: flex-start
  padding: 1em
  font-size: 0.8em
`
const MainContainer = styled.div`
  display: grid
  grid-row-gap: 5rem
  margin: 5em 15em

  &:before {
    background: url(${bgBody});
    background-size: cover;
    content: "";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    opacity: 0.1
  }
`

const Misc = styled.div`
  display: flex
  justify-content: space-between
  margin-top: 3rem

  .label {
    ${mixins.label}
  }
`

const Steps = styled.div`
  display: grid
  grid-auto-flow: column
  grid-template-columns: 30% 60%
  justify-content: space-around
`

const List = styled.ul`
  li {
    list-style-type: none
    line-height: 1.8
  }
`
const OList = styled.ol`
  li {
    line-height: 1.8
  }
`
const Label = styled.div`
  background-color: ${colors.orange}
  color: white;
  padding: 1em 0.5em
  font-weight: bold
  text-transform: uppercase
  text-align: center
  font-size: 1.25em
`
const Section = styled.div`
  display: grid
`

class Recipe extends Component {

  state = {
    recipe: ''
  }

  componentDidMount() {
    this.getRecipe()
  }

  getRecipe = async() => {
    let res = await getRecipe(this.props.match.params.id)
    this.setState({ recipe: res.data })
  }


   displayIngredients = ingredients => 
    ingredients.map(ing => 
      <li>{`${ing.amount} ${ing.measurement} ${ing.name}`} </li> 
    )

   displayDirections = directions => 
    directions.map(dir => 
      <li>{`${dir.instructions}`} </li> 
    )

  render() {
    const {recipe} = this.state;
    
    return(
      <div>
        {recipe &&  
          <MainContainer>
            <BackButton to="/">Back to home</BackButton>
            <RecipeContainer>
            <Image src={recipe.images.medium} />
            <Details>
              <h1>{recipe.title}</h1>
              <h3>{recipe.description}</h3>
              <Misc>
                <p><span className="label">Servings: </span>{recipe.servings}</p>
                <p><span className="label">Prep: </span>{recipe.prepTime} mins</p>
                <p><span className="label">Cook: </span>{recipe.cookTime} mins</p>
              </Misc>
            </Details>
            </RecipeContainer>
            <Steps>
              <Section>
                <Label>Ingredients</Label>
                <List>
                    {this.displayIngredients(recipe.ingredients)}
                </List>
              </Section>

              <Section>
                <Label>Directions</Label>
                <OList>
                  {this.displayDirections(recipe.directions)}
                </OList>
              </Section>

            </Steps>
          </MainContainer>
        }
      </div>
    )
  }
  
}

export default Recipe