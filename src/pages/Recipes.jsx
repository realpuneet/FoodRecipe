import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {recipeContext} from '../context/RecipeContext';
import RecipeTemplate from '../components/RecipeTemplate';

const Recipes = () => {

 const {recipe} = useContext(recipeContext);

 console.log(recipe);
 
 const showRecipes = recipe.map((recipe)=>(
  <RecipeTemplate key={recipe.id} recipe={recipe}/>
 ))

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 mt-6 mb-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left">
          Recipes
        </h1>
        <Link
          className="rounded-xl bg-[#ffa319] font-medium px-4 py-2 text-base sm:text-lg md:text-xl text-white shadow hover:bg-[#ffb933] transition"
          to="/recipes/create"
        >
          Create Recipe
        </Link>
      </div>
      <div className='p-4 w-full' key={recipe.id}>
        <div  className='grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-3'>
          {recipe.length > 0 ? showRecipes : <p> No Recipes Found!</p> }
        </div>
      </div>

    </div>
  )
} 

export default Recipes;
