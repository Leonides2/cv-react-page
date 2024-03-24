import { ChangeEvent, useContext, useState } from "react";
import SpotifyContext from "../../Provider/SpotifyContext";
import Button from "./Button"
import List from "./List"
import TextInput from "./TextInput"
import getSearchResults from "../../logic/spotifyUpdate";
import mock from "../mock/spotify.json"
import Table from "../../logic/Props/Table";
import SpotifyResponse from "../../logic/Props/SporifyResponse";

const SpotifyComponent = ({placeholder, buttonText}:{placeholder: string, buttonText: string}) =>{

    const spotify = useContext(SpotifyContext);
    const [value, setInputValue] = useState('');

    let response: SpotifyResponse = mock;

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        spotify.setQuery(newValue);
    };

    async function onClick(){
        var response =  getSearchResults(spotify.q);
        return response
    }

    function parseToTable(e: JSON){
        let table: Table;

        for (const index in e){
            if (e.hasOwnProperty(index)) {
                table.tables[index] = e[index];
            }
          }

        return table
    }







    return(
        <>
        <TextInput placeholder={placeholder} handleInputChange={handleInputChange} value={value}></TextInput>

        <Button text={buttonText} onClick={()=> onClick}></Button>

        {
            if(!response==null) {
                
            }
        }
       
        
        </>
    )


}

export default SpotifyComponent