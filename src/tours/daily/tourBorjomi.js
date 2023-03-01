'use strict'

import { Tour } from '../../components'

import { galleryBorjomi } from '../../galleries/travelGalleries'

import { textBorjomi } from '../../texts/travelTexts'

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
        background: 'linear-gradient(to left, rgba(15, 49, 61, 1) 0%, rgba(15, 49, 61, 0) 100%)'
      }
    },
    footer: {
      alignSelf: 'flex-end'
    }
  }
}

export const tourBorjomi = {
  extend: Tour,
  props,

  article: {
    articleContent: {
      paragraphs: {
        textBorjomi
      },
      tourPlaces: {
        title: {},
        list: {
          ...[
            { text: 'Borjomi Central Park' },
            { text: 'Mineral Water tasting' },
            { text: 'Cable Car' }
          ]
        }
      }
    }
  },

  gallery: {
    title: { text: 'BORJOMI' },
    gallery: {
      extend: galleryBorjomi,
      childExtend: {
        class: {
          show: (element, state) => state.activeBorjomiGalleryImage === parseInt(element.key)
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
                const { activeBorjomiGalleryImage } = state
                state.update({
                  activeBorjomiGalleryImage: activeBorjomiGalleryImage - 1
                })
                if (activeBorjomiGalleryImage <= 0) {
                  state.update({ activeBorjomiGalleryImage: 3 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeBorjomiGalleryImage } = state
                state.update({
                  activeBorjomiGalleryImage: activeBorjomiGalleryImage + 1
                })
                if (activeBorjomiGalleryImage >= 3) {
                  state.update({ activeBorjomiGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  }
}
