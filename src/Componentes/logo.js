import React, {Component} from 'react'

class Logo extends Component {
 
    render(){
    return (
        <header>
          <h1 className='h1'>Welcome to {this.props.appName}</h1>
        <img onClick={this.props.logWhenClicked} src={'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png'} alt='Imagen de un ave pokemon'></img>
        </header>
    )
  }
}
  export default Logo