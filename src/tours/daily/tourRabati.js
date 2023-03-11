'use strict'

import { Tour } from '../../components'
import { galleryRabati } from '../../galleries/travelGalleries'
import { $rabat } from '../../texts/travel'
import { packageRabati } from '../../toursPackages'

export const tourRabati = {
  extend: Tour,
  gallery: {
    title: { text: 'rabati castle' },
    gallery: {
      extend: galleryRabati,
      childExtend: {
        class: {
          show: (element, state) => state.activeRabatiGalleryImage === parseInt(element.key)
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
                const { activeRabatiGalleryImage } = state
                state.update({
                  activeRabatiGalleryImage: activeRabatiGalleryImage - 1
                })
                if (activeRabatiGalleryImage <= 0) {
                  state.update({ activeRabatiGalleryImage: 3 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeRabatiGalleryImage } = state
                state.update({
                  activeRabatiGalleryImage: activeRabatiGalleryImage + 1
                })
                if (activeRabatiGalleryImage >= 3) {
                  state.update({ activeRabatiGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  },

  article: {
    description: { extend: $rabat },
    package: { extend: packageRabati }
  }
}
