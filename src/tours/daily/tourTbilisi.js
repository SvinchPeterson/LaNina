'use strict'

import { Tour } from '../../components'

import { galleryTbilisi } from '../../galleries/travelGalleries'
import { descriptionTbilisi } from '../../texts/travelText/toursDescriptions'

export const tourTbilisi = {
  extend: Tour,
  gallery: {
    title: { text: 'tbilisi city tour' },
    gallery: {
      extend: galleryTbilisi,
      childExtend: {
        class: {
          show: (element, state) => state.activeTbilisiGalleryImage === parseInt(element.key)
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
                const { activeTbilisiGalleryImage } = state
                state.update({
                  activeTbilisiGalleryImage: activeTbilisiGalleryImage - 1
                })
                if (activeTbilisiGalleryImage <= 0) {
                  state.update({ activeTbilisiGalleryImage: 5 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeTbilisiGalleryImage } = state
                state.update({
                  activeTbilisiGalleryImage: activeTbilisiGalleryImage + 1
                })
                if (activeTbilisiGalleryImage >= 5) {
                  state.update({ activeTbilisiGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  },

  description: { extend: descriptionTbilisi }

}
