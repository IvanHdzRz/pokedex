import  { useState } from 'react'

export const useFetchPokemon = (pokemonName) => {
    const [data, setdata] = useState({
        loading:true,
        error:null,
        pokemonInfo:null
    })

    useEffect(() => {
        setdata({
            loading:true,
            error:null,
            pokemonInfo:null,
        })
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).
            then((data)=>{data.json}).
            then((data)=>{
                setdata({
                    loading:false,
                    error:null,
                    pokemonInfo:data
                })
            })
    }, [pokemonName])
    
    return data;
    
}
