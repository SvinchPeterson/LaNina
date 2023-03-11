'use strict'

import { Tour } from '../../components'
import { galleryKutaisi } from '../../galleries/travelGalleries'
import { $kutaisi } from '../../texts/travel'
import { packageKutaisi } from '../../toursPackages'

export const tourKutaisi = {
  extend: Tour,

  article: {
    description: { extend: $kutaisi },
    package: { extend: packageKutaisi }
  },

  gallery: {
    title: { text: 'kutaisi' },
    gallery: {
      extend: galleryKutaisi,
      childExtend: {
        class: {
          show: (element, state) => state.activeKutaisiGalleryImage === parseInt(element.key)
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
                const { activeKutaisiGalleryImage } = state
                state.update({
                  activeKutaisiGalleryImage: activeKutaisiGalleryImage - 1
                })
                if (activeKutaisiGalleryImage <= 0) {
                  state.update({ activeKutaisiGalleryImage: 4 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeKutaisiGalleryImage } = state
                state.update({
                  activeKutaisiGalleryImage: activeKutaisiGalleryImage + 1
                })
                if (activeKutaisiGalleryImage >= 4) {
                  state.update({ activeKutaisiGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  }
}
