import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { recipeContext } from "../context/RecipeContext";

const RecipeTemplate = (props) => {
  const recipe = props.recipe;
  const { fav, setfav } = useContext(recipeContext);

  if (!recipe) return null;

  const { id, recipeName, description, recipeImage, chefName, category } = recipe;

  // Check if this recipe is in favorites
  const isFav = fav.some((f) => f.id === id);

  // Toggle favorite
  const handleFav = (e) => {
    e.preventDefault(); // Prevent card navigation
    if (isFav) {
      setfav(fav.filter((f) => f.id !== id));
    } else {
      setfav([...fav, recipe]);
    }
  };

  return (
    <div className="group w-full bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      <div className="relative">
        <img
          className="w-full h-48 sm:h-56 md:h-40 lg:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          src={recipeImage}
          alt={recipeName}
        />
        <span className="absolute top-3 right-3 bg-[#ffa319] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          {category}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-4">
        <h1 className="text-xl sm:text-2xl font-bold mb-1 text-gray-800 truncate">
          {recipeName.length > 18 ? recipeName.slice(0, 18) + "..." : recipeName}
        </h1>
        <span className="text-xs text-gray-500 mb-2">
          By <span className="font-semibold text-[#ffa319]">{chefName}</span>
        </span>
        <p className="text-gray-600 text-sm flex-1 mb-3">
          {description.length > 90 ? description.slice(0, 90) + "..." : description}
        </p>
        <div className="flex justify-between px-2">
          <Link
            to={`/recipes/detail/${id}`}
            className="inline-block mt-auto text-blue-500 font-semibold hover:underline"
          >
            View Details &rarr;
          </Link>
          <button
            className="z-10 text-2xl font-thin focus:outline-none"
            onClick={handleFav}
            aria-label="Toggle Favorite"
          >
            <i className={isFav ? "ri-heart-fill text-[#ffa319]" : "ri-heart-line"}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeTemplate;