import React from 'react'
import './App.css'
import Logo from './Componentes/logo'
import BestPokemon from './Componentes/BestPokemon'
import CaughtPokemon from './Componentes/CaughtPokemon'
import Clock from './Componentes/Clock'

let data = new Date().toLocaleDateString()

function App(){
  return(
    <div className='app'>
    <Logo appName='PokeDex'/>
    <BestPokemon />
    <CaughtPokemon data={data}/>
    <Clock className='clock'/>
    </div>
  )
}
export default App;
