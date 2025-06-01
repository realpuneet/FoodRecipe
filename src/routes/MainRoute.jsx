import React, { useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import Favorite from '../pages/Favorite'
import About from '../pages/About'
import Recipe from '../components/Recipe'
// import Update from '../pages/Update'
import Create from '../pages/Create'
import PageNotFound from '../pages/PageNotFound'

const MainRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/recipes/create' element={<Create/>}/>
        <Route path='/recipes/detail/:id' element={<Recipe/>}/>
        {/* <Route path='/recipes/update:id' element={<Update/>}/> */}
        <Route path='/favorite' element={<Favorite/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  );
};

export default MainRoute;
