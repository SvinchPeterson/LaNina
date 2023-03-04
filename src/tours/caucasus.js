'use strict'

import { TourContainer, Tour } from '../components'

import { galleryCaucasusTour } from '../galleries/travelGalleries'

import { descriptionCaucasusTour } from '../texts/travelText/toursDescriptions'

import { commonTourProps } from './commonProps'

const tourCaucasus = {
  extend: Tour,
  props: commonTourProps,
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

export const caucasus = {
  extend: TourContainer,
  class: {
    show: (element, state) => state.activeCaucasus
      ? { opacity: '1' }
      : { opacity: '0', zIndex: '-1' }
  },

  tourCaucasus
}
