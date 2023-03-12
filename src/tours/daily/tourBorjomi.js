'use strict'

import { Tour } from '../../components'
import { galleryBorjomi } from '../../galleries/travelGalleries'
import { $borjomi } from '../../texts/travel'
import { packageBorjomi } from '../../toursPackages'

export const tourBorjomi = {
  extend: Tour,

  article: {
    class: {
      show: (element, state) => state.activeBorjomiPackage
        ? {
          boxShadow: '30px 0 30px -5px rgba(0,0,0, .35)',
          background: 'rgba(15, 49, 61, .85)',
          transition: 'transform .7s ease, background 1s ease, box-shadow 1s ease',
          backdropFilter: 'blur(1px)',
          transform: 'scale(1.3) translate(50px, 50px)',
          '> *': { transform: 'scale(.8)' }
        }
        : {
          transform: 'scale(1) translate(0, 0)',
          transition: 'transform .7s ease, background 0s ease, box-shadow 0s ease'
        }
    },

    close: {
      class: {
        show: (element, state) => state.activeBorjomiPackage
          ? { opacity: '1', transition: 'opacity .7s ease' }
          : { opacity: '0', transition: 'opacity 0s ease' }
      },
      on: {
        click: (event, element, state) => {
          state.update({ activeBorjomiPackage: false, activePackages: false })
        }
      }
    },

    description: {
      extend: $borjomi,
      class: {
        show: (element, state) => state.activeBorjomiPackage
          ? { display: 'none' } : {}
      }
    },

    package: {
      extend: packageBorjomi,
      class: {
        show: (element, state) => state.activeBorjomiPackage
          ? { height: '100%', '> *': { opacity: '1', transform: 'scale(1)' } }
          : { height: '0', '> *': { opacity: '0', transform: 'scale(.97)' } }
      }
    },

    more: {
      on: {
        click: (event, element, state) => {
          state.update({ activeBorjomiPackage: true, activePackages: true })
        }
      },
      class: {
        show: (element, state) => state.activeBorjomiPackage
          ? { display: 'none' } : { display: 'block' }
      }
    }
  },

  gallery: {
    class: {
      show: (element, state) => state.activeBorjomiPackage
        ? { transform: 'scale(.75) translateX(50px)' } : {}
    },

    title: { text: 'borjomi' },
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
