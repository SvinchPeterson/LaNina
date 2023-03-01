'use strict'

import { Tour } from '../../components'

import { galleryGori } from '../../galleries/travelGalleries'

import { textGori } from '../../texts/travelTexts'

const props = {
  gallery: {
    title: { margin: '- - Y1 Y2' },
    gallery: {
      round: '0 G2 G2 0',
      ':before': {
        top: '0',
        left: '0',
        background: 'linear-gradient(to right, rgba(15, 49, 61, 1) 1%, rgba(15, 49, 61, 0) 100%)'
      }
    }
  }
}

export const tourGori = {
  extend: Tour,
  props,

  gallery: {
    title: { text: 'GORI CITY . UPLISTSIKHE CAVE' },
    gallery: {
      extend: galleryGori,
      childExtend: {
        class: {
          show: (element, state) => state.activeGoriGalleryImage === parseInt(element.key)
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
                const { activeGoriGalleryImage } = state
                state.update({
                  activeGoriGalleryImage: activeGoriGalleryImage - 1
                })
                if (activeGoriGalleryImage <= 0) {
                  state.update({ activeGoriGalleryImage: 4 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeGoriGalleryImage } = state
                state.update({
                  activeGoriGalleryImage: activeGoriGalleryImage + 1
                })
                if (activeGoriGalleryImage >= 4) {
                  state.update({ activeGoriGalleryImage: 0 })
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
        textGori
      },
      tourPlaces: {
        title: {},
        list: {
          ...[
            { text: 'Stalin Museum' },
            { text: 'Uplistsikhe Cave City' }
          ]
        }
      }
    }
  }
}
