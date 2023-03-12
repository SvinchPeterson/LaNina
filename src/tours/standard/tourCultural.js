'use strict'

import { Tour } from '../../components'
import { galleryCulturalTour } from '../../galleries/travelGalleries'
import { $cultural } from '../../texts/travel'
import { packageCultural } from '../../toursPackages'

export const tourCultural = {
  extend: Tour,

  article: {
    class: {
      show: (element, state) => state.activeCulturalPackage
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
        show: (element, state) => state.activeCulturalPackage
          ? { opacity: '1', transition: 'opacity .7s ease' }
          : { opacity: '0', transition: 'opacity 0s ease' }
      },
      on: {
        click: (event, element, state) => {
          state.update({ activeCulturalPackage: false, activePackages: false })
        }
      }
    },

    description: {
      extend: $cultural,
      class: {
        show: (element, state) => state.activeCulturalPackage
          ? { display: 'none' } : {}
      }
    },

    package: {
      extend: packageCultural,
      class: {
        show: (element, state) => state.activeCulturalPackage
          ? { height: '100%', '> *': { opacity: '1', transform: 'scale(1)' } }
          : { height: '0', '> *': { opacity: '0', transform: 'scale(.97)' } }
      }
    },

    more: {
      on: {
        click: (event, element, state) => {
          state.update({ activeCulturalPackage: true, activePackages: true })
        }
      },
      class: {
        show: (element, state) => state.activeCulturalPackage
          ? { display: 'none' } : { display: 'block' }
      }
    }
  },

  gallery: {
    class: {
      show: (element, state) => state.activeCulturalPackage
        ? { transform: 'scale(.75) translateX(50px)' } : {}
    },

    title: { text: 'cultural tour' },
    gallery: {
      extend: galleryCulturalTour,
      childExtend: {
        class: {
          show: (element, state) => state.activeCulturalTourGalleryImage === parseInt(element.key)
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
                const { activeCulturalTourGalleryImage } = state
                state.update({
                  activeCulturalTourGalleryImage: activeCulturalTourGalleryImage - 1
                })
                if (activeCulturalTourGalleryImage <= 0) {
                  state.update({ activeCulturalTourGalleryImage: 8 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeCulturalTourGalleryImage } = state
                state.update({
                  activeCulturalTourGalleryImage: activeCulturalTourGalleryImage + 1
                })
                if (activeCulturalTourGalleryImage >= 8) {
                  state.update({ activeCulturalTourGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  }

}
