import axios from 'axios'


const getAllRecipes = () => {
  return axios.get('http://localhost:3001/recipes');
}

const getAllSpecials = () => {
  console.log('http://localhost:3001/specials');
}

const getRecipe = (id) => {
  if(id !== undefined)
    return axios.get(`http://localhost:3001/recipes/${id}`);
}

const getSpecial = (id) => {
  console.log("getSpecial")
}

export {
  getAllRecipes,
  getAllSpecials,
  getRecipe,
  getSpecial
}