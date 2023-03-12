'use strict'

import { Tour } from '../../components'
import { galleryRoyalTour } from '../../galleries/travelGalleries'
import { $royal } from '../../texts/travel'
import { packageRoyal } from '../../toursPackages'

export const tourRoyal = {
  extend: Tour,

  article: {
    class: {
      show: (element, state) => state.activeRoyalPackage
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
        show: (element, state) => state.activeRoyalPackage
          ? { opacity: '1', transition: 'opacity .7s ease' }
          : { opacity: '0', transition: 'opacity 0s ease' }
      },
      on: {
        click: (event, element, state) => {
          state.update({ activeRoyalPackage: false, activePackages: false })
        }
      }
    },

    description: {
      extend: $royal,
      class: {
        show: (element, state) => state.activeRoyalPackage
          ? { display: 'none' } : {}
      }
    },

    package: {
      extend: packageRoyal,
      class: {
        show: (element, state) => state.activeRoyalPackage
          ? { height: '100%', '> *': { opacity: '1', transform: 'scale(1)' } }
          : { height: '0', '> *': { opacity: '0', transform: 'scale(.97)' } }
      }
    },

    more: {
      on: {
        click: (event, element, state) => {
          state.update({ activeRoyalPackage: true, activePackages: true })
        }
      },
      class: {
        show: (element, state) => state.activeRoyalPackage
          ? { display: 'none' } : { display: 'block' }
      }
    }
  },

  gallery: {
    class: {
      show: (element, state) => state.activeRoyalPackage
        ? { transform: 'scale(.75) translateX(50px)' } : {}
    },

    title: { text: 'royal tour' },
    gallery: {
      extend: galleryRoyalTour,
      childExtend: {
        class: {
          show: (element, state) => state.activeRoyalTourGalleryImage === parseInt(element.key)
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
                const { activeRoyalTourGalleryImage } = state
                state.update({
                  activeRoyalTourGalleryImage: activeRoyalTourGalleryImage - 1
                })
                if (activeRoyalTourGalleryImage <= 0) {
                  state.update({ activeRoyalTourGalleryImage: 13 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeRoyalTourGalleryImage } = state
                state.update({
                  activeRoyalTourGalleryImage: activeRoyalTourGalleryImage + 1
                })
                if (activeRoyalTourGalleryImage >= 13) {
                  state.update({ activeRoyalTourGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  }
}
