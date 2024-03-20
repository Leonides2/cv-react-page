import React, { useState } from "react";
import SpotifyContext from "./SpotifyContext";


export interface IThemeProviderProps {
    children: React.ReactNode
}

export const SpotifyProvider: React.FC<IThemeProviderProps> = ({children}) =>
{
    const [q, setQuery] = useState('');
    const [limit, setLimit] = useState('');
    const [type, setType] = useState('');
    const [offset, setOffset] = useState('');
    const [topResults, setTopResults] = useState('');

    return(
        <SpotifyContext.Provider value={{q,setQuery,limit, setLimit, type, setType,offset,setOffset, topResults, setTopResults}}>
            {children}
        </SpotifyContext.Provider>

    )
}