import {useState} from 'react'

export const useCounter = ({initial,min,max}) => {
    const [count, setcount] = useState(initial)

    const handleAdd=()=>{
        setcount(count=>count+1>max?min:count+1);
    }
    const handleSubs=()=>{
        setcount(count=>count-1<min?max:count-1);
    }

    return {count,handleAdd,handleSubs,setcount}
    
}
