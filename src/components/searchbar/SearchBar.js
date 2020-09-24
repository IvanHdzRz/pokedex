import React from 'react'
import pokeList from '../../data/pokemonlist';
import matchPokemonName from '../../helpers/matchPokemonName';
import useForm from '../../hooks/useForm';

const SearchBar = () => {
    const [data,handleChange]= useForm({pokemonName:''})
    const {pokemonName}=data;
    console.log( matchPokemonName(pokemonName));
    return (
        <div>
            <input 
                type='text' 
                name='pokemonName'
                value={pokemonName}
                onChange={handleChange} 
                autoComplete='off' 
                id='search' 
                list="pokemon-list"
            />
            
            <datalist id='pokemon-list'>
                {
                    //si ya empezo a escribir el usuario muestra sugerencias 
                    //para autocompletar
                    pokemonName!=''?
                    (
                        matchPokemonName(pokemonName).map((pokemonSugest, i)=>{
                            return <option value={pokemonSugest} key={i}/>
                        })
                    )
                    :
                    (
                        <option value=''/>
                    )    
                }
            </datalist>
        </div>
    )
}

export default SearchBar; 
