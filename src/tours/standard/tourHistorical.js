'use strict'

import { Tour } from '../../components'
import { galleryHistoricalTour } from '../../galleries/travelGalleries'
import { $historical } from '../../texts/travel'
import { packageHistorical } from '../../toursPackages'

export const tourHistorical = {
  extend: Tour,

  gallery: {
    title: { text: 'historical tour' },
    gallery: {
      extend: galleryHistoricalTour,
      childExtend: {
        class: {
          show: (element, state) => state.activeHistoricalTourGalleryImage === parseInt(element.key)
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
                const { activeHistoricalTourGalleryImage } = state
                state.update({
                  activeHistoricalTourGalleryImage: activeHistoricalTourGalleryImage - 1
                })
                if (activeHistoricalTourGalleryImage <= 0) {
                  state.update({ activeHistoricalTourGalleryImage: 11 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeHistoricalTourGalleryImage } = state
                state.update({
                  activeHistoricalTourGalleryImage: activeHistoricalTourGalleryImage + 1
                })
                if (activeHistoricalTourGalleryImage >= 11) {
                  state.update({ activeHistoricalTourGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  },

  article: {
    description: { extend: $historical },
    package: { extend: packageHistorical }
  }
}
