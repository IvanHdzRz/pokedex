import React, {useState } from 'react'
import SearchBar from '../searchbar/SearchBar'
import { useFetchPokemon } from '../../hooks/useFetchPokemon'
import { Loader } from '../loader/Loader'


const App = () => {
   
    const [pokemonSearched, setpokemonSearched] = useState('pikachu')
    
    const {loading,pokemonInfo}=useFetchPokemon(pokemonSearched);
    
    const handleSearch=(pokemonName)=>{
        
        setpokemonSearched(pokemonName);
    }

    return (
        <div className='app'>
            <SearchBar onSearch={handleSearch} />
            
            {
                loading?
                (<Loader />)
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