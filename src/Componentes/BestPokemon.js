import React, {Component} from 'react'
import '../App.css'

class BestPokemon extends Component{
  state = {
    pokemonNames : [],
    isLoading : true,
    error : null
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokedex/1/')
    .then(res => res.json())
    .then(data =>{
      this.setState({
        pokemonNames :[data.pokemon_entries[0].pokemon_species.name, data.pokemon_entries[3].pokemon_species.name, data.pokemon_entries[6].pokemon_species.name],
        isLoading :false
    })
  })
}
  
  render(){
    return (
      <ul>{this.state.isLoading ? <span>Loading... Wait</span> : this.state.pokemonNames.map((name,index) =>{
          return <li className='listOfPokemonsFromApi' key={index}>{name}</li>
        })}</ul>
    )
  }
}
export default BestPokemon