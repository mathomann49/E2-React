import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Contexto } from './MiContexto';

const NavBar = () => {

  const {localstorage} = useContext(Contexto)

  //Mi idea es cambiar el color del Link de myTodoList cuando hay
  //tareas pendientes usando el contexto, en el cual tengo el localStorage.
  //Pensé en usar un ternario cuya condicion es localstorage.todos === [] 
  //entonces cambiar el color(false) pero no se me ocurrio como hacerlo

  return (
    <nav>
        <h2>My React app 🚀</h2>
        <ul className='nav-list'>
            <NavLink to={"/"} style={({isActive}) => ({color: isActive ? "#00ff22" : "#c2edc8"})}><li><b>Home</b></li></NavLink>
            <NavLink  to={"/myTodoList"} style={({isActive}) => ({color: isActive ? "#00ff22" : "#c2edc8"})}><li>My Todo List</li></NavLink>
            <NavLink to={"/myPokemons"} style={({isActive}) => ({color: isActive ? "#00ff22" : "#c2edc8"})}><li>My Pokemons</li></NavLink>
        </ul>
    </nav>
  )
}

export default NavBar
