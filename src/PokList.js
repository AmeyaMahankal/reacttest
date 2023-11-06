import React, { useState, useEffect } from 'react';

function PokeList({ onSelectPokemon }) {
    const [pokemonList, setPokemonList] = useState([]);
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
            .then(response => response.json())
            .then(data => {
                setNextUrl(data.next);
                setPrevUrl(data.previous);


                Promise.all(data.results.map(pokemon => fetchPokemonDetails(pokemon))) //foraech fetch
                    .then(pokemonData => setPokemonList(pokemonData))
                    .catch(error => console.error('Error', error));
            })
            .catch(error => console.error('Error', error));
    }, []);

    const fetchPokemonDetails = (pokemon) => {
        return fetch(pokemon.url)
            .then(response => response.json())
            .then(data => {


                return {
                    id: data.id,
                    name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
                    image: data.sprites.front_default,
                    height: data.height,
                    weight: data.weight,
                    hp: data.stats[0].base_stat,
                    attack: data.stats[1].base_stat,
                    defense: data.stats[2].base_stat,
                    speed: data.stats[5].base_stat,
                    type1: data.types[0].type.name

                };
            });
    };
    const fetchNextPokemon = () => {
        if (nextUrl) {
            fetch(nextUrl)
                .then(response => response.json())
                .then(data => {
                    setNextUrl(data.next);
                    setPrevUrl(data.previous);

                    Promise.all(data.results.map(pokemon => fetchPokemonDetails(pokemon)))
                        .then(pokemonData => setPokemonList(pokemonData))
                        .catch(error => console.error('Error', error));
                })
                .catch(error => console.error('Error', error));
        }
    };

    const fetchPrevPokemon = () => {
        if (prevUrl) {
            fetch(prevUrl)
                .then(response => response.json())
                .then(data => {
                    setNextUrl(data.next);
                    setPrevUrl(data.previous);

                    Promise.all(data.results.map(pokemon => fetchPokemonDetails(pokemon)))
                        .then(pokemonData => setPokemonList(pokemonData))
                        .catch(error => console.error('Error', error));
                })
                .catch(error => console.error('Error', error));
        }
    };
    const handlePokemonClick = (pokemon) => {
        onSelectPokemon(pokemon);
    };

    return (
        <div className="PokeList">
            <h1>Pokémon List</h1>
            <div className="pokemon-grid">
                {pokemonList.map((pokemon) => (
                    <div key={pokemon.id} className="pokemon-item" onClick={() => handlePokemonClick(pokemon)}>
                        <p>#{pokemon.id}-{pokemon.name}</p>
                        <img src={pokemon.image} alt={pokemon.name} />
                    </div>
                ))}
            </div>
            <button onClick={fetchPrevPokemon} disabled={!prevUrl}>
                Previous 9 Pokémon
            </button>
            <button onClick={fetchNextPokemon} disabled={!nextUrl}>
                Next 9 Pokémon
            </button>
        </div>
    );
}

export default PokeList;