import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { RootState } from '../store'

// Define a type for the slice state
interface PokemonState {
    pokemonList: any
}

const item = localStorage.getItem("myPokemon")

const initialState: PokemonState =  {
    pokemonList: typeof window !== "undefined" && item
    ? JSON.parse(item)
    : [],
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      const findPokemon = state.pokemonList.find((item: any)=> item.pokemon.id === action.payload.pokemon.id)
      if(findPokemon){
          const increaseTotal = state.pokemonList.map((item: any) => {
            if(item.pokemon.id === action.payload.pokemon.id){
                item.total = item.total + 1
                item.nickname = action.payload.nickname
            }
            return item
          })
          
          state.pokemonList = increaseTotal
      } else{
          state.pokemonList = [...state.pokemonList, {...action.payload, total: 1, nickname: action.payload.nickname}]
      }
      
      localStorage.setItem("myPokemon", JSON.stringify(state.pokemonList))
      toast.success("Pokemon added successfully")
    },
    removePokemon: (state, action) => { 

      state.pokemonList = state.pokemonList.filter((item: any)=> item.pokemon.id !== action.payload.pokemon.id)
      
      localStorage.setItem("myPokemon", JSON.stringify(state.pokemonList))
    }
  }
})

// Action creators are generated for each case reducer function
export const { addPokemon, removePokemon } = pokemonSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.pokemon.pokemonList

export default pokemonSlice.reducer