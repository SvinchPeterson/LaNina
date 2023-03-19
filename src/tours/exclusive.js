'use strict'

import { TourContainer, Tour } from '../components'
import { galleryExclusiveTour } from '../galleries/travelGalleries'
import { $exclusive } from '../texts/travel'
import { packageExclusive } from '../toursPackages'
import { commonTourProps } from './commonProps'

const tourExclusive = {
  extend: Tour,

  class: {
    show: (element, state) => state.activeExclusive
      ? { opacity: '1', transition: 'opacity 1.5s ease-in-out' }
      : { opacity: '0', transition: 'opacity .35s ease-in-out' }
  },

  gallery: {
    class: {
      show: (element, state) => state.activeExclusivePackage
        ? { transform: 'scale(.75) translateX(-50px)' } : {}
    },

    gallery: {
      extend: galleryExclusiveTour,
      childExtend: {
        class: {
          show: (element, state) => state.activeExclusiveGalleryImage === parseInt(element.key)
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
                const { activeExclusiveGalleryImage } = state
                state.update({
                  activeExclusiveGalleryImage: activeExclusiveGalleryImage - 1
                })
                if (activeExclusiveGalleryImage <= 0) {
                  state.update({ activeExclusiveGalleryImage: 8 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeExclusiveGalleryImage } = state
                state.update({
                  activeExclusiveGalleryImage: activeExclusiveGalleryImage + 1
                })
                if (activeExclusiveGalleryImage >= 8) {
                  state.update({ activeExclusiveGalleryImage: 0 })
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
      show: (element, state) => state.activeExclusivePackage
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
        show: (element, state) => state.activeExclusivePackage
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
          state.update({ activeExclusivePackage: false, activePackages: false })
        }
      }
    },

    description: {
      extend: $exclusive,
      class: {
        show: (element, state) => state.activeExclusivePackage
          ? { display: 'none' } : {}
      }
    },

    package: {
      extend: packageExclusive,
      class: {
        show: (element, state) => state.activeExclusivePackage
          ? {
            height: '100%',
            '> *': { opacity: '1', transform: 'scale(1)' }
          }
          : { height: '0', '> *': { opacity: '0', transform: 'scale(.97)' } }
      }
    },

    more: {
      on: {
        click: (event, element, state) => {
          state.update({ activeExclusivePackage: true, activePackages: true })
        }
      },
      class: {
        show: (element, state) => state.activeExclusivePackage
          ? { display: 'none' } : { display: 'block' }
      }
    }
  }
}

export const exclusive = {
  extend: TourContainer,
  props: commonTourProps,

  class: {
    show: (element, state) => state.activeExclusive
      ? {
        opacity: '1',
        transform: 'translateY(0)',
        transition: 'opacity .65s ease-in-out, transform .65s ease-in-out'

      }
      : {
        opacity: '0',
        pointerEvents: 'none',
        transform: 'translateY(-30px)',
        transition: 'opacity .35s ease-in-out, transform .35s ease-in-out'
      }
  },

  tourExclusive
}
