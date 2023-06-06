import axios from "axios";
import React, { useEffect, useState } from 'react'
import pokelogo from "./pokelogo.png"

const MyPokemons = () => {

  const [data, setData] = useState();
  const [name, setName] = useState();
  const [weight, setWeight] = useState();
  const [number, setNumber] = useState(94);
   
  const url = `https://pokeapi.co/api/v2/pokemon/${number}`
  
  useEffect(() => {
    
    axios.get(url).then((response) => {
      
      setData(response.data);
      setName(response.data.name)
      setWeight(response.data.weight)
     
    }).catch((error) => {
      window.alert(error);
      
    })
  }, [url])



  return (
    <div className='cardContainer'>
        
        <img className="pokelogo"  src={pokelogo} alt="poke-logo"/>
        <div className='inputContainer'><input type={"number"} placeholder="use ⬆️ or ⬇️" onChange={(e) => {setNumber(e.target.value)}}  />
        </div>
        <img src={data? data.sprites.other.dream_world.front_default : "<p>Loading...</p>"} alt="pokemon"/>
        <div className="pokeInfo">
          <h3>🔥 Name: <span>{name}</span></h3>
          <h3>🔥 Weight: <span>{weight}</span></h3>
          <h3>🔥 Abilities: {data? data.abilities.map((value,key) => {
            return <span><div className="abilities" key={key}>{ value.ability.name }</div></span>
           }):""}</h3>
        </div>
        
    </div>
  );
}

export default MyPokemons
