import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './components/Recipes/home'
import Recipes from '../src/components/Recipes/recipeItem'
import Recipe from '../src/components/Recipes/recipe'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/recipes" component={Recipes} />
      <Route path="/recipe/:id" component={Recipe} />
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))