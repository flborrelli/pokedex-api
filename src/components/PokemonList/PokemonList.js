import React from "react";
import Loader from "../Loader/Loader";
import { Segment, Icon } from "semantic-ui-react";

function PokemonList({
  getPokemon,
  showAllPokemons,
  filteredPokemons,
  loader
}) {
  return (
    <div className="d-flex justify-content-center mt-5 mb-4">
      <div className="pokelist">
        {loader ? (
          <Loader />
        ) : showAllPokemons ? (
          getPokemon.map(pokemon => {
            return (
              <Segment raised className="segment" key={pokemon.id}>
            

                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-sm d-flex justify-content-center">
                      <img
                        src={pokemon.sprites.front_default}
                        alt="avatar"
                        className="poke-img"
                      />
                    </div>
                    <div className="col-sm d-flex justify-content-center">
                      <h2 className="pokemon-name">
                        {pokemon.name.charAt(0).toUpperCase() +
                          pokemon.name.slice(1)}
                      </h2>
                    </div>

                    <div className="col-sm abilities-container d-flex justify-content-center">
                      <div className="abilities d-flex flex-column align-items-start">
                        <h3 className="mb-3">Abilities</h3>
                        <>
                          {pokemon.abilities.map((e, idx) => {
                            return (
                              <p key={idx}>
                                <Icon name="check" />
                                {e.ability.name}
                              </p>
                            );
                          })}
                        </>
                      </div>
                    </div>
                  </div>
                </div>
              </Segment>
            );
          })
        ) : filteredPokemons.length ? (
          filteredPokemons.map(pokemon => {
            return (
              <Segment raised className="segment" key={pokemon.id}>
            

                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-sm d-flex justify-content-center">
                      <img
                        src={pokemon.sprites.front_default}
                        alt="avatar"
                        className="poke-img"
                      />
                    </div>
                    <div className="col-sm d-flex justify-content-center">
                      <h2 className="pokemon-name">
                        {pokemon.name.charAt(0).toUpperCase() +
                          pokemon.name.slice(1)}
                      </h2>
                    </div>

                    <div className="col-sm abilities-container d-flex justify-content-center">
                      <div className="abilities d-flex flex-column align-items-start">
                        <h3 className="mb-3">Abilities</h3>
                        <>
                          {pokemon.abilities.map((e, idx) => {
                            return (
                              <p key={idx}> 
                                <Icon name="check" />
                                {e.ability.name}
                              </p>
                            );
                          })}
                        </>
                      </div>
                    </div>
                  </div>
                </div>
              </Segment>
            );
          })
        ) : (
          <div className="d-flex flex-column align-items-center no-match-container">
            <img
              className="sad-pokemon mb-4"
              src="/images/sad-pokemon2.png"
              alt="sad-pokemon"
            />
            <h3>No Pokemon found, please try again.</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default React.memo(PokemonList);
