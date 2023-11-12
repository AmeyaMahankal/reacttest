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
          <div className="pokemon-details">
            <h3>#{selectedPokemon.id}-{selectedPokemon.name}</h3>
            <img src={selectedPokemon.image} alt={selectedPokemon.name} />
            <h1 className="pokemon-stat">Type:{selectedPokemon.type1}</h1>
            <h1 className="pokemon-stat">Height:{selectedPokemon.height} Decimetres</h1>
            <h1 className="pokemon-stat">Weight:{selectedPokemon.weight} Decagrams</h1>
            <h1 className="pokemon-stat">Health:{selectedPokemon.hp}</h1>
            <h1 className="pokemon-stat">Attack:{selectedPokemon.attack}</h1>
            <h1 className="pokemon-stat">Defense:{selectedPokemon.defense}</h1>
            <h1 className="pokemon-stat">Speed:{selectedPokemon.speed}</h1>


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

        <Link to="/about">
          <div className="circle-container">
            <div className="circleO">
              <div>

              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default App;