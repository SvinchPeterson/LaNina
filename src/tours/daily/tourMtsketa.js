'use strict'

import { Tour } from '../../components'

import { galleryMtsketa } from '../../galleries/travelGalleries'

import { descriptionMtsketa } from '../../texts/travelText/toursDescriptions'

export const tourMtsketa = {
  extend: Tour,
  description: { extend: descriptionMtsketa },
  gallery: {
    title: { text: 'mtsketa' },
    gallery: {
      extend: galleryMtsketa,
      childExtend: {
        class: {
          show: (element, state) => state.activeMtsketaGalleryImage === parseInt(element.key)
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
                const { activeMtsketaGalleryImage } = state
                state.update({
                  activeMtsketaGalleryImage: activeMtsketaGalleryImage - 1
                })
                if (activeMtsketaGalleryImage <= 0) {
                  state.update({ activeMtsketaGalleryImage: 3 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeMtsketaGalleryImage } = state
                state.update({
                  activeMtsketaGalleryImage: activeMtsketaGalleryImage + 1
                })
                if (activeMtsketaGalleryImage >= 3) {
                  state.update({ activeMtsketaGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  }
}
