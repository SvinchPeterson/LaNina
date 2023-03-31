'use strict'

import { Tour } from '../../components'
import { galleryGori } from '../../galleries/travelGalleries'
import { $gori } from '../../texts/travel'
import { packageGori } from '../../toursPackages'

export const tourGori = {
  extend: Tour,
  attr: { id: 'gori' },
  gallery: {
    class: {
      show: (element, state) => state.activeGoriPackage
        ? { transform: 'scale(.75) translateX(-50px)' } : { transform: 'scale(0) translateX(0)' }
    },

    title: { text: 'gori city . uplistsikhe cave' },
    gallery: {
      extend: galleryGori,
      childExtend: {
        class: {
          show: (element, state) => state.activeGoriGalleryImage === parseInt(element.key)
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
                const { activeGoriGalleryImage } = state
                state.update({
                  activeGoriGalleryImage: activeGoriGalleryImage - 1
                })
                if (activeGoriGalleryImage <= 0) {
                  state.update({ activeGoriGalleryImage: 4 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeGoriGalleryImage } = state
                state.update({
                  activeGoriGalleryImage: activeGoriGalleryImage + 1
                })
                if (activeGoriGalleryImage >= 4) {
                  state.update({ activeGoriGalleryImage: 0 })
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
      show: (element, state) => state.activeGoriPackage
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
        show: (element, state) => state.activeGoriPackage
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
          state.update({ activeGoriPackage: false, activeDailyPackages: false })
        }
      }
    },

    description: {
      extend: $gori,
      class: {
        show: (element, state) => state.activeGoriPackage
          ? { display: 'none' } : { display: 'block' }
      }
    },

    package: {
      extend: packageGori,
      class: {
        show: (element, state) => state.activeGoriPackage
          ? {
            height: '100%',
            '> *': { opacity: '1', transform: 'scale(1)' }
          }
          : { height: '0', '> *': { opacity: '0', transform: 'scale(.97)' } }
      }
    },

    more: {
      props: { href: '#gori' },
      on: {
        click: (event, element, state) => {
          state.update({ activeGoriPackage: true, activeDailyPackages: true })
        }
      },
      class: {
        show: (element, state) => state.activeGoriPackage
          ? { display: 'none' } : { display: 'block' }
      }
    }
  }
}
