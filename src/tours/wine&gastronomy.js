'use strict'

import { TourContainer, Tour } from '../components'
import { galleryWineGastronomyTour } from '../galleries/travelGalleries'

import { descriptionWineGastronomy } from '../texts/travelText/toursDescriptions'

import { commonTourProps } from './commonProps'

const tourWineGastronomy = {
  extend: Tour,
  props: commonTourProps,

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
  description: { extend: descriptionWineGastronomy }
}

export const wineGastronomy = {
  extend: TourContainer,

  class: {
    show: (element, state) => state.activeWineGastronomy
      ? { opacity: '1' }
      : { opacity: '0', zIndex: '-1' }
  },

  tourWineGastronomy
}
