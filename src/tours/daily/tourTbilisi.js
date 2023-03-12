'use strict'

import { Tour } from '../../components'
import { galleryTbilisi } from '../../galleries/travelGalleries'
import { $tbilisi } from '../../texts/travel'
import { packageTbilisi } from '../../toursPackages'

export const tourTbilisi = {
  extend: Tour,
  props: { padding: 'C2 - - -' },

  gallery: {
    class: {
      show: (element, state) => state.activeTbilisiPackage
        ? { transform: 'scale(.75) translateX(-50px)' } : {}
    },

    title: { text: 'tbilisi city tour' },

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
    class: {
      show: (element, state) => state.activeTbilisiPackage
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
        show: (element, state) => state.activeTbilisiPackage
          ? { opacity: '1', transition: 'opacity .7s ease' }
          : { opacity: '0', transition: 'opacity 0s ease' }
      },
      on: {
        click: (event, element, state) => {
          state.update({ activeTbilisiPackage: false, activePackages: false })
        }
      }
    },

    description: {
      extend: $tbilisi,
      class: {
        show: (element, state) => state.activeTbilisiPackage
          ? { display: 'none' } : {}
      }
    },

    package: {
      extend: packageTbilisi,
      class: {
        show: (element, state) => state.activeTbilisiPackage
          ? { height: '100%', '> *': { opacity: '1', transform: 'scale(1)' } }
          : { height: '0', '> *': { opacity: '0', transform: 'scale(.97)' } }
      }
    },

    more: {
      on: {
        click: (event, element, state) => {
          state.update({ activeTbilisiPackage: true, activePackages: true })
        }
      },
      class: {
        show: (element, state) => state.activeTbilisiPackage
          ? { display: 'none' } : { display: 'block' }
      }
    }
  }
}
