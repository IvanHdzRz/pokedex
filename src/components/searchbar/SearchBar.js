import React from 'react'
import matchPokemonName from '../../helpers/matchPokemonName';
import useForm from '../../hooks/useForm';

const SearchBar = ({onSearch}) => {
    const [data,handleChange]= useForm({pokemonName:''})
    const {pokemonName}=data;
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(pokemonName)
        onSearch(pokemonName)
    }
    return (
        <form onSubmit={handleSubmit}>
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
                    pokemonName!==''?
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
        </form>
    )
}

export default SearchBar; 
