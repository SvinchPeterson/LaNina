'use strict'

import { Tour } from '../../components'
import { galleryKakheti } from '../../galleries/travelGalleries'
import { $kakheti } from '../../texts/travel'
import { packageKakheti } from '../../toursPackages'

export const tourKakheti = {
  extend: Tour,
  attr: { id: 'kakheti' },

  gallery: {
    class: {
      show: (element, state) => state.activeKakhetiPackage
        ? { transform: 'scale(.75) translateX(-50px)' } : {}
    },

    title: { text: 'KAkheti' },
    gallery: {
      extend: galleryKakheti,
      childExtend: {
        class: {
          show: (element, state) => state.activeKakhetiGalleryImage === parseInt(element.key)
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
                const { activeKakhetiGalleryImage } = state
                state.update({
                  activeKakhetiGalleryImage: activeKakhetiGalleryImage - 1
                })
                if (activeKakhetiGalleryImage <= 0) {
                  state.update({ activeKakhetiGalleryImage: 4 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeKakhetiGalleryImage } = state
                state.update({
                  activeKakhetiGalleryImage: activeKakhetiGalleryImage + 1
                })
                if (activeKakhetiGalleryImage >= 4) {
                  state.update({ activeKakhetiGalleryImage: 0 })
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
      show: (element, state) => state.activeKakhetiPackage
        ? {
          boxShadow: '-30px 0 30px -5px rgba(0,0,0, .35)',
          background: 'rgba(15, 49, 61, .85)',
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
        show: (element, state) => state.activeKakhetiPackage
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
          state.update({ activeKakhetiPackage: false, activeDailyPackages: false })
        }
      }
    },

    description: {
      extend: $kakheti,
      class: {
        show: (element, state) => state.activeKakhetiPackage
          ? { display: 'none' } : {}
      }
    },

    package: {
      extend: packageKakheti,
      class: {
        show: (element, state) => state.activeKakhetiPackage
          ? {
            height: '100%',
            '> *': { opacity: '1', transform: 'scale(1)' }
          }
          : { height: '0', '> *': { opacity: '0', transform: 'scale(.97)' } }
      }
    },

    more: {
      props: { href: '#kakheti' },
      on: {
        click: (event, element, state) => {
          state.update({ activeKakhetiPackage: true, activeDailyPackages: true })
        }
      },

      class: {
        show: (element, state) => state.activeKakhetiPackage
          ? { display: 'none' } : { display: 'block' }
      }
    }
  }
}
