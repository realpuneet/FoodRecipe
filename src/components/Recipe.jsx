import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipeContext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Recipe = () => {
  const { id } = useParams();
  const {fav, setfav, recipe, setRecipe } = useContext(recipeContext);
  const navigate = useNavigate();

  // Find the recipe by id
  const selectedRecipe = recipe.find((r) => String(r.id) === id);

  if (!selectedRecipe) {
    return <div className="p-4 text-center">Recipe not found.</div>;
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      recipeName: selectedRecipe?.recipeName,
      recipeImage: selectedRecipe?.recipeImage,
      ingredients: selectedRecipe?.ingredients,
      instruction: selectedRecipe?.instruction, // spelling: instruction
      description: selectedRecipe?.description,
      category: selectedRecipe?.category,
      chefName: selectedRecipe?.chefName,
    },
  });

  // update recipe 
  const updateRecipe = (updatedData) => {
  const index = recipe.findIndex((recipeId) => recipeId.id == id);
  const copyRecipe = [...recipe];
  copyRecipe[index] = { ...copyRecipe[index], ...updatedData };
  setRecipe(copyRecipe);
  localStorage.setItem('recipe', JSON.stringify(copyRecipe)); // persist update
  toast.success("Recipe updated!");
  navigate("/recipes"); // redirect after update
};

  //delete recipe 
 
const deleteHandler = () => {
  const filteredRecipe = recipe.filter((r) => r.id != id);
  setRecipe(filteredRecipe);

  // Remove from favorites as well
  const filteredFav = fav.filter((r) => r.id != id);
  setfav(filteredFav);

  toast.success("recipe deleted!");
  navigate("/recipes");
};

const goBack = ()=>{
  navigate("/recipes")
}

  return (
    <div className="min-h-screen flex flex-col gap-5 items-center justify-center bg-gray-50 px-2 py-8">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/2 w-full flex items-center justify-center bg-gray-100">
          <img
            className="w-full h-80 md:h-full object-cover"
            src={selectedRecipe.recipeImage}
            alt={selectedRecipe.recipeName}
          />
        </div>
        {/* Details Section */}
        <div className="md:w-1/2 w-full p-8 flex flex-col gap-4">
          <button
            onClick={goBack}
            className="self-start mb-2 text-gray-600 hover:bg-gray-200 transition px-2 py-1 rounded-full border border-gray-300"
          >
            <i className="ri-arrow-left-line"></i> Back
          </button>
          <h1 className="font-bold text-3xl mb-2 text-gray-800">
            {selectedRecipe.recipeName}
          </h1>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="text-white bg-red-400 rounded-xl px-3 py-1 text-sm">
              By: {selectedRecipe.chefName}
            </span>
            <span className="text-white bg-amber-400 rounded-xl px-3 py-1 text-sm">
              {selectedRecipe.category}
            </span>
          </div>
          <p className="text-gray-700 mb-4">{selectedRecipe.description}</p>
          <div>
            <h2 className="text-lg font-semibold font-mono mb-1">
              Ingredients
            </h2>
            <p className="text-gray-700 whitespace-pre-line">
              {selectedRecipe.ingredients}
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold font-mono mb-1">
              Instructions
            </h2>
            <p className="text-gray-700 whitespace-pre-line">
              {selectedRecipe.instruction}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-8">
        <form
          onSubmit={handleSubmit(updateRecipe)}
          className="bg-white/90 shadow-2xl rounded-2xl px-4 sm:px-8 py-6 w-full max-w-lg mx-auto backdrop-blur"
        >
          <h1 className="text-2xl sm:text-3xl font-extrabold text-center my-4 text-[#ffa319] drop-shadow">
            Update Recipe
          </h1>
          <div>
            <input
              {...register("recipeName", {
                required: "Recipe name is required",
              })}
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#ffa319] bg-gray-50"
              placeholder="Enter recipe name"
            />
            {errors.recipeName && (
              <p className="text-red-500 text-sm mb-2">
                {errors.recipeName.message}
              </p>
            )}

            <input
              {...register("recipeImage", {
                required: "Recipe image URL is required",
              })}
              type="url"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#ffa319] bg-gray-50"
              placeholder="Enter image URL"
            />
            {errors.recipeImage && (
              <p className="text-red-500 text-sm mb-2">
                {errors.recipeImage.message}
              </p>
            )}

            <textarea
              {...register("ingredients", {
                required: "Ingredients are required",
              })}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#ffa319] bg-gray-50"
              rows="3"
              placeholder="Enter ingredients"
            ></textarea>
            {errors.ingredients && (
              <p className="text-red-500 text-sm mb-2">
                {errors.ingredients.message}
              </p>
            )}

            <textarea
              {...register("instruction", {
                required: "Cooking instruction are required",
              })}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#ffa319] bg-gray-50"
              rows="3"
              placeholder="Enter cooking instruction"
            ></textarea>
            {errors.instruction && (
              <p className="text-red-500 text-sm mb-2">
                {errors.instruction.message}
              </p>
            )}

            <textarea
              {...register("description", {
                required: "Cooking description is required",
              })}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#ffa319] bg-gray-50"
              rows="2"
              placeholder="Enter cooking description"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm mb-2">
                {errors.description.message}
              </p>
            )}

            <select
              {...register("category")}
              className="w-full block mb-4 p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#ffa319]"
            >
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="supper">Supper</option>
              <option value="dinner">Dinner</option>
            </select>

            <input
              type="text"
              {...register("chefName", { required: "Chef name is required" })}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#ffa319] bg-gray-50"
              placeholder="Enter chef name"
            />
            {errors.chefName && (
              <p className="text-red-500 text-sm mb-2">
                {errors.chefName.message}
              </p>
            )}

            <button
              type="submit"
              className="bg-[#ffa319] hover:bg-[#ffb933] text-white font-bold px-6 py-3 rounded-lg w-full mt-2 shadow-lg transition-all duration-200 active:scale-95"
            >
              Update Recipe
            </button>
            <button
            onClick={deleteHandler}
              type="button"
              className="bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 rounded-lg w-full mt-2 shadow-lg transition-all duration-200 active:scale-95"
            >
              Delete Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Recipe;
