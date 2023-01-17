
import React from 'react'
import { useState } from 'react';

const FetchPokemon = () => {
    const [pokemon, setPokemon] = useState('');
    console.log(pokemon[0])
    
  const callAPI = () =>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
          .then(response => {
            return response.json();
        }).then(jsonResponse => {
            console.log(jsonResponse);
            setPokemon(jsonResponse)
        }).catch(err=>{
            console.log(err);
        });
  }
  
    return (
    <div>
        <h1>fetchPokemon</h1>
        <button type ='submit' onClick={callAPI}>Fetch the Pokemon</button>
        {
            pokemon?        
        <div>
            <h3>pokemon[0]</h3>
        </div>:
        <h3>Please Fetch Pokemon</h3>
        }
    </div>

  )
}

export default FetchPokemon;