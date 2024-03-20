import React from "react"

type SpotifyContextData = {
    q:string,
    setQuery: (query : string) => void, 
    type: string, 
    setType: (type : string) => void,
    limit: string, 
    setLimit: (limit : string) => void,
    offset: string, 
    setOffset: (offset : string) => void,
    topResults: string,
    setTopResults: (topResults : string) => void
}


const SpotifyContext = React.createContext<SpotifyContextData>({
    q: '',
    setQuery: () => {},
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