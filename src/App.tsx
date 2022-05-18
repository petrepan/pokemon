import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import MyPokemon from './pages/MyPokemon'

function App() {
  return (
    <div>
       <ToastContainer />
       <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/pokemon/:name" element={<Pokemon />}></Route>
          <Route path="/mypokemon/" element={<MyPokemon />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
