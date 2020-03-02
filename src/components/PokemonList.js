import React from "react";
import Loader from "./Loader";
import { Segment } from "semantic-ui-react";

function PokemonList({ getPokemon, showAllPokemons, filteredPokemons, loader }) {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="pokelist">
        {loader ? (
          <Loader />
        ) : showAllPokemons ? (
          getPokemon.map(pokemon => {
            return (
              <Segment raised className="segment" key={pokemon.id}>
                <div className="d-flex align-items-center">
                  <img src={pokemon.sprites.front_default} alt="avatar" />
                  <div>
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </div>
                </div>
              </Segment>
            );
          })
        ) : filteredPokemons.length ? (
          filteredPokemons.map(pokemon => {
            return (
              <Segment raised className="segment" key={pokemon.id}>
                <div className="d-flex align-items-center">
                  <img src={pokemon.sprites.front_default} alt="avatar" />
                  <div>
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </div>
                </div>
              </Segment>
            );
          })
        ) :
          <div className='d-flex flex-column align-items-center'>
            <img className='sad-pokemon mb-4' src="/images/sad-pokemon2.png" alt="sad-pokemon"/>
            <h3>No Pokemon found, please try again.</h3>
          </div>
        }
      </div>
    </div>
  );
}

export default React.memo(PokemonList);
