'use strict'

import { Tour } from '../../components'
import { galleryMtsketa } from '../../galleries/travelGalleries'
import { $mtsketa } from '../../texts/travel'
import { packageMtskheta } from '../../toursPackages'

export const tourMtsketa = {
  extend: Tour,

  article: {
    description: { extend: $mtsketa },
    package: { extend: packageMtskheta }
  },

  gallery: {
    title: { text: 'mtsketa' },
    gallery: {
      extend: galleryMtsketa,
      childExtend: {
        class: {
          show: (element, state) => state.activeMtsketaGalleryImage === parseInt(element.key)
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
                const { activeMtsketaGalleryImage } = state
                state.update({
                  activeMtsketaGalleryImage: activeMtsketaGalleryImage - 1
                })
                if (activeMtsketaGalleryImage <= 0) {
                  state.update({ activeMtsketaGalleryImage: 3 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeMtsketaGalleryImage } = state
                state.update({
                  activeMtsketaGalleryImage: activeMtsketaGalleryImage + 1
                })
                if (activeMtsketaGalleryImage >= 3) {
                  state.update({ activeMtsketaGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  }
}
