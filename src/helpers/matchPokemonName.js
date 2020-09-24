import pokemonList from '../data/pokemonlist'

const matchPokemonName = (keyword) => {
    return (
        pokemonList.filter((pokemonName)=>{
            const  patternName=new RegExp(`^(${keyword})`, 'i');
            return  pokemonName.match(patternName)!==null
        })).slice(0,7);
}

export default matchPokemonName