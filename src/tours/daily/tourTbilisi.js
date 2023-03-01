'use strict'

import { Tour } from '../../components'

import { galleryTbilisi } from '../../galleries/travelGalleries/placesGalleries'

import { textTbilisi } from '../../texts/travelTexts'

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

export const tourTbilisi = {
  extend: Tour,
  props,

  gallery: {
    title: { text: 'Tbilisi city tour' },
    gallery: {
      extend: galleryTbilisi,
      childExtend: {
        class: {
          show: (element, state) => state.activeTbilisiGalleryImage === parseInt(element.key)
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
                const { activeTbilisiGalleryImage } = state
                state.update({
                  activeTbilisiGalleryImage: activeTbilisiGalleryImage - 1
                })
                if (activeTbilisiGalleryImage <= 0) {
                  state.update({ activeTbilisiGalleryImage: 5 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeTbilisiGalleryImage } = state
                state.update({
                  activeTbilisiGalleryImage: activeTbilisiGalleryImage + 1
                })
                if (activeTbilisiGalleryImage >= 5) {
                  state.update({ activeTbilisiGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  },

  article: {
    articleContent: {
      paragraphs: {
        textTbilisi
      },
      tourPlaces: {
        title: {},
        list: {
          ...[
            { text: 'Mtatsminda Park by Train' },
            { text: 'Abanotubani' },
            { text: 'London bridge' },
            { text: 'Legvtakhevi Waterfall' },
            { text: 'I Love Tbilisi Statue' },
            { text: 'Leselidze souvenires streete' },
            { text: 'Meidan bazaar' },
            { text: 'Bridge of Peace' }
          ]
        }
      }
    }
  }
}
