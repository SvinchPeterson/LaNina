'use strict'

import { Tour } from '../../components'
import { galleryMtsketa } from '../../galleries/travelGalleries'
import { $mtsketa } from '../../texts/travel'
import { packageMtskheta } from '../../toursPackages'

export const tourMtsketa = {
  extend: Tour,

  article: {
    class: {
      show: (element, state) => state.activeMtsketaPackage
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
        show: (element, state) => state.activeMtsketaPackage
          ? { opacity: '1', transition: 'opacity .7s ease' }
          : { opacity: '0', transition: 'opacity 0s ease' }
      },
      on: {
        click: (event, element, state) => {
          state.update({ activeMtsketaPackage: false, activePackages: false })
        }
      }
    },

    description: {
      extend: $mtsketa,
      class: {
        show: (element, state) => state.activeMtsketaPackage
          ? { display: 'none' } : {}
      }
    },

    package: {
      extend: packageMtskheta,
      class: {
        show: (element, state) => state.activeMtsketaPackage
          ? { height: '100%', '> *': { opacity: '1', transform: 'scale(1)' } }
          : { height: '0', '> *': { opacity: '0', transform: 'scale(.97)' } }
      }
    },

    more: {
      on: {
        click: (event, element, state) => {
          state.update({ activeMtsketaPackage: true, activePackages: true })
        }
      },
      class: {
        show: (element, state) => state.activeMtsketaPackage
          ? { display: 'none' } : { display: 'block' }
      }
    }
  },

  gallery: {
    class: {
      show: (element, state) => state.activeMtsketaPackage
        ? { transform: 'scale(.75) translateX(50px)' } : {}
    },

    title: { text: 'mtsketa' },
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
