'use strict'

import { Tour } from '../../components'
import { galleryCapitalTour } from '../../galleries/travelGalleries'
import { $capital } from '../../texts/travel'
import { packageCapital } from '../../toursPackages'

export const tourCapital = {
  extend: Tour,
  // attr: { id: 'standard' },
  props: { padding: 'C2 - - -' },

  gallery: {
    title: { text: 'capital tour' },
    gallery: {
      extend: galleryCapitalTour,
      childExtend: {
        class: {
          show: (element, state) => state.activeCapitalTourdGalleryImage === parseInt(element.key)
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
                const { activeCapitalTourdGalleryImage } = state
                state.update({
                  activeCapitalTourdGalleryImage: activeCapitalTourdGalleryImage - 1
                })
                if (activeCapitalTourdGalleryImage <= 0) {
                  state.update({ activeCapitalTourdGalleryImage: 8 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeCapitalTourdGalleryImage } = state
                state.update({
                  activeCapitalTourdGalleryImage: activeCapitalTourdGalleryImage + 1
                })
                if (activeCapitalTourdGalleryImage >= 8) {
                  state.update({ activeCapitalTourdGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  },

  article: {
    description: { extend: $capital },
    package: { extend: packageCapital }
  }
}
