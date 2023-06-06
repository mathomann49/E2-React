import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {

  

  return (
    <nav>
        <h2>My React app 🚀</h2>
        <ul className='nav-list'>
            <NavLink to={"/"} style={({isActive}) => ({color: isActive ? "#00ff22" : "#c2edc8"})}><li><b>Home</b></li></NavLink>
            <NavLink  to={"/myTodoList"} 
            style={({isActive}) => ({color: isActive ? "#00ff22" : "#c2edc8"})}
            ><li>My Todo List</li></NavLink>
            <NavLink to={"/myPokemons"} style={({isActive}) => ({color: isActive ? "#00ff22" : "#c2edc8"})}><li>My Pokemons</li></NavLink>
        </ul>
    </nav>
  )
}

export default NavBar
