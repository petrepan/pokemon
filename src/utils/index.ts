import { Pokemon } from "../types";


export const trimPokemon = (pokemon:any): Pokemon => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      moves: pokemon.moves,
      abilities: pokemon.abilities,
      types: pokemon.types,
      sprites: pokemon.sprites
    };
};