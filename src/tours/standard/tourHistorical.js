'use strict'

import { Tour } from '../../components'
import { galleryHistoricalTour } from '../../galleries/travelGalleries'
import { $historical } from '../../texts/travel'
import { packageHistorical } from '../../toursPackages'

export const tourHistorical = {
  extend: Tour,

  gallery: {
    class: {
      show: (element, state) => state.activeHistoricalPackage
        ? { transform: 'scale(.75) translateX(-50px)' } : {}
    },

    title: { text: 'historical tour' },
    gallery: {
      extend: galleryHistoricalTour,
      childExtend: {
        class: {
          show: (element, state) => state.activeHistoricalTourGalleryImage === parseInt(element.key)
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
                const { activeHistoricalTourGalleryImage } = state
                state.update({
                  activeHistoricalTourGalleryImage: activeHistoricalTourGalleryImage - 1
                })
                if (activeHistoricalTourGalleryImage <= 0) {
                  state.update({ activeHistoricalTourGalleryImage: 11 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeHistoricalTourGalleryImage } = state
                state.update({
                  activeHistoricalTourGalleryImage: activeHistoricalTourGalleryImage + 1
                })
                if (activeHistoricalTourGalleryImage >= 11) {
                  state.update({ activeHistoricalTourGalleryImage: 0 })
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
      show: (element, state) => state.activeHistoricalPackage
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
        show: (element, state) => state.activeHistoricalPackage
          ? { opacity: '1', transition: 'opacity .7s ease' }
          : { opacity: '0', transition: 'opacity 0s ease' }
      },
      on: {
        click: (event, element, state) => {
          state.update({ activeHistoricalPackage: false, activePackages: false })
        }
      }
    },

    description: {
      extend: $historical,
      class: {
        show: (element, state) => state.activeHistoricalPackage
          ? { display: 'none' } : {}
      }
    },

    package: {
      extend: packageHistorical,
      class: {
        show: (element, state) => state.activeHistoricalPackage
          ? { height: '100%', '> *': { opacity: '1', transform: 'scale(1)' } }
          : { height: '0', '> *': { opacity: '0', transform: 'scale(.97)' } }
      }
    },

    more: {
      on: {
        click: (event, element, state) => {
          state.update({ activeHistoricalPackage: true, activePackages: true })
        }
      },
      class: {
        show: (element, state) => state.activeHistoricalPackage
          ? { display: 'none' } : { display: 'block' }
      }
    }
  }
}
