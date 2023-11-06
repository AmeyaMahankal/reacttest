import React, { useState } from 'react';
import './App.css';
import PokeList from './PokList';
import { Link } from "react-router-dom"

function Right({ selectedPokemon }) {
  return (
    <div className="split right">
      <div className="centered">
        <h2>Pokemon</h2>
        {selectedPokemon && (
          <div>
            <h3>#{selectedPokemon.id}-{selectedPokemon.name}</h3>
            <img src={selectedPokemon.image} alt={selectedPokemon.name} />
            <h1>Height:{selectedPokemon.height}</h1>
            <h1>Weight:{selectedPokemon.weight}</h1>
            <h1>Health:{selectedPokemon.hp}</h1>
            <h1>Attack:{selectedPokemon.attack}</h1>
            <h1>Defense:{selectedPokemon.defense}</h1>
            <h1>Speed:{selectedPokemon.speed}</h1>
            <h1>Type1{selectedPokemon.type1}</h1>

          </div>
        )}
      </div>
    </div>
  );
}

function Left({ onSelectPokemon }) {
  return (
    <div className="split left">
      <div className="centered">
        <PokeList onSelectPokemon={onSelectPokemon} />
      </div>
    </div>
  );
}

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <>
      <div>
        <div>
          <Left onSelectPokemon={handleSelectPokemon} />
          <Right selectedPokemon={selectedPokemon} />
        </div>

        <div className="circle-container">
          <div className="circleO">
            <div>
              <Link to="/about">About</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;