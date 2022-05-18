import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { useAppDispatch, useAppSelector } from '../store/reducers/hooks';
import { MdDelete } from "react-icons/md";
import { removePokemon } from '../store/reducers/pokemon';

const MyPokemon: FC = () => {
  const myPokemon = useAppSelector(state => state.pokemon.pokemonList)
  const dispatch = useAppDispatch()

  return (
    <div className='mx-auto container py-3'>
      <Header />
      <div className='grid grid-cols-3 gap-4 grid-auto-rows mt-4'>
        {
          myPokemon?.map((data: any, i: number)=>(
            <div key={i + 1}>
                <div className="border flex flex-col">
                    <Link className="flex" to={`/pokemon/${data.pokemon.name}`}>
                    <div className="w-1/4 bg-gray-100">
                        <img src={`${data.pokemon.sprites?.front_default}`} alt={data.pokemon.name} />
                    </div>
                    <div className="p-1">
                        <Link to={`/pokemon/${data.pokemon.name}`}>Name: <span className="capitalize">{data.pokemon.name}</span></Link>              
                        <div>Nickname: <span className="capitalize">{data.nickname}</span></div>
                        <ul className="list-disc my-2">
                        <span className="underline">Abilities</span>
                        {
                            data.pokemon.abilities.map((ability: any, i: number) => (
                            <li key={i + 1} className="ml-4">{ability.ability.name}</li>
                            ))
                        }
                        </ul> 
                        <div>Nickname changed: <span>{data.total} time(s)</span></div>
                    </div>
                    </Link> 
                </div>
                <div onClick={(e) => {
                    e.preventDefault()
                    dispatch(removePokemon(data))
                }} className="cursor-pointer"><MdDelete fontSize={26} /></div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default MyPokemon;
