import axios from 'axios'


const getAllRecipes = () => {
  return axios.get('http://localhost:3001/recipes');
}

const getAllSpecials = () => {
  return axios.get('http://localhost:3001/specials');
}

const getRecipe = (id) => {
  return axios.get(`http://localhost:3001/recipes/${id}`);
}


export {
  getAllRecipes,
  getAllSpecials,
  getRecipe
}