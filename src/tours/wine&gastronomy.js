'use strict'

import { TourContainer, Tour } from '../components'
import { galleryWineGastronomyTour } from '../galleries/travelGalleries'

import { descriptionWineGastronomy } from '../texts/travelText/toursDescriptions'

import { commonTourProps } from './commonProps'

const tourWineGastronomy = {
  extend: Tour,
  class: {
    show: (element, state) => state.activeWineGastronomy
      ? { opacity: '1', transition: 'opacity 1.5s ease-in-out' }
      : { opacity: '0', transition: 'opacity .35s ease-in-out' }
  },

  gallery: {
    gallery: {
      extend: galleryWineGastronomyTour,
      childExtend: {
        class: {
          show: (element, state) => state.activeWineGastronomyGalleryImage === parseInt(element.key)
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
                const { activeWineGastronomyGalleryImage } = state
                state.update({
                  activeWineGastronomyGalleryImage: activeWineGastronomyGalleryImage - 1
                })
                if (activeWineGastronomyGalleryImage <= 0) {
                  state.update({ activeWineGastronomyGalleryImage: 21 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeWineGastronomyGalleryImage } = state
                state.update({
                  activeWineGastronomyGalleryImage: activeWineGastronomyGalleryImage + 1
                })
                if (activeWineGastronomyGalleryImage >= 21) {
                  state.update({ activeWineGastronomyGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  },
  description: {
    extend: descriptionWineGastronomy,
    class: {
      show: (element, state) => state.activeWineGastronomy
        ? {
          opacity: '1',
          transform: 'translateY(0)',
          transition: 'opacity .65s ease-in-out, transform .65s ease-in-out'
        }
        : {
          opacity: '0',
          transform: 'translateY(50px)',
          transition: 'opacity .35s ease-in-out, transform .35s ease-in-out'
        }
    }
  }
}

export const wineGastronomy = {
  extend: TourContainer,
  props: commonTourProps,

  class: {
    show: (element, state) => state.activeWineGastronomy
      ? {
        opacity: '1',
        transform: 'translateY(0)',
        transition: 'opacity .65s ease-in-out, transform .65s ease-in-out'
      }
      : {
        opacity: '0',
        pointerEvents: 'none',
        transform: 'translateY(-30px)',
        transition: 'opacity .35s ease-in-out, transform .35s ease-in-out'
      }
  },

  tourWineGastronomy
}
