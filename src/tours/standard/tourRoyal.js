'use strict'

import { Tour } from '../../components'
import { galleryRoyalTour } from '../../galleries/travelGalleries'
import { $royal } from '../../texts/travel'
import { packageRoyal } from '../../toursPackages'

export const tourRoyal = {
  extend: Tour,
  attr: { id: 'royal' },

  article: {
    class: {
      show: (element, state) => state.activeRoyalPackage
        ? {
          boxShadow: '30px 0 30px -5px rgba(0,0,0, .35)',
          background: 'rgba(15, 49, 61, .85)',
          transition: 'transform .7s ease, background 1s ease, box-shadow 1s ease',
          backdropFilter: 'blur(1px)',
          transform: 'scale(1.3) translate(50px, 50px)',
          height: `${450 / 16}em`
        }
        : {
          transform: 'scale(1) translate(0, 0)',
          transition: 'transform .7s ease, background 0s ease, box-shadow 0s ease',
          ':before': { opacity: '0' },
          ':after': { opacity: '0' }
        }
    },

    close: {
      class: {
        show: (element, state) => state.activeRoyalPackage
          ? {
            opacity: '.75',
            transform: 'rotate(90deg)',
            transition: 'opacity .35s ease, transform .75s ease'
          }
          : {
            opacity: '0',
            transform: 'rotate(0deg)',
            transition: 'opacity 0s ease'
          }
      },
      on: {
        click: (event, element, state) => {
          state.update({ activeRoyalPackage: false, activeStandardPackages: false })
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
          ? {
            height: '100%',
            '> *': { opacity: '1', transform: 'scale(1)' }
          }
          : { height: '0', '> *': { opacity: '0', transform: 'scale(.97)' } }
      }
    },

    more: {
      props: { href: '#royal' },
      on: {
        click: (event, element, state) => {
          state.update({ activeRoyalPackage: true, activeStandardPackages: true })
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
