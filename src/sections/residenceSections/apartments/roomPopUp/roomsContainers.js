'use strict'

import { Amenities } from "../../../../components"

import {
  galleryBallerina, galleryRedBrick, galleryYellowCouch,
  galleryGreenForest, galleryRetro, galleryBlueLagoon, galleryQvevri, galleryNightSky
 } from "../../../../galleries/apartmentsGalleries"

import {
  textBallerinaEng, textRedBrickEng, textYellowCouchEng,
  textGreenForrestEng, textRetroEng, textBlueLagoonEng, textQvevriEng, textNightSkyEng
 } from "../../../../texts/residence"


export const roomsContainers = {
  ...[
    {
      ...[
        {
          header: {},
          galleryContainer: {
            gallery: {
              extend: galleryBallerina,
              childExtend: {
                class: {
                  show: (element, state) => state.activeBallerinaImage === parseInt(element.key)
                    ? { opacity: 1 } : { opacity: 0 }
                }
              }
            },
            footer: {
              book: {
                props: { href: 'https://www.airbnb.com/rooms/52732503?source_impression_id=p3_1682382416_Tsu%2B2D3NxWv2TZ8E' }
              },
              navArrows: {
                ...[
                  {
                    on: {
                      click: (event, element, state) => {
                        const { activeBallerinaImage } = state
                        state.update({
                          activeBallerinaImage: activeBallerinaImage - 1
                        })
                        if (activeBallerinaImage <= 0) {
                          state.update({ activeBallerinaImage: 8 })
                        }
                      }
                    }
                  },
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeBallerinaImage } = state
                        state.update({
                          activeBallerinaImage: activeBallerinaImage + 1
                        })
                        if (activeBallerinaImage >= 8) {
                          state.update({ activeBallerinaImage: 0 })
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          article: {
            description: { extend: textBallerinaEng },
            amenities: { extend: Amenities }
          }
        }
      ]
    },

    {
      ...[
        {
          header: {},
          galleryContainer: {
            gallery: {
              extend: galleryRedBrick,
              childExtend: {
                class: {
                  show: (element, state) => state.activeRedBrickImage === parseInt(element.key)
                    ? { opacity: 1 } : { opacity: 0 }
                }
              }
            },
            footer: {
              book: {
                props: { href: 'https://www.airbnb.com/rooms/52610522?source_impression_id=p3_1682382585_3pV8q9n5WAaAHCJi' }
              },
              navArrows: {
                ...[
                  {
                    on: {
                      click: (event, element, state) => {
                        const { activeRedBrickImage } = state
                        state.update({
                          activeRedBrickImage: activeRedBrickImage - 1
                        })
                        if (activeRedBrickImage <= 0) {
                          state.update({ activeRedBrickImage: 8 })
                        }
                      }
                    }
                  },
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeRedBrickImage } = state
                        state.update({
                          activeRedBrickImage: activeRedBrickImage + 1
                        })
                        if (activeRedBrickImage >= 8) {
                          state.update({ activeRedBrickImage: 0 })
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          article: {
            description: { extend: textRedBrickEng },
            amenities: { extend: Amenities }
          }
        }
      ]
    },

    {
      ...[
        {
          header: {},
          galleryContainer: {
            gallery: {
              extend: galleryYellowCouch,
              childExtend: {
                class: {
                  show: (element, state) => state.activeYellowCouchImage === parseInt(element.key)
                    ? { opacity: 1 } : { opacity: 0 }
                }
              }
            },
            footer: {
              book: {
                props: { href: 'https://www.airbnb.com/rooms/52611151?source_impression_id=p3_1682382619_PL2VTjn6mACnlC1v' }
              },
              navArrows: {
                ...[
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeYellowCouchImage } = state
                        state.update({
                          activeYellowCouchImage: activeYellowCouchImage - 1
                        })
                        if (activeYellowCouchImage <= 0) {
                          state.update({ activeYellowCouchImage: 8 })
                        }
                      }
                    }
                  },
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeYellowCouchImage } = state
                        state.update({
                          activeYellowCouchImage: activeYellowCouchImage + 1
                        })
                        if (activeYellowCouchImage >= 8) {
                          state.update({ activeYellowCouchImage: 0 })
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          article: {
            description: { extend: textYellowCouchEng },
            amenities: { extend: Amenities }
          }
        }
      ]
    },

    {
      ...[
        {
          header: {},
          galleryContainer: {
            gallery: {
              extend: galleryGreenForest,
              childExtend: {
                class: {
                  show: (element, state) => state.activeGreenForestImage === parseInt(element.key)
                    ? { opacity: 1 } : { opacity: 0 }
                }
              }
            },
            footer: {
              book: {
                props: { href: 'https://www.airbnb.com/rooms/578777975140256943?source_impression_id=p3_1682382673_15yD2Owr%2BdDz4SnZ' }
              },
              navArrows: {
                ...[
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeGreenForestImage } = state
                        state.update({
                          activeGreenForestImage: activeGreenForestImage - 1
                        })
                        if (activeGreenForestImage <= 0) {
                          state.update({ activeGreenForestImage: 9 })
                        }
                      }
                    }
                  },
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeGreenForestImage } = state
                        state.update({
                          activeGreenForestImage: activeGreenForestImage + 1
                        })
                        if (activeGreenForestImage >= 9) {
                          state.update({ activeGreenForestImage: 0 })
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          article: {
            description: { extend: textGreenForrestEng },
            amenities: { extend: Amenities }
          }
        }
      ]
    },

    {
      ...[
        {
          header: {},
          galleryContainer: {
            gallery: {
              extend: galleryRetro,
              childExtend: {
                class: {
                  show: (element, state) => state.activeRetroImage === parseInt(element.key)
                    ? { opacity: 1 } : { opacity: 0 }
                }
              }
            },
            footer: {
              book: {
                props: { href: 'https://www.airbnb.com/rooms/579012726681765152?source_impression_id=p3_1682382747_XDUohdD4%2B7e7OJmJ' }
              },
              navArrows: {
                ...[
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeRetroImage} = state
                        state.update({
                          activeRetroImage: activeRetroImage - 1
                        })
                        if (activeRetroImage <= 0) {
                          state.update({ activeRetroImage: 8 })
                        }
                      }
                    }
                  },
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeRetroImage } = state
                        state.update({
                          activeRetroImage: activeRetroImage + 1
                        })
                        if (activeRetroImage >= 8) {
                          state.update({ activeRetroImage: 0 })
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          article: {
            description: { extend: textRetroEng },
            amenities: { extend: Amenities }
          }
        }
      ]
    },

    {
      ...[
        {
          header: {},
          galleryContainer: {
            gallery: {
              extend: galleryBlueLagoon,
              childExtend: {
                class: {
                  show: (element, state) => state.activeBlueLagoonImage === parseInt(element.key)
                    ? { opacity: 1 } : { opacity: 0 }
                }
              }
            },
            footer: {
              book: {
                props: { href: 'https://www.airbnb.com/rooms/835973069072112512?source_impression_id=p3_1682382791_FHvIiMLES1aueGfY' }
              },
              navArrows: {
                ...[
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeBlueLagoonImage} = state
                        state.update({
                          activeBlueLagoonImage: activeBlueLagoonImage - 1
                        })
                        if (activeBlueLagoonImage <= 0) {
                          state.update({ activeBlueLagoonImage: 6 })
                        }
                      }
                    }
                  },
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeBlueLagoonImage } = state
                        state.update({
                          activeBlueLagoonImage: activeBlueLagoonImage + 1
                        })
                        if (activeBlueLagoonImage >= 6) {
                          state.update({ activeBlueLagoonImage: 0 })
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          article: {
            description: { extend: textBlueLagoonEng },
            amenities: { extend: Amenities }
          }
        }
      ]
    },

    {
      ...[
        {
          header: {},
          galleryContainer: {
            gallery: {
              extend: galleryQvevri,
              childExtend: {
                class: {
                  show: (element, state) => state.activeQvevriImage === parseInt(element.key)
                    ? { opacity: 1 } : { opacity: 0 }
                }
              }
            },
            footer: {
              book: {
                props: { href: 'https://www.airbnb.com/rooms/836638635181727976?source_impression_id=p3_1682382829_EYIf93LXdF9pRBSM' }
              },
              navArrows: {
                ...[
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeQvevriImage} = state
                        state.update({
                          activeQvevriImage: activeQvevriImage - 1
                        })
                        if (activeQvevriImage <= 0) {
                          state.update({ activeQvevriImage: 6 })
                        }
                      }
                    }
                  },
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeQvevriImage } = state
                        state.update({
                          activeQvevriImage: activeQvevriImage + 1
                        })
                        if (activeQvevriImage >= 6) {
                          state.update({ activeQvevriImage: 0 })
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          article: {
            description: { extend: textQvevriEng },
            amenities: { extend: Amenities }
          }
        }
      ]
    },
    {
      ...[
        {
          header: {},
          galleryContainer: {
            gallery: {
              extend: galleryNightSky,
              childExtend: {
                class: {
                  show: (element, state) => state.activeNightSkyImage === parseInt(element.key)
                    ? { opacity: 1 } : { opacity: 0 }
                }
              }
            },
            footer: {
              book: {
                props: { href: 'https://www.airbnb.com/rooms/836638635181727976?source_impression_id=p3_1682382829_EYIf93LXdF9pRBSM' }
              },
              navArrows: {
                ...[
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeNightSkyImage} = state
                        state.update({
                          activeNightSkyImage: activeNightSkyImage - 1
                        })
                        if (activeNightSkyImage <= 0) {
                          state.update({ activeNightSkyImage: 9 })
                        }
                      }
                    }
                  },
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeNightSkyImage} = state
                        state.update({
                          activeNightSkyImage: activeNightSkyImage + 1
                        })
                        if (activeNightSkyImage >= 9) {
                          state.update({ activeNightSkyImage: 0 })
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          article: {
            description: { extend: textNightSkyEng },
            amenities: { extend: Amenities }
          }
        }
      ]
    }
  ]
}