import AlbumItems from "./AlbumItems"

type SpotifyResponse = {
"albums": {
      "totalCount": number,
      "items": AlbumItems[]
      } | null,
    artists: {
      totalCount: number,
      items:[
        {
          data: {
            uri: string,
            profile: {
              name: string
            },
            visuals: {
              avatarImage: {
                sources: 
                  {
                    url: string,
                    width: number|null,
                    height: number|null
                  }
              }
            }
          }
        }]
    } | null,
    episodes: {
      totalCount: number,
      items: [
        {
          data: {
            uri: string,
            name: string,
            coverArt: {
              sources: [
                {
                    url: string,
                    width: number|null,
                    height: number|null
                }
              ]
            },
            duration: {
              totalMilliseconds: number
            },
            releaseDate: {
              isoString: string
            },
            podcast: {
              coverArt: {
                sources: [
                  {
                    url: string,
                    width: number|null,
                    height: number|null
                  }
                ]
              }
            },
            description: string,
            contentRating: {
              label: string
            }
          }
        }]
    } | null,
    genres: {
      totalCount: number,
      items: [
        {
          data: {
            uri: string,
            name: string,
            image: {
              sources: [
                {
                    url: string,
                    width: number|null,
                    height: number|null
                }
              ]
            }
          }
        }
      ]
    } |null,
    playlists: {
      totalCount: number,
      items: [
        {
          data: {
            uri: string,
            name: string,
            description: string,
              images: {
              items: [
                {
                  sources: [
                    {
                      url: string,
                      width: number | null,
                      height: number | null
                    }
                  ]
                }
              ]
            },
            owner: {
              name: string
            }
          }
        }]
    } | null,
    podcasts: {
      totalCount: number,
      items: [
        {
          data: {
            uri: string,
            name: string,
            coverArt: {
              sources: [
                {
                    url: string,
                    width: number|null,
                    height: number|null
                }
              ]
            },
            type: string,
            publisher: {
              name: string
            },
            mediaType: string
          }
        }]
    } | null,
    topResults: {
      items: [
        {
          data: {
            uri: string,
            profile: {
              name: string
            },
            visuals: {
              avatarImage: {
                sources: [
                  {
                    url: string,
                    width: number|null,
                    height: number|null
                  }
                ]
              }
            }
          }
        }
      ],
      featured: [
        {
          data: {
            uri: string,
            name: string,
            description: string,
            images: {
              items: [
                {
                  sources: [
                    {
                      url: string,
                      width: number|null,
                      height: number|null
                    }
                  ]
                }
              ]
            },
            owner: {
              name: string
            }
          }
        }]
      } | null,
    tracks: {
      totalCount: number,
      items: [
        {
          data: {
            uri: string,
            id: string,
            name: string,
            albumOfTrack: {
              uri: string,
              name: string,
              coverArt: {
                sources: [
                  {
                    url: string,
                    width: number|null,
                    height: number|null
                  }
                ]
              },
              id: string,
              sharingInfo: {
                shareUrl: string
              }
            },
            artists: {
              items: [
                {
                  uri: string,
                  profile: {
                    name: string
                  }
                }
              ]
            },
            contentRating: {
              label: string
            },
            duration: {
              totalMilliseconds: number
            },
            playability: {
              playable: boolean
            }
          }
        }
      ]
    } | null,
    users: {
      totalCount: number,
      items: [
        {
          data: {
            uri: string,
            id: string,
            displayName: string,
            username: string,
            image: {
              smallImageUrl: string,
              largeImageUrl: string
            }
          }
        }
      ]
    } | null
}

export default SpotifyResponse