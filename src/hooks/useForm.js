import { useState } from "react";



const useForm = (fields={}) => {
    const [data, setdata] = useState(fields);

    const handleChange=({target})=>{
        setdata((prevData)=>{
            return {
                ...prevData,
                [target.name]:target.value,
            }

        })
    }

   return [data,handleChange]; 
}

export default useForm
