'use strict'

import { Tour } from '../../components'
import { galleryKazbegi } from '../../galleries/travelGalleries'
import { $ananuri } from '../../texts/travel'
import { packageAnanuri } from '../../toursPackages'

export const tourAnanuriGudauri = {
  extend: Tour,

  article: {
    class: {
      show: (element, state) => state.activeAnanuriPackage
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
        show: (element, state) => state.activeAnanuriPackage
          ? { opacity: '1', transition: 'opacity .7s ease' }
          : { opacity: '0', transition: 'opacity 0s ease' }
      },
      on: {
        click: (event, element, state) => {
          state.update({ activeAnanuriPackage: false, activePackages: false })
        }
      }
    },

    description: {
      extend: $ananuri,
      class: {
        show: (element, state) => state.activeAnanuriPackage
          ? { display: 'none' } : {}
      }
    },

    package: {
      extend: packageAnanuri,
      class: {
        show: (element, state) => state.activeAnanuriPackage
          ? { height: '100%', '> *': { opacity: '1', transform: 'scale(1)' } }
          : { height: '0', '> *': { opacity: '0', transform: 'scale(.97)' } }
      }
    },

    more: {
      on: {
        click: (event, element, state) => {
          state.update({ activeAnanuriPackage: true, activePackages: true })
        }
      },
      class: {
        show: (element, state) => state.activeAnanuriPackage
          ? { display: 'none' } : { display: 'block' }
      }
    }
  },

  gallery: {
    class: {
      show: (element, state) => state.activeAnanuriPackage
        ? { transform: 'scale(.75) translateX(50px)' } : {}
    },

    title: { text: 'ananuri . gudauri . kazbegi' },
    gallery: {
      extend: galleryKazbegi,
      childExtend: {
        class: {
          show: (element, state) => state.activeAnanuriGudauriGalleryImage === parseInt(element.key)
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
                const { activeAnanuriGudauriGalleryImage } = state
                state.update({
                  activeAnanuriGudauriGalleryImage: activeAnanuriGudauriGalleryImage - 1
                })
                if (activeAnanuriGudauriGalleryImage <= 0) {
                  state.update({ activeAnanuriGudauriGalleryImage: 4 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeAnanuriGudauriGalleryImage } = state
                state.update({
                  activeAnanuriGudauriGalleryImage: activeAnanuriGudauriGalleryImage + 1
                })
                if (activeAnanuriGudauriGalleryImage >= 4) {
                  state.update({ activeAnanuriGudauriGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  }
}
