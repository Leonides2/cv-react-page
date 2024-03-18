import React from "react";


export interface IThemeProviderProps {
    children: React.ReactNode
}

export const SpotifyProvider: React.FC<IThemeProviderProps> = ({children}) =>
{
    var q = '', limit= '' ,type= '', offset= '', topResults = ''

    return(
        <SpotifyContext.Provider value={{q,limit, type, offset, topResults}}>
            {children}
        </SpotifyContext.Provider>

    )
}