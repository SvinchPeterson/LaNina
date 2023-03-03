'use strict'

import { Tour } from '../../components'

import { galleryCulturalTour } from '../../galleries/travelGalleries'

import { descriptionCulturalTour } from '../../texts/travelText/toursDescriptions'

export const tourCultural = {
  extend: Tour,

  description: { extend: descriptionCulturalTour },
  gallery: {
    title: { text: 'cultural tour' },
    gallery: {
      extend: galleryCulturalTour,
      childExtend: {
        class: {
          show: (element, state) => state.activeCulturalTourGalleryImage === parseInt(element.key)
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
                const { activeCulturalTourGalleryImage } = state
                state.update({
                  activeCulturalTourGalleryImage: activeCulturalTourGalleryImage - 1
                })
                if (activeCulturalTourGalleryImage <= 0) {
                  state.update({ activeCulturalTourGalleryImage: 8 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeCulturalTourGalleryImage } = state
                state.update({
                  activeCulturalTourGalleryImage: activeCulturalTourGalleryImage + 1
                })
                if (activeCulturalTourGalleryImage >= 8) {
                  state.update({ activeCulturalTourGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  }

}
