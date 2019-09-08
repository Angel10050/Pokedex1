import React from 'react'
import Logo from './Componentes/logo'
import BestPokemon from './Componentes/BestPokemon'
import CaughtPokemon from './Componentes/CaughtPokemon'

let pokemoName = ['Squirtle', 'Bulbasaur', 'Charmander',"Pikachu"]
let data = new Date().toLocaleDateString()

function App(){
  return(
    <div className='app'>
    <Logo appName='PokeDex'/>
    <BestPokemon pokemonName={pokemoName}/>
    <CaughtPokemon data={data}/>
    </div>
  )
}
export default App;
