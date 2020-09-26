import React, {useState ,useEffect} from 'react'
import SearchBar from '../searchbar/SearchBar'
import { useFetchPokemon } from '../../hooks/useFetchPokemon'
import { Loader } from '../loader/Loader'
import { useCounter } from '../../hooks/useCounter'


const App = () => {
    
    //se inicia con el estado de pikachu
    const [pokemonSearched, setpokemonSearched] = useState('pikachu')
    
    //se hace una consulata ala api con el valor del estado
    const {loading,pokemonInfo}=useFetchPokemon(pokemonSearched);
    
    //se pone un contador inicia con el numero 25 (id de pikachu)
    const {count,handleAdd,handleSubs,setcount}= useCounter({initial:25,max:893,min:1});

    //si la informacion de pokemon cambia tambien cambia el contador al id
    useEffect(() => {
        if(pokemonInfo!==null){
            setcount(pokemonInfo.id)
        }
    }, [pokemonInfo,setcount])

    //si el contador cambia busca al pokemon que indique el contador
    useEffect(() => {
        setpokemonSearched(count)
    }, [count,setpokemonSearched])
    
    
    const handleSearch= async(pokemonName)=>{
        
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
                    <h1>{count} </h1>
                    <button onClick={handleSubs}>
                        {'<'}
                    </button>
                    <button onClick={handleAdd}>
                        {'>'}
                    </button>
                </>
                )
            }
        </div>
    )
}

export default App;