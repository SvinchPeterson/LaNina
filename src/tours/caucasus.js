'use strict'

import { TourContainer, Tour } from '../components'

import { galleryCaucasusTour } from '../galleries/travelGalleries'

import { descriptionCaucasusTour } from '../texts/travelText/toursDescriptions'

const tourCaucasus = {
  extend: Tour,
  gallery: {
    gallery: {
      extend: galleryCaucasusTour,
      childExtend: {
        class: {
          show: (element, state) => state.activeCaucasusGalleryImage === parseInt(element.key)
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
                const { activeCaucasusGalleryImage } = state
                state.update({
                  activeCaucasusGalleryImage: activeCaucasusGalleryImage - 1
                })
                if (activeCaucasusGalleryImage <= 0) {
                  state.update({ activeCaucasusGalleryImage: 27 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeCaucasusGalleryImage } = state
                state.update({
                  activeCaucasusGalleryImage: activeCaucasusGalleryImage + 1
                })
                if (activeCaucasusGalleryImage >= 27) {
                  state.update({ activeCaucasusGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  },
  description: { extend: descriptionCaucasusTour }
}

const props = {
  tourCaucasus: {
    margin: 'auto',
    gallery: {
      gallery: {
        round: 'G1 G1 0 0',
        width: 'H2',
        height: 'H',
        ':before': {
          top: '0',
          left: '0',
          background: 'linear-gradient(to top, rgba(15, 49, 61, 1) 1%, rgba(15, 49, 61, 0) 100%)'
        }
      },

      footer: { width: '100%' }
    }
  }

}
export const caucasus = {
  extend: TourContainer,
  props,

  class: {
    show: (element, state) => state.activeCaucasus
      ? { opacity: '1' }
      : { opacity: '0', zIndex: '-1' }
  },

  tourCaucasus
}
