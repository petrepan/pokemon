import React, {FC, useState} from 'react';
import { useParams } from 'react-router-dom';
import { usePokemon } from '../services/query/pokemon';
import { useAppDispatch } from '../store/reducers/hooks';
import { addPokemon } from '../store/reducers/pokemon';
import Header from '../components/Header';
import { toast } from 'react-toastify';

const Pokemon: FC = () => {
  const [nickname, setNickname] = useState("")

  const { name }: any = useParams()

  const {data: pokemon} = usePokemon(name)
    
  const dispatch = useAppDispatch()
  return (
    <div className='mx-auto container py-3'>
        <Header />
        <div className="mt-4">
            <img width="200" src={`${pokemon?.sprites?.front_default}`} alt={Pokemon.name} />
            <h3 className="text-3xl capitalize">{pokemon?.name}</h3>
            <div className="my-4">
                <h4>Types</h4>
                <div>
                    {
                        pokemon?.types.map((data: any, i: number) => (
                            <span key={i+1} className="inline-block">{data.type.name}</span>
                        ))
                    }
                </div>
            </div>
            <div className="mb-4">
                <h4>Moves</h4>
                <div>
                    {
                        pokemon?.moves.map((data: any, i: number) => (
                            <span key={i+1}>{data.move.name}{", "}</span>
                        ))
                    }
                </div>
            </div>
            <form>
                
                <input className="focus:outline-none border border-black px-1 rounded-sm mr-3" placeholder="nickname" onChange={(e) => setNickname(e.target.value)} required />
                <button className="bg-black text-white px-3 rounded-sm" onClick={(e) => {
                    e.preventDefault()
                    dispatch(addPokemon({pokemon, nickname}))
                    toast.success("Pokemon added successfully")
                }}>Add to my list</button>
            </form>
        </div>
    </div>
  );
}

export default Pokemon;
