import React, { createContext, useEffect } from "react";
import { useState } from "react";

export const recipeContext = createContext(null);

const RecipeContext = ({ children }) => {
  const [recipe, setRecipe] = useState(() => {
  const saved = localStorage.getItem('recipe');
  return saved ? JSON.parse(saved) : [];
});

  const [fav, setfav] = useState(() => {
  const saved = localStorage.getItem('fav');
  return saved ? JSON.parse(saved) : [];
});

// Sync favorites to localStorage when changed
useEffect(() => {
  localStorage.setItem('fav', JSON.stringify(fav));
}, [fav]);

  return (
    <recipeContext.Provider value={{ recipe, setRecipe,fav,setfav }}>
      {children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;
