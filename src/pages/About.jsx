import React from "react";
import logoImg from '../assets/crop.jpeg'

const About = () => {
  return (
    <div className="min-h-screen py-10 px-4 sm:px-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-[#ffa319] mb-6">
          About Us
        </h1>

        <p className="text-gray-800 text-lg mb-6 leading-relaxed">
          Welcome to{" "}
          <span className="font-semibold text-[#ffa319]">Flavorful Bytes</span> — your ultimate
          destination for homemade, easy-to-cook, and authentic Indian recipes.
          Whether you're a beginner in the kitchen or a seasoned home chef, our
          goal is to make cooking fun, accessible, and delicious.
        </p>

        <p className="text-gray-800 text-lg mb-6 leading-relaxed">
          Our recipe collection includes a variety of traditional favorites like{" "}
          <span className="font-medium text-[#ffa319]">Rajma Chawal, Chhole Bhature, Roti</span> and
          many more, all crafted with simple ingredients and clear
          instructions. Each recipe is curated with love and tested to ensure
          perfect taste and consistency every time.
        </p>

        <div className="mt-10">
          <h2 className="text-3xl font-bold text-[#ffa319] mb-4">Meet the Creator</h2>
          <div className="bg-[#ffe3b8] rounded-xl shadow-md p-6 flex flex-col sm:flex-row items-center gap-6">
            <img
              src={logoImg}
              alt="Puneet Yadav"
              className="w-28 h-28 rounded-full object-cover border-4 border-[#ffa319]"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Puneet Yadav</h3>
              <p className="text-gray-800 mt-2">
                Hi! I'm Puneet — a full stack developer and food lover with a
                deep passion for both technology and traditional Indian cooking.
                I created this platform to blend two of my favorite worlds: code
                and cuisine.
              </p>
              <p className="text-gray-800 mt-2">
                Through this website, I aim to inspire others to try new dishes,
                rediscover cultural favorites, and enjoy the art of cooking —
                one recipe at a time.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 font-medium">Thank you for visiting and happy cooking! 🍽️</p>
        </div>
      </div>
    </div>
  );
};

export default About;
