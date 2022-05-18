import { useQueries, useQuery } from "react-query";
import { getPokemon, getPokemonDetailsList, getPokemonList } from "../api/pokemon";
import { GET_POKEMON, GET_POKEMON_LIST } from "../queryKeys";

//get request with use query
export const usePokemonList = () => {
  const { data, isLoading, error } = useQuery(
    [GET_POKEMON_LIST],
    getPokemonList,
  );

  return { data, isLoading, error };
};

//get request with use query
export const usePokemonDetailsList = () => {
  const {data: poke, isLoading} = usePokemonList()
  
  const urlArr = !isLoading ? poke?.results.map((data: any) => {
    return {
      queryKey: [GET_POKEMON_LIST, data.url],
      queryFn: getPokemonDetailsList,
      enabled: poke ? true : false
    }
  }) : []
  
  const data = useQueries(urlArr);
  
  return data
};

//get request with use query
export const usePokemon = (name: string) => {
  const { data, isLoading, error } = useQuery(
    [GET_POKEMON, name],
    getPokemon,
  );

  return { data, isLoading, error };
};
