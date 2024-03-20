type SpotifyResponse = {
albums: {
      totalCount: number,
      items: {
          data: {
            uri: string,
            name: string,
            artists: {
              items:[ 
                {
                  uri: string,
                  profile: {
                    name: string
                  }
                }]
            }
        },
            coverArt: {
              sources: 
                {
                    url: string,
                    width: number|null,
                    height: number|null
                }
            },
            date: {
              year: number
            }
          }
        },
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
    },
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
    },
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
    },
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
    },
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
    },
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
        }]},
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
        }],
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
    },
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
    }
}

export default SpotifyResponse