'use strict'

import { TourContainer, Tour } from '../components'

import { galleryAdventureTour } from '../galleries/travelGalleries'

import { textAdventure } from '../texts/travelTexts'

const tourAdventure = {
  extend: Tour,

  gallery: {
    title: { text: '' },
    gallery: {
      extend: galleryAdventureTour,
      childExtend: {
        class: {
          show: (element, state) => state.activeAdventureGalleryImage === parseInt(element.key)
            ? { opacity: 1 } : { opacity: 0 }
        }
      }
    },
    footer: {
      book: {},
      navArrows: {
        ...[
          {
            on: {
              click: (event, element, state) => {
                const { activeAdventureGalleryImage } = state
                state.update({
                  activeAdventureGalleryImage: activeAdventureGalleryImage - 1
                })
                if (activeAdventureGalleryImage <= 0) {
                  state.update({ activeAdventureGalleryImage: 3 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeAdventureGalleryImage } = state
                state.update({
                  activeAdventureGalleryImage: activeAdventureGalleryImage + 1
                })
                if (activeAdventureGalleryImage >= 3) {
                  state.update({ activeAdventureGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  },

  article: {
    articleContent: {
      paragraphs: {
        textAdventure
      },
      tourPlaces: {
        title: {},
        list: {
          ...[
            { text: 'Birtvisi Fortress' },
            { text: 'Sheupovari' },
            { text: 'Devi Canyon' }
          ]
        }
      }
    }
  }
}

const props = {
  overflow: 'hidden',
  position: 'fixed',
  tourAdventure: {
    align: 'center center',
    margin: 'auto',
    gallery: {
      title: { margin: '- - Y1 Y2' },
      gallery: {
        round: 'G2 G2 0 0',
        height: 'G3',
        ':before': {
          background: 'linear-gradient(rgba(15, 49, 61, 0), rgba(15, 49, 61, 1))'
        }
      },
      footer: { width: '100%' }
    }
  }
}

export const adventure = {
  extend: TourContainer,
  props,

  class: {
    show: (element, state) => state.activeAdventure
      ? { opacity: '1' }
      : { opacity: '0', zIndex: '-1' }
  },

  tourAdventure
}
