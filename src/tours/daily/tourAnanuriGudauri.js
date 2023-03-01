'use strict'

import { Tour } from '../../components'

import { galleryKazbegi } from '../../galleries/travelGalleries'

import { descriptionAnanuri } from '../../texts/travelTexts/toursDescriptions'

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

export const tourAnanuriGudauri = {
  extend: Tour,
  props,

  description: { extend: descriptionAnanuri },

  gallery: {
    title: { text: 'ANANURI . GUDAURI . KAZBEGI' },
    gallery: {
      extend: galleryKazbegi,
      childExtend: {
        class: {
          show: (element, state) => state.activeAnanuriGudauriGalleryImage === parseInt(element.key)
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
                const { activeAnanuriGudauriGalleryImage } = state
                state.update({
                  activeAnanuriGudauriGalleryImage: activeAnanuriGudauriGalleryImage - 1
                })
                if (activeAnanuriGudauriGalleryImage <= 0) {
                  state.update({ activeAnanuriGudauriGalleryImage: 4 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeAnanuriGudauriGalleryImage } = state
                state.update({
                  activeAnanuriGudauriGalleryImage: activeAnanuriGudauriGalleryImage + 1
                })
                if (activeAnanuriGudauriGalleryImage >= 4) {
                  state.update({ activeAnanuriGudauriGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  }
}
