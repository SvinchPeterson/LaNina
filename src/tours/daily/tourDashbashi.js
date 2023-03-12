'use strict'

import { Tour } from '../../components'
import { galleryMartvili } from '../../galleries/travelGalleries'
import { $dashbashi } from '../../texts/travel'
import { packageDashbashi } from '../../toursPackages'

export const tourDashbashi = {
  extend: Tour,

  gallery: {
    class: {
      show: (element, state) => state.activeDashbashPackage
        ? { transform: 'scale(.75) translateX(-50px)' } : {}
    },

    title: { text: 'dashbashi canyon' },
    gallery: {
      extend: galleryMartvili,
      childExtend: {
        class: {
          show: (element, state) => state.activeDashbashiGalleryImage === parseInt(element.key)
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
                const { activeDashbashiGalleryImage } = state
                state.update({
                  activeDashbashiGalleryImage: activeDashbashiGalleryImage - 1
                })
                if (activeDashbashiGalleryImage <= 0) {
                  state.update({ activeDashbashiGalleryImage: 3 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeDashbashiGalleryImage } = state
                state.update({
                  activeDashbashiGalleryImage: activeDashbashiGalleryImage + 1
                })
                if (activeDashbashiGalleryImage >= 3) {
                  state.update({ activeDashbashiGalleryImage: 0 })
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
      show: (element, state) => state.activeDashbashPackage
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
        show: (element, state) => state.activeDashbashPackage
          ? { opacity: '1', transition: 'opacity .7s ease' }
          : { opacity: '0', transition: 'opacity 0s ease' }
      },
      on: {
        click: (event, element, state) => {
          state.update({ activeDashbashPackage: false, activePackages: false })
        }
      }
    },

    description: {
      extend: $dashbashi,
      class: {
        show: (element, state) => state.activeDashbashPackage
          ? { display: 'none' } : {}
      }
    },

    package: {
      extend: packageDashbashi,
      class: {
        show: (element, state) => state.activeDashbashPackage
          ? { height: '100%', '> *': { opacity: '1', transform: 'scale(1)' } }
          : { height: '0', '> *': { opacity: '0', transform: 'scale(.97)' } }
      }
    },

    more: {
      on: {
        click: (event, element, state) => {
          state.update({ activeDashbashPackage: true, activePackages: true })
        }
      },
      class: {
        show: (element, state) => state.activeDashbashPackage
          ? { display: 'none' } : { display: 'block' }
      }
    }
  }
}
