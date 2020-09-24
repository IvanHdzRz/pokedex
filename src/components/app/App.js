import React, {useState } from 'react'
import SearchBar from '../searchbar/SearchBar'
import { useFetchPokemon } from '../../hooks/useFetchPokemon'


const App = () => {
   
    const [pokemonSearched, setpokemonSearched] = useState('pikachu')
    
    const {loading,pokemonInfo}=useFetchPokemon(pokemonSearched);
    
    const handleSearch=(pokemonName)=>{
        
        setpokemonSearched(pokemonName);
    }

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            {
                loading?
                (<h2>cargando</h2>)
                :
                (<>
                    <img src={pokemonInfo.sprites.front_default} alt={'img del poke'}/>
                    <h2>#{pokemonInfo.id}  {pokemonInfo.name}</h2>
                    <button onClick={()=>{handleSearch(pokemonInfo.id-1)}}>
                        {'<'}
                    </button>
                    <button onClick={()=>{handleSearch(pokemonInfo.id+1)}}>
                        {'>'}
                    </button>
                </>
                )
            }
        </div>
    )
}

export default App;