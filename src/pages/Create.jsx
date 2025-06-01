import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import { recipeContext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";

const Create = () => {
  const navigate = useNavigate();
  const { recipe, setRecipe } = useContext(recipeContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.id = nanoid();
    const copyRecipe = [...recipe];
    copyRecipe.push(data);
    setRecipe(copyRecipe);
    localStorage.setItem("recipe", JSON.stringify(copyRecipe));
    console.log(copyRecipe);
    // setRecipe([...recipe, data]);
    toast.success("Recipe created successfully!");
    reset();
    navigate("/recipes");
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gradient-to-br from-[#fff7e6] to-[#e0e7ff] min-h-screen w-full items-center justify-center p-4">
      {/* Image Section */}
      <div className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mx-auto mb-8 lg:mb-0 lg:mr-12 flex-shrink-0 flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1505576633757-0ac1084af824?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVjaXBlfGVufDB8fDB8fHww"
          alt="Create Recipe"
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl border-4 border-white"
        />
      </div>
      {/* Form Section */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white/90 shadow-2xl rounded-2xl px-4 sm:px-8 py-6 w-full max-w-lg mx-auto backdrop-blur"
      >
        <h1 className="text-2xl sm:text-3xl font-extrabold text-center my-4 text-[#ffa319] drop-shadow">
          Create Recipe
        </h1>
        <div>
          <input
            {...register("recipeName", { required: "Recipe name is required" })}
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
              required: "Cooking instruction is required",
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
            Create Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
