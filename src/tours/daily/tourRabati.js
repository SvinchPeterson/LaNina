'use strict'

import { Tour } from '../../components'
import { galleryRabati } from '../../galleries/travelGalleries'
import { $rabat } from '../../texts/travel'
import { packageRabati } from '../../toursPackages'

export const tourRabati = {
  extend: Tour,

  gallery: {
    class: {
      show: (element, state) => state.activeRabatPackage
        ? { transform: 'scale(.75) translateX(-50px)' } : {}
    },

    title: { text: 'rabati castle' },
    gallery: {
      extend: galleryRabati,
      childExtend: {
        class: {
          show: (element, state) => state.activeRabatiGalleryImage === parseInt(element.key)
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
                const { activeRabatiGalleryImage } = state
                state.update({
                  activeRabatiGalleryImage: activeRabatiGalleryImage - 1
                })
                if (activeRabatiGalleryImage <= 0) {
                  state.update({ activeRabatiGalleryImage: 3 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeRabatiGalleryImage } = state
                state.update({
                  activeRabatiGalleryImage: activeRabatiGalleryImage + 1
                })
                if (activeRabatiGalleryImage >= 3) {
                  state.update({ activeRabatiGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  },

  article: {
    class: {
      show: (element, state) => state.activeRabatPackage
        ? {
          boxShadow: '-30px 0 30px -5px rgba(0,0,0, .35)',
          background: 'rgba(15, 49, 61, .85)',
          transition: 'transform .7s ease, background 1s ease, box-shadow 1s ease',
          backdropFilter: 'blur(1px)',
          transform: 'scale(1.3) translate(-50px, 50px)',
          '> *': { transform: 'scale(.8)' }
        }
        : {
          transform: 'scale(1) translate(0, 0)',
          transition: 'transform .7s ease, background 0s ease, box-shadow 0s ease'
        }
    },

    close: {
      class: {
        show: (element, state) => state.activeRabatPackage
          ? { opacity: '1', transition: 'opacity .7s ease' }
          : { opacity: '0', transition: 'opacity 0s ease' }
      },
      on: {
        click: (event, element, state) => {
          state.update({ activeRabatPackage: false, activePackages: false })
        }
      }
    },

    description: {
      extend: $rabat,
      class: {
        show: (element, state) => state.activeRabatPackage
          ? { display: 'none' } : {}
      }
    },

    package: {
      extend: packageRabati,
      class: {
        show: (element, state) => state.activeRabatPackage
          ? { height: '100%', '> *': { opacity: '1', transform: 'scale(1)' } }
          : { height: '0', '> *': { opacity: '0', transform: 'scale(.97)' } }
      }
    },

    more: {
      on: {
        click: (event, element, state) => {
          state.update({ activeRabatPackage: true, activePackages: true })
        }
      },
      class: {
        show: (element, state) => state.activeRabatPackage
          ? { display: 'none' } : { display: 'block' }
      }
    }
  }
}
