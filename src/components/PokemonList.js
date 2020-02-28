import React from "react";
import { Segment } from 'semantic-ui-react'

function PokemonList( { getPokemons } ) {
  return (
    <div className='d-flex justify-content-center mt-5'>
      <div className='pokelist'>
        {getPokemons.map(e => {
          return <Segment raised key={e}>{e}</Segment>
          })}
      </div>
      
    </div>
  );
}

export default PokemonList;