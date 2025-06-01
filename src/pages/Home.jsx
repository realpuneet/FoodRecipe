import React from "react";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const handleViewRecipes = () => {
        navigate("/recipes");
    };
 return (
  <div className="home flex flex-col md:flex-row items-center justify-center w-full min-h-[80vh] px-4 py-8 bg-gray-50">
    {/* Left Section */}
    <div className="left flex-1 flex flex-col items-center justify-center gap-6 text-center">
      <div className="main-text flex flex-col items-center justify-center gap-4 mt-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2">
          Best <span className="text-[#ffa319]">food</span> for <br className="hidden sm:block" /> your <span className="text-[#ffa319]">taste</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mb-4">
          Discover delectable cuisine and unforgettable moments in our
          welcoming, culinary haven.
        </p>
      </div>
      <div className="button-container flex justify-center">
        <button
          onClick={handleViewRecipes}
          className="bg-[#ffa319] hover:bg-[#ffb933] text-white font-semibold px-6 py-2 rounded-full shadow transition-all duration-300 active:scale-95"
        >
          View Recipes
        </button>
      </div>
    </div>
    {/* Right Section */}
    <div className="right flex-1 flex items-center justify-center mt-8 md:mt-0">
      <img
        src="https://media.istockphoto.com/id/1060592710/vector/cartoon-smiling-chef-character.jpg?s=612x612&w=0&k=20&c=nB7lZ9nONBxPYroTno_JnbTfKueGBwzATPNPYlq7BAM="
        alt="Chef"
        className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-lg shadow-lg"
      />
    </div>
  </div>
);
};
export default Home;


