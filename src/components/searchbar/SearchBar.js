import React from 'react'
import pokeList from '../../data/pokemonlist';
import useForm from '../../hooks/useForm';

const SearchBar = () => {
    const [data,handleChange]= useForm({pokemonName:''})
    const {pokemonName}=data;
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
                {pokeList.map((pokemonName)=>{
                    return <option value={pokemonName} />
                })}
            </datalist>
        </div>
    )
}

export default SearchBar; 
