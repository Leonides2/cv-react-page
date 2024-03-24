import AlbumArtistsItems from "./AlbumArtistsItems"
import AlbumArtSources from "./AlbumArtSources"

type AlbumItems = {

          "data": {
            "uri": string,
            "name": string,
            "artists": {
              "items": AlbumArtistsItems[]
            },
            "coverArt": {
              "sources": AlbumArtSources[]
            },
            "date": {
              "year": number
            }
          }
}

export default AlbumItems