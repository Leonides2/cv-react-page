type SpotifyContextData = {
    q:string, 
    type: string, 
    limit: string, 
    offset: string, 
    topResults: string
}


const SpotifyContext = React.createContext<SpotifyContextData>({
    q: '',
    type: '',
    limit: '',
    offset: '',
    topResults: '',
})