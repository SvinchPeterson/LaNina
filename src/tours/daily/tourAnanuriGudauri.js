'use strict'

import { Tour } from '../../components'
import { galleryKazbegi } from '../../galleries/travelGalleries'
import { $ananuri } from '../../texts/travel'
import { packageAnanuri } from '../../toursPackages'

export const tourAnanuriGudauri = {
  extend: Tour,

  article: {
    description: { extend: $ananuri },
    package: { extend: packageAnanuri }
  },

  gallery: {
    title: { text: 'ananuri . gudauri . kazbegi' },
    gallery: {
      extend: galleryKazbegi,
      childExtend: {
        class: {
          show: (element, state) => state.activeAnanuriGudauriGalleryImage === parseInt(element.key)
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
                const { activeAnanuriGudauriGalleryImage } = state
                state.update({
                  activeAnanuriGudauriGalleryImage: activeAnanuriGudauriGalleryImage - 1
                })
                if (activeAnanuriGudauriGalleryImage <= 0) {
                  state.update({ activeAnanuriGudauriGalleryImage: 4 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeAnanuriGudauriGalleryImage } = state
                state.update({
                  activeAnanuriGudauriGalleryImage: activeAnanuriGudauriGalleryImage + 1
                })
                if (activeAnanuriGudauriGalleryImage >= 4) {
                  state.update({ activeAnanuriGudauriGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  }
}
