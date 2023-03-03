'use strict'

import { Tour } from '../../components'

import { galleryRoyalTour } from '../../galleries/travelGalleries'

import { descriptionRoyalTour } from '../../texts/travelText/toursDescriptions'

export const tourRoyal = {
  extend: Tour,

  description: {
    extend: descriptionRoyalTour

  },
  gallery: {
    title: { text: 'royal tour' },
    gallery: {
      extend: galleryRoyalTour,
      childExtend: {
        class: {
          show: (element, state) => state.activeRoyalTourGalleryImage === parseInt(element.key)
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
                const { activeRoyalTourGalleryImage } = state
                state.update({
                  activeRoyalTourGalleryImage: activeRoyalTourGalleryImage - 1
                })
                if (activeRoyalTourGalleryImage <= 0) {
                  state.update({ activeRoyalTourGalleryImage: 9 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeRoyalTourGalleryImage } = state
                state.update({
                  activeRoyalTourGalleryImage: activeRoyalTourGalleryImage + 1
                })
                if (activeRoyalTourGalleryImage >= 9) {
                  state.update({ activeRoyalTourGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  }
}
