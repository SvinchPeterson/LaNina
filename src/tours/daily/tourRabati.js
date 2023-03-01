'use strict'

import { Tour } from '../../components'

import { galleryRabati } from '../../galleries/travelGalleries'

import { descriptionRabar } from '../../texts/travelTexts/toursDescriptions'

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

export const tourRabati = {
  extend: Tour,
  props,

  gallery: {
    title: { text: 'RABATI CASTLE' },
    gallery: {
      extend: galleryRabati,
      childExtend: {
        class: {
          show: (element, state) => state.activeRabatiGalleryImage === parseInt(element.key)
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
                const { activeRabatiGalleryImage } = state
                state.update({
                  activeRabatiGalleryImage: activeRabatiGalleryImage - 1
                })
                if (activeRabatiGalleryImage <= 0) {
                  state.update({ activeRabatiGalleryImage: 3 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeRabatiGalleryImage } = state
                state.update({
                  activeRabatiGalleryImage: activeRabatiGalleryImage + 1
                })
                if (activeRabatiGalleryImage >= 3) {
                  state.update({ activeRabatiGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  },

  description: {
    extend: descriptionRabar
  }
}
