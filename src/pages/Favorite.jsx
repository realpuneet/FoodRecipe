import React, { useContext } from 'react'
import { recipeContext } from '../context/RecipeContext'
import RecipeTemplate from '../components/RecipeTemplate';

const Favorite = () => {
  const { fav } = useContext(recipeContext);
 return (
  <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-8">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Favorite Recipes
      </h1>

      {fav.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fav.map((recipe) => (
            <RecipeTemplate key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-10 text-gray-600 text-lg">
          No favorites yet!
        </div>
      )}
    </div>
  </div>
);

}

export default Favorite