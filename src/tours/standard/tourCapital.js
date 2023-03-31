'use strict'

import { Tour } from '../../components'
import { galleryCapitalTour } from '../../galleries/travelGalleries'
import { $capital } from '../../texts/travel'
import { packageCapital } from '../../toursPackages'

export const tourCapital = {
  extend: Tour,
  attr: { id: 'capital' },
  props: { padding: 'C2 - - -' },

  gallery: {
    class: {
      show: (element, state) => state.activeCapitalPackage
        ? { transform: 'scale(.75) translateX(-50px)' } : { transform: 'scale(1) translateX(0)' }
    },

    title: { text: 'capital tour' },
    gallery: {
      extend: galleryCapitalTour,
      childExtend: {
        class: {
          show: (element, state) => state.activeCapitalTourdGalleryImage === parseInt(element.key)
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
                const { activeCapitalTourdGalleryImage } = state
                state.update({
                  activeCapitalTourdGalleryImage: activeCapitalTourdGalleryImage - 1
                })
                if (activeCapitalTourdGalleryImage <= 0) {
                  state.update({ activeCapitalTourdGalleryImage: 8 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeCapitalTourdGalleryImage } = state
                state.update({
                  activeCapitalTourdGalleryImage: activeCapitalTourdGalleryImage + 1
                })
                if (activeCapitalTourdGalleryImage >= 8) {
                  state.update({ activeCapitalTourdGalleryImage: 0 })
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
      show: (element, state) => state.activeCapitalPackage
        ? {
          boxShadow: '-30px 0 30px -5px rgba(0,0,0, .35)',
          background: 'rgba(0, 47, 57, .85)',
          transition: 'transform .7s ease, background 1s ease, box-shadow 1s ease',
          backdropFilter: 'blur(1px)',
          transform: 'scale(1.3) translate(-50px, 50px)',
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
        show: (element, state) => state.activeCapitalPackage
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
          state.update({ activeCapitalPackage: false, activeStandardPackages: false })
        }
      }
    },

    description: {
      extend: $capital,
      class: {
        show: (element, state) => state.activeCapitalPackage
          ? { display: 'none' } : { display: 'block'}
      }
    },

    package: {
      extend: packageCapital,
      class: {
        show: (element, state) => state.activeCapitalPackage
          ? {
            height: '100%',
            '> *': { opacity: '1', transform: 'scale(1)' }
          }
          : { height: '0', '> *': { opacity: '0', transform: 'scale(.97)' } }
      }
    },

    more: {
      props: { href: '#capital' },
      on: {
        click: (event, element, state) => {
          state.update({ activeCapitalPackage: true, activeStandardPackages: true })
        }
      },
      class: {
        show: (element, state) => state.activeCapitalPackage
          ? { display: 'none' } : { display: 'block' }
      }
    }
  }
}
