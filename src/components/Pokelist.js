import React from 'react';
import axios from 'axios';

class PokeLine extends React.Component {
	state = { ...this.props.pokemon, img: '' };
	componentDidMount() {
		axios.get(this.state.url).then(res => {
			this.setState({
				img: res.data.sprites.front_default,
			});
		});
	}
	render = () => {
		const pokemon = this.state;
		return (
			<li>
				{pokemon.img ? (
					<img src={pokemon.img} alt={pokemon.name} />
				) : (
					'loading...'
				)}
				<span>{pokemon.name}</span>
			</li>
		);
	};
}

export default class PokeList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	renderList(pokemons) {
		return pokemons.map((pokemon, index) => (
			<PokeLine pokemon={pokemon} key={index} />
			// <li key={index}>{pokemon.name}</li>
		));
	}

	render() {
		const { pokemons } = this.props;
		return <ul>{this.renderList(pokemons)}</ul>;
	}
}
