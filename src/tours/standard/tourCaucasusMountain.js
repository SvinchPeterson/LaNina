'use strict'

import { Tour } from '../../components'
import { galleryCaucasusMountainTour } from '../../galleries/travelGalleries'
import { $caucasusMountain } from '../../texts/travel'
import { packageCaucasusMountain } from '../../toursPackages'

export const tourCaucasusMountain = {
  extend: Tour,

  gallery: {
    title: { text: 'caucasus mountain tour' },
    gallery: {
      extend: galleryCaucasusMountainTour,
      childExtend: {
        class: {
          show: (element, state) => state.activeCaucasusMountainGalleryImage === parseInt(element.key)
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
                const { activeCaucasusMountainGalleryImage } = state
                state.update({
                  activeCaucasusMountainGalleryImage: activeCaucasusMountainGalleryImage - 1
                })
                if (activeCaucasusMountainGalleryImage <= 0) {
                  state.update({ activeCaucasusMountainGalleryImage: 7 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeCaucasusMountainGalleryImage } = state
                state.update({
                  activeCaucasusMountainGalleryImage: activeCaucasusMountainGalleryImage + 1
                })
                if (activeCaucasusMountainGalleryImage >= 7) {
                  state.update({ activeCaucasusMountainGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  },

  article: {
    description: { extend: $caucasusMountain },
    package: { extend: packageCaucasusMountain }
  }
}
