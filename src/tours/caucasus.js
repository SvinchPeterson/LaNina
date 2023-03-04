'use strict'

import { TourContainer, Tour } from '../components'

import { galleryCaucasusTour } from '../galleries/travelGalleries'

import { descriptionCaucasusTour } from '../texts/travelText/toursDescriptions'

import { commonTourProps } from './commonProps'

const tourCaucasus = {
  extend: Tour,
  class: {
    show: (element, state) => state.activeCaucasus
      ? { opacity: '1', transition: 'opacity 1.5s ease-in-out' }
      : { opacity: '0', transition: 'opacity .25s ease-in-out' }
  },

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
  description: {
    extend: descriptionCaucasusTour,
    class: {
      show: (element, state) => state.activeCaucasus
        ? {
          opacity: '1',
          transform: 'translateY(0)',
          transition: 'opacity .65s ease-in-out, transform .65s ease-in-out'
        }
        : {
          opacity: '0',
          transform: 'translateY(50px)',
          transition: 'opacity .25s ease-in-out, transform .25s ease-in-out'
        }
    }
  }
}

export const caucasus = {
  extend: TourContainer,
  props: commonTourProps,
  class: {
    show: (element, state) => state.activeCaucasus
      ? {
        opacity: '1',
        transform: 'translateY(0)',
        transition: 'opacity .65s ease-in-out, transform .65s ease-in-out'
      }
      : {
        opacity: '0',
        pointerEvents: 'none',
        transform: 'translateY(-30px)',
        transition: 'opacity .25s ease-in-out, transform .25s ease-in-out'
      }
  },

  tourCaucasus
}
