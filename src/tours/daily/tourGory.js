'use strict'

import { Tour } from '../../components'

import { galleryGori } from '../../galleries/travelGalleries'

import { descriptionGori } from '../../texts/travelText/toursDescriptions'

export const tourGori = {
  extend: Tour,
  gallery: {
    title: { text: 'gori city . uplistsikhe cave' },
    gallery: {
      extend: galleryGori,
      childExtend: {
        class: {
          show: (element, state) => state.activeGoriGalleryImage === parseInt(element.key)
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
                const { activeGoriGalleryImage } = state
                state.update({
                  activeGoriGalleryImage: activeGoriGalleryImage - 1
                })
                if (activeGoriGalleryImage <= 0) {
                  state.update({ activeGoriGalleryImage: 4 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeGoriGalleryImage } = state
                state.update({
                  activeGoriGalleryImage: activeGoriGalleryImage + 1
                })
                if (activeGoriGalleryImage >= 4) {
                  state.update({ activeGoriGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  },

  description: { extend: descriptionGori }
}
