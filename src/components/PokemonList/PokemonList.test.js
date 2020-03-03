import React from "react";
import ReactDOM from "react-dom";
import PokemonList from "./PokemonList";
import { create } from "react-test-renderer";

const filteredPokemons = [];

const getPokemonData = [
  {
    name: "bulbasaur"
  },
  {
    name: "ivysaur"
  },
  {
    name: "venusaur"
  }
];

test("should match with pokemonlist snapshot", () => {
  const component = create(
    <PokemonList
      filteredPokemons={filteredPokemons}
      getPokemonData={getPokemonData}
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
