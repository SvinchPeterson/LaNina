'use strict'

import { Tour } from '../../components'
import { galleryMartvili } from '../../galleries/travelGalleries'
import { $dashbashi } from '../../texts/travel'
import { packageDashbashi } from '../../toursPackages'

export const tourDashbashi = {
  extend: Tour,
  gallery: {
    title: { text: 'dashbashi canyon' },
    gallery: {
      extend: galleryMartvili,
      childExtend: {
        class: {
          show: (element, state) => state.activeDashbashiGalleryImage === parseInt(element.key)
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
                const { activeDashbashiGalleryImage } = state
                state.update({
                  activeDashbashiGalleryImage: activeDashbashiGalleryImage - 1
                })
                if (activeDashbashiGalleryImage <= 0) {
                  state.update({ activeDashbashiGalleryImage: 3 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeDashbashiGalleryImage } = state
                state.update({
                  activeDashbashiGalleryImage: activeDashbashiGalleryImage + 1
                })
                if (activeDashbashiGalleryImage >= 3) {
                  state.update({ activeDashbashiGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  },

  article: {
    description: { extend: $dashbashi },
    package: { extend: packageDashbashi }
  }
}
