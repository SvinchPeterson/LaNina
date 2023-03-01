'use strict'

import { Tour } from '../../components'

import { galleryKutaisi } from '../../galleries/travelGalleries'

import { descriptionKutaisi } from '../../texts/travelTexts/toursDescriptions'

const props = {
  gallery: {
    title: {
      alignSelf: 'flex-end',
      margin: '- Y2 Y1 -'
    },
    gallery: {
      round: 'G2 0 0 G2',
      ':before': {
        top: '0',
        left: '0',
        background: 'linear-gradient(to left, rgba(15, 49, 61, 1) 1%, rgba(15, 49, 61, 0) 100%)'
      }
    },
    footer: {
      alignSelf: 'flex-end'
    }
  }
}

export const tourKutaisi = {
  extend: Tour,
  props,

  description: { extend: descriptionKutaisi },

  gallery: {
    title: { text: 'KUTAISI' },
    gallery: {
      extend: galleryKutaisi,
      childExtend: {
        class: {
          show: (element, state) => state.activeKutaisiGalleryImage === parseInt(element.key)
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
                const { activeKutaisiGalleryImage } = state
                state.update({
                  activeKutaisiGalleryImage: activeKutaisiGalleryImage - 1
                })
                if (activeKutaisiGalleryImage <= 0) {
                  state.update({ activeKutaisiGalleryImage: 4 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeKutaisiGalleryImage } = state
                state.update({
                  activeKutaisiGalleryImage: activeKutaisiGalleryImage + 1
                })
                if (activeKutaisiGalleryImage >= 4) {
                  state.update({ activeKutaisiGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  }
}
