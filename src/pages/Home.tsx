import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import { usePokemonDetailsList } from '../services/query/pokemon';
import Header from '../components/Header';

const Home: FC = () => {

  const pokemon = usePokemonDetailsList()
  
  return (
    <div className='mx-auto container py-3'>
      <Header />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
        {
          pokemon?.map((data: any, i) => (
            <div className="border flex flex-col" key={i + 1}>
              {
                data.data ? 
                <Link className="flex" to={`/pokemon/${data.data.name}`}>
                  <div className="w-1/4 bg-gray-100">
                    <img src={`${data.data.sprites?.front_default}`} alt={data.data.name} />
                  </div>
                  <div className="p-1">
                    <Link to={`/pokemon/${data.data.name}`}>Name: <span className="capitalize">{data.data.name}</span></Link>
                    <ul className="list-disc mt-2">
                      <span className="underline">Abilities</span>
                      {
                        data.data.abilities.map((ability: any, i: number) => (
                          <li key={i + 1} className="ml-4">{ability.ability.name}</li>
                        ))
                      }
                    </ul> 
                  </div>
                </Link> : ""
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Home;
