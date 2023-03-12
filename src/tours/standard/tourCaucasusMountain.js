'use strict'

import { Tour } from '../../components'
import { galleryCaucasusMountainTour } from '../../galleries/travelGalleries'
import { $caucasusMountain } from '../../texts/travel'
import { packageCaucasusMountain } from '../../toursPackages'

export const tourCaucasusMountain = {
  extend: Tour,

  gallery: {
    class: {
      show: (element, state) => state.acitveCaucasusMountainPackage
        ? { transform: 'scale(.75) translateX(-50px)' } : {}
    },

    title: { text: 'caucasus mountain tour' },
    gallery: {
      extend: galleryCaucasusMountainTour,
      childExtend: {
        class: {
          show: (element, state) => state.activeCaucasusMountainGalleryImage === parseInt(element.key)
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
                const { activeCaucasusMountainGalleryImage } = state
                state.update({
                  activeCaucasusMountainGalleryImage: activeCaucasusMountainGalleryImage - 1
                })
                if (activeCaucasusMountainGalleryImage <= 0) {
                  state.update({ activeCaucasusMountainGalleryImage: 7 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeCaucasusMountainGalleryImage } = state
                state.update({
                  activeCaucasusMountainGalleryImage: activeCaucasusMountainGalleryImage + 1
                })
                if (activeCaucasusMountainGalleryImage >= 7) {
                  state.update({ activeCaucasusMountainGalleryImage: 0 })
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
      show: (element, state) => state.acitveCaucasusMountainPackage
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
        show: (element, state) => state.acitveCaucasusMountainPackage
          ? { opacity: '1', transition: 'opacity .7s ease' }
          : { opacity: '0', transition: 'opacity 0s ease' }
      },
      on: {
        click: (event, element, state) => {
          state.update({ acitveCaucasusMountainPackage: false, activePackages: false })
        }
      }
    },

    description: {
      extend: $caucasusMountain,
      class: {
        show: (element, state) => state.acitveCaucasusMountainPackage
          ? { display: 'none' } : {}
      }
    },

    package: {
      extend: packageCaucasusMountain,
      class: {
        show: (element, state) => state.acitveCaucasusMountainPackage
          ? { height: '100%', '> *': { opacity: '1', transform: 'scale(1)' } }
          : { height: '0', '> *': { opacity: '0', transform: 'scale(.97)' } }
      }
    },

    more: {
      on: {
        click: (event, element, state) => {
          state.update({ acitveCaucasusMountainPackage: true, activePackages: true })
        }
      },
      class: {
        show: (element, state) => state.acitveCaucasusMountainPackage
          ? { display: 'none' } : { display: 'block' }
      }
    }
  }
}
