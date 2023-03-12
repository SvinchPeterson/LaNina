'use strict'

import { Tour } from '../../components'
import { galleryKutaisi } from '../../galleries/travelGalleries'
import { $kutaisi } from '../../texts/travel'
import { packageKutaisi } from '../../toursPackages'

export const tourKutaisi = {
  extend: Tour,

  article: {
    class: {
      show: (element, state) => state.activeKutaisiPackage
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
        show: (element, state) => state.activeKutaisiPackage
          ? { opacity: '1', transition: 'opacity .7s ease' }
          : { opacity: '0', transition: 'opacity 0s ease' }
      },
      on: {
        click: (event, element, state) => {
          state.update({ activeKutaisiPackage: false, activePackages: false })
        }
      }
    },

    description: {
      extend: $kutaisi,
      class: {
        show: (element, state) => state.activeKutaisiPackage
          ? { display: 'none' } : {}
      }
    },

    package: {
      extend: packageKutaisi,
      class: {
        show: (element, state) => state.activeKutaisiPackage
          ? { height: '100%', '> *': { opacity: '1', transform: 'scale(1)' } }
          : { height: '0', '> *': { opacity: '0', transform: 'scale(.97)' } }
      }
    },

    more: {
      on: {
        click: (event, element, state) => {
          state.update({ activeKutaisiPackage: true, activePackages: true })
        }
      },
      class: {
        show: (element, state) => state.activeKutaisiPackage
          ? { display: 'none' } : { display: 'block' }
      }
    }
  },

  gallery: {
    class: {
      show: (element, state) => state.activeKutaisiPackage
        ? { transform: 'scale(.75) translateX(50px)' } : {}
    },

    title: { text: 'kutaisi' },
    gallery: {
      extend: galleryKutaisi,
      childExtend: {
        class: {
          show: (element, state) => state.activeKutaisiGalleryImage === parseInt(element.key)
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
                const { activeKutaisiGalleryImage } = state
                state.update({
                  activeKutaisiGalleryImage: activeKutaisiGalleryImage - 1
                })
                if (activeKutaisiGalleryImage <= 0) {
                  state.update({ activeKutaisiGalleryImage: 4 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeKutaisiGalleryImage } = state
                state.update({
                  activeKutaisiGalleryImage: activeKutaisiGalleryImage + 1
                })
                if (activeKutaisiGalleryImage >= 4) {
                  state.update({ activeKutaisiGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  }
}
