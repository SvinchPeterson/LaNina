'use strict'

import { Tour } from '../../components'

import { galleryKutaisi } from '../../galleries/travelGalleries'

import { descriptionKutaisi } from '../../texts/travelText/toursDescriptions'

export const tourKutaisi = {
  extend: Tour,
  description: { extend: descriptionKutaisi },
  gallery: {
    title: { text: 'kutaisi' },
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
