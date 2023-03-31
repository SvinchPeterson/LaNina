'use strict'

import { TourContainer, Tour } from '../components'
import { galleryCaucasusTour } from '../galleries/travelGalleries'
import { $caucasus } from '../texts/travel'
import { packageCaucasus } from '../toursPackages'
import { commonTourProps } from './commonProps'

const tourCaucasus = {
  extend: Tour,
  class: {
    show: (element, state) => state.activeCaucasus
      ? { opacity: '1', transition: 'opacity 1.5s ease-in-out' }
      : { opacity: '0', transition: 'opacity .35s ease-in-out' }
  },

  gallery: {
    class: {
      show: (element, state) => state.activeCaucasusPackage
        ? { transform: 'scale(.75) translateX(-50px)' } : { transform: 'scale(0) translateX(0)' }
    },

    gallery: {
      extend: galleryCaucasusTour,
      childExtend: {
        class: {
          show: (element, state) => state.activeCaucasusGalleryImage === parseInt(element.key)
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
                const { activeCaucasusGalleryImage } = state
                state.update({
                  activeCaucasusGalleryImage: activeCaucasusGalleryImage - 1
                })
                if (activeCaucasusGalleryImage <= 0) {
                  state.update({ activeCaucasusGalleryImage: 27 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeCaucasusGalleryImage } = state
                state.update({
                  activeCaucasusGalleryImage: activeCaucasusGalleryImage + 1
                })
                if (activeCaucasusGalleryImage >= 27) {
                  state.update({ activeCaucasusGalleryImage: 0 })
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
      show: (element, state) => state.activeCaucasusPackage
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
        show: (element, state) => state.activeCaucasusPackage
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
          state.update({ activeCaucasusPackage: false, activePackages: false })
        }
      }
    },

    description: {
      extend: $caucasus,
      class: {
        show: (element, state) => state.activeCaucasusPackage
          ? { display: 'none' } : { display: 'block' }
      }
    },
    package: {
      extend: packageCaucasus,
      class: {
        show: (element, state) => state.activeCaucasusPackage
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
          state.update({ activeCaucasusPackage: true, activePackages: true })
        }
      },
      class: {
        show: (element, state) => state.activeCaucasusPackage
          ? { display: 'none' } : { display: 'block' }
      }
    }
  }
}

export const caucasus = {
  extend: TourContainer,
  props: commonTourProps,
  class: {
    show: (element, state) => state.activeCaucasus
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

  tourCaucasus
}
