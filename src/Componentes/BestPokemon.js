import React from 'react'

const BestPokemon = (props) => {
    return (
      <ul>
      {
          props.pokemonName.map((name,index) =>{
          return <li key={index}>{name}</li>
        })
      }</ul>
    )
  }

export default BestPokemon