import axios from 'axios'

const getAllRecipes = () => axios.get('http://localhost:3001/recipes');

const getAllSpecials = () => axios.get('http://localhost:3001/specials');

const getRecipe = (id) => axios.get(`http://localhost:3001/recipes/${id}`);

export {
  getAllRecipes,
  getAllSpecials,
  getRecipe
}