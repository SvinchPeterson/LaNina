'use strict'

import { Tour } from '../../components'

import { galleryKakheti } from '../../galleries/travelGalleries'

import { descriptionKakheti } from '../../texts/travelTexts/toursDescriptions'

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

export const tourKakheti = {
  extend: Tour,
  props,

  gallery: {
    title: { text: 'KAKHETI' },
    gallery: {
      extend: galleryKakheti,
      childExtend: {
        class: {
          show: (element, state) => state.activeKakhetiGalleryImage === parseInt(element.key)
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
                const { activeKakhetiGalleryImage } = state
                state.update({
                  activeKakhetiGalleryImage: activeKakhetiGalleryImage - 1
                })
                if (activeKakhetiGalleryImage <= 0) {
                  state.update({ activeKakhetiGalleryImage: 4 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeKakhetiGalleryImage } = state
                state.update({
                  activeKakhetiGalleryImage: activeKakhetiGalleryImage + 1
                })
                if (activeKakhetiGalleryImage >= 4) {
                  state.update({ activeKakhetiGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  },

  description: { extend: descriptionKakheti }
}
