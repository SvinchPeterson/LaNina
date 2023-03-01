'use strict'

import { Tour } from '../../components'

import { galleryMtsketa } from '../../galleries/travelGalleries'

import { textMtsketa } from '../../texts/travelTexts'

const props = {
  gallery: {
    title: {
      alignSelf: 'flex-end',
      margin: '- Y2 Y1 -'
    },
    gallery: {
      round: 'G2 0 0 G2',
      ':before': {
        top: '0',
        left: '0',
        background: 'linear-gradient(to left, rgba(15, 49, 61, 1) 1%, rgba(15, 49, 61, 0) 100%)'
      }
    },
    footer: {
      alignSelf: 'flex-end'
    }
  }
}

export const tourMtsketa = {
  extend: Tour,
  props,

  article: {
    articleContent: {
      paragraphs: {
        textMtsketa
      },
      tourPlaces: {
        title: {},
        list: {
          ...[
            { text: 'Svetitskhoveli Cathedral 11th' },
            { text: 'Svetitskhoveli Cathedral 11th' }
          ]
        }
      }
    }
  },

  gallery: {
    title: { text: 'MTSKETA' },
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
