import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../store/reducers/hooks';

const Header: FC = () => {
  const myPokemon = useAppSelector(state => state.pokemon.pokemonList)

  return (
    <nav className='flex justify-between'>
        <Link to="/">Pokemon</Link>
        <Link to="/mypokemon">My Pokemon{myPokemon.length ? `(${myPokemon.length})` : ""}</Link>
    </nav>
  );
}

export default Header;
