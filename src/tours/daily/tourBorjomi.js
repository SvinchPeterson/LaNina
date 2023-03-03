'use strict'

import { Tour } from '../../components'

import { galleryBorjomi } from '../../galleries/travelGalleries'

import { descriptionBorjomi } from '../../texts/travelText/toursDescriptions'

export const tourBorjomi = {
  extend: Tour,
  description: { extend: descriptionBorjomi },
  gallery: {
    title: { text: 'borjomi' },
    gallery: {
      extend: galleryBorjomi,
      childExtend: {
        class: {
          show: (element, state) => state.activeBorjomiGalleryImage === parseInt(element.key)
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
                const { activeBorjomiGalleryImage } = state
                state.update({
                  activeBorjomiGalleryImage: activeBorjomiGalleryImage - 1
                })
                if (activeBorjomiGalleryImage <= 0) {
                  state.update({ activeBorjomiGalleryImage: 3 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeBorjomiGalleryImage } = state
                state.update({
                  activeBorjomiGalleryImage: activeBorjomiGalleryImage + 1
                })
                if (activeBorjomiGalleryImage >= 3) {
                  state.update({ activeBorjomiGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  }
}
