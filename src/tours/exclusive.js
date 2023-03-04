'use strict'

import { TourContainer, Tour } from '../components'

import { galleryExclusiveTour } from '../galleries/travelGalleries'
import { descriptionExclusiveTour } from '../texts/travelText/toursDescriptions'

import { commonTourProps } from './commonProps'

const tourExclusive = {
  extend: Tour,
  props: commonTourProps,

  gallery: {
    gallery: {
      extend: galleryExclusiveTour,
      childExtend: {
        class: {
          show: (element, state) => state.activeExclusiveGalleryImage === parseInt(element.key)
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
                const { activeExclusiveGalleryImage } = state
                state.update({
                  activeExclusiveGalleryImage: activeExclusiveGalleryImage - 1
                })
                if (activeExclusiveGalleryImage <= 0) {
                  state.update({ activeExclusiveGalleryImage: 8 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeExclusiveGalleryImage } = state
                state.update({
                  activeExclusiveGalleryImage: activeExclusiveGalleryImage + 1
                })
                if (activeExclusiveGalleryImage >= 8) {
                  state.update({ activeExclusiveGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  },

  description: { extend: descriptionExclusiveTour }
}

export const exclusive = {
  extend: TourContainer,

  class: {
    show: (element, state) => state.activeExclusive
      ? { opacity: '1' }
      : { opacity: '0', zIndex: '-1' }
  },

  tourExclusive
}
