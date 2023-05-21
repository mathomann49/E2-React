import React from 'react';
import NavBar from './components/NavBar';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import MyTodoList from './components/MyTodoList';
import MyPokemons from './components/MyPokemons';
import NotFound from './components/NotFound';

export const App = () => {
  return (
    <div>
      <NavBar/>
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/myTodoList" element={<MyTodoList/>}/>
          <Route path="/myPokemons" element={<MyPokemons/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      
    </div>
  )
}



