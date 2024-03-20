import { useContext, useRef } from "react"
import SpotifyContext from "../../Provider/SpotifyContext";

const TextInput= ({placeholder, id} : {placeholder: string, id: string})=>{

    const spotify = useContext(SpotifyContext);
    const text = useRef('');

    return(
        <input type="text" placeholder={placeholder} id={id}
        ref={text.current} onChange={()=> spotify.setQuery()}></input>
    )
}

export default TextInput