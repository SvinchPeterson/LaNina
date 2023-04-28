'use strict'

import { Amenities } from "../../../../components"

import {
  galleryBallerina, galleryRedBrick, galleryYellowCouch,
  galleryGreenForest, galleryRetro, galleryBlueLagoon, galleryQvevri
 } from "../../../../galleries/apartmentsGalleries"

import {
  textBallerinaEng, textRedBrickEng, textYellowCouchEng,
  textGreenForrestEng, textRetroEng, textBlueLagoonEng, textQvevriEng
 } from "../../../../texts/residence"


export const roomsContainers = {
  ...[
    {
      ...[
        {
          header: {},
          galleryContainer: {
            gallery: { extend: galleryBallerina },
            footer: {
              book: {
                props: { src: 'https://www.airbnb.com/rooms/52732503?source_impression_id=p3_1682382416_Tsu%2B2D3NxWv2TZ8E' }
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
            gallery: { extend: galleryRedBrick },
            footer: {
              book: {
                props: { src: 'https://www.airbnb.com/rooms/52610522?source_impression_id=p3_1682382585_3pV8q9n5WAaAHCJi' }
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
            gallery: { extend: galleryYellowCouch },
            footer: {
              book: {
                props: { src: 'https://www.airbnb.com/rooms/52611151?source_impression_id=p3_1682382619_PL2VTjn6mACnlC1v' }
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
            gallery: { extend: galleryGreenForest },
            footer: {
              book: {
                props: { src: 'https://www.airbnb.com/rooms/578777975140256943?source_impression_id=p3_1682382673_15yD2Owr%2BdDz4SnZ' }
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
            gallery: { extend: galleryRetro },
            footer: {
              book: {
                props: { src: 'https://www.airbnb.com/rooms/579012726681765152?source_impression_id=p3_1682382747_XDUohdD4%2B7e7OJmJ' }
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
            gallery: { extend: galleryBlueLagoon },
            footer: {
              book: {
                props: { src: 'https://www.airbnb.com/rooms/835973069072112512?source_impression_id=p3_1682382791_FHvIiMLES1aueGfY' }
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
            gallery: { extend: galleryQvevri },
            footer: {
              book: {
                props: { src: 'https://www.airbnb.com/rooms/836638635181727976?source_impression_id=p3_1682382829_EYIf93LXdF9pRBSM' }
              }
            }
          },
          article: {
            description: { extend: textQvevriEng },
            amenities: { extend: Amenities }
          }
        }
      ]
    }
  ]
}