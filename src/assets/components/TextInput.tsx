import { ChangeEvent, useContext, useState } from "react"
import SpotifyContext from "../../Provider/SpotifyContext";

const TextInput= ({placeholder} : {placeholder: string})=>{

    const spotify = useContext(SpotifyContext);
    const [value, setInputValue] = useState('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        spotify.setQuery(newValue);
    };


    return(
        <input type="text" placeholder={placeholder} 
         onChange={handleInputChange} value={value}></input>
    )
}

export default TextInput