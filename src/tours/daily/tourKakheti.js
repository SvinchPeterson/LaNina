'use strict'

import { Tour } from '../../components'
import { galleryKakheti } from '../../galleries/travelGalleries'
import { $kakheti } from '../../texts/travel'
import { packageKakheti } from '../../toursPackages'

export const tourKakheti = {
  extend: Tour,
  gallery: {
    title: { text: 'KAkheti' },
    gallery: {
      extend: galleryKakheti,
      childExtend: {
        class: {
          show: (element, state) => state.activeKakhetiGalleryImage === parseInt(element.key)
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
                const { activeKakhetiGalleryImage } = state
                state.update({
                  activeKakhetiGalleryImage: activeKakhetiGalleryImage - 1
                })
                if (activeKakhetiGalleryImage <= 0) {
                  state.update({ activeKakhetiGalleryImage: 4 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeKakhetiGalleryImage } = state
                state.update({
                  activeKakhetiGalleryImage: activeKakhetiGalleryImage + 1
                })
                if (activeKakhetiGalleryImage >= 4) {
                  state.update({ activeKakhetiGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  },
  article: {
    description: { extend: $kakheti },
    package: { extend: packageKakheti }
  }
}
