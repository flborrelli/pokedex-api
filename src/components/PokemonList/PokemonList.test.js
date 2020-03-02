import React from 'react';
import ReactDOM from 'react-dom';
import PokemonList from './PokemonList';
import { create } from 'react-test-renderer';

test('should match with pokemonlist snapshot', () => {
  const filteredPokemons = [];
  const component = create(<PokemonList filteredPokemons={filteredPokemons}/>);
  expect(component.toJSON()).toMatchSnapshot();
})