import axios from "axios";
import { trimPokemon } from "../../utils";
import { GET_POKEMON } from "../apiUrl";

export const getPokemonList = async () => {
  try {
    const res = await axios.get(GET_POKEMON);
    return res.data;   
  } catch (error) {
      console.log({error})
  }
};

export const getPokemonDetailsList = async ({ queryKey }: any) => {
  const [, url] = queryKey;

  try {
    const res = await axios.get(url);
    return res.data;   
  } catch (error) {
      console.log({error})
  }
};

export const getPokemon = async ({ queryKey }: any) => {
  const [, name] = queryKey;

  try {
    const res = await axios.get(`${GET_POKEMON}/${name}`);
    return trimPokemon(res.data) 
  } catch (error) {
      console.log({error})
  }
};

