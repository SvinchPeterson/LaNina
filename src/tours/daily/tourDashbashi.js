'use strict'

import { Tour } from '../../components'

import { galleryMartvili } from '../../galleries/travelGalleries'

import { descriptionDashbashi } from '../../texts/travelTexts/toursDescriptions'

const props = {
  gallery: {
    title: { margin: '- - Y1 Y2' },
    gallery: {
      round: '0 G2 G2 0',
      ':before': {
        top: '0',
        left: '0',
        background: 'linear-gradient(to right, rgba(15, 49, 61, 1) 1%, rgba(15, 49, 61, 0) 100%)'
      }
    }
  }
}

export const tourDashbashi = {
  extend: Tour,
  props,

  gallery: {
    title: { text: 'DASHBASHI CANYON' },
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

  description: { extend: descriptionDashbashi }
}
