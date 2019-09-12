import React,{Component} from 'react'

class CaughtPokemon extends Component{
    state = {
      pokemonNameInput : "",
      caughtPokemon : [],
      isEmpty : true
    }

  handleInputChange = event =>{
this.setState({
  pokemonNameInput : event.target.value
   })
 }

  catchPokemon = () =>{
    if(this.state.pokemonNameInput !== ''){

    let newCaughtPokemon = this.state.caughtPokemon.push(this.state.pokemonNameInput)

    this.setState({
      catchPokemon : newCaughtPokemon,
      pokemonNameInput : "",
      isEmpty : false
    })}
   }
  

 render(){
    return (
      <ul className='ulcatchPokemon'>
        <input type='text' value={this.state.pokemonNameInput} onChange={this.handleInputChange}/>
        <button onClick={this.catchPokemon} >Catch Pokemon</button>
        <ul>
          {this.state.caughtPokemon.map((pokemon,index)=> {
          return <li key={index}>{pokemon}</li>})}
        </ul>
        <p>Caunght {this.state.caughtPokemon.length} Pokemon on {this.props.data}</p>
        
      </ul>
    )
  }
 }
  export default CaughtPokemon