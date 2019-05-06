import React from 'react';
import axios from 'axios';
import PokeList from './components/Pokelist';

export default class App extends React.Component {
  state = {
    pokemons: []
  }

  componentDidMount(){
    // falar do fetch antes de introduzir o axios
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(res => {
      // console.log(res.data)
      this.setState({
        pokemons: res.data.results
      })
    })
  }

  render(){
    return (
      <div className="App">
        <PokeList pokemons={this.state.pokemons} />
      </div>
    );
  }
}