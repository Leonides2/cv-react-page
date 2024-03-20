import React from "react"

type SpotifyContextData = {
    q:string,
    setQuery: (query : string) => void, 
    type: string, 
    setType: (type : string) => void,
    limit: string, 
    setLimit: (type : string) => void,
    offset: string, 
    setOffset: (type : string) => void,
    topResults: string,
    setTopResults: (type : string) => void
}


const SpotifyContext = React.createContext<SpotifyContextData>({
    q: '',
    setQuery: () =>{},
    type: '',
    setType: () => {},
    limit: '',
    setLimit: () => {},
    offset: '',
    setOffset: () => {},
    topResults: '',
    setTopResults: () => {},
})

export default SpotifyContext