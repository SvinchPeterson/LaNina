'use strict'

import { RoomTour } from '../../components'
import { galleryTbilisi } from '../../galleries/travelGalleries'
import { $tbilisi } from '../../texts/travel'
import { packageTbilisi } from '../../toursPackages'

export const tourTbilisi = {
  extend: RoomTour,
  // props: { padding: 'C2 - - -' },
  props: { id: 'tbilisi' },

  galleryContainer: {
    class: {
      show: (element, state) => state.activeTbilisiPackage
        ? { transform: 'scale(.75) translateX(-50px)' } : { transform: 'scale(1) translateX(0)'}
    },

    title: { text: 'tbilisi city tour' },

    gallery: {
      extend: galleryTbilisi,
      childExtend: {
        class: {
          show: (element, state) => state.activeTbilisiGalleryImage === parseInt(element.key)
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
                const { activeTbilisiGalleryImage } = state
                state.update({
                  activeTbilisiGalleryImage: activeTbilisiGalleryImage - 1
                })
                if (activeTbilisiGalleryImage <= 0) {
                  state.update({ activeTbilisiGalleryImage: 5 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeTbilisiGalleryImage } = state
                state.update({
                  activeTbilisiGalleryImage: activeTbilisiGalleryImage + 1
                })
                if (activeTbilisiGalleryImage >= 5) {
                  state.update({ activeTbilisiGalleryImage: 0 })
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
      show: (element, state) => state.activeTbilisiPackage
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
        show: (element, state) => state.activeTbilisiPackage
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
          state.update({ activeTbilisiPackage: false, activeDailyPackages: false })
        }
      }
    },

    description: {
      extend: $tbilisi,
      class: {
        show: (element, state) => state.activeTbilisiPackage
          ? { display: 'none' } : {display: 'block'}
      }
    },

    package: {
      extend: packageTbilisi,
      class: {
        show: (element, state) => state.activeTbilisiPackage
          ? { height: '100%', '> *': { opacity: '1', transform: 'scale(1)' } }
          : { height: '0', '> *': { opacity: '0', transform: 'scale(.97)' } }
      }
    },

    moreButton: {
      on: {
        click: (event, element, state) => {
          state.update({ activeTbilisiPackage: true, activeDailyPackages: true }),
          Link.on.click(event, element, state, ctx)
        }
      },
      more: {
        on: {
          click: (event, element, state) => {
            state.update({ activeTbilisiPackage: true, activeDailyPackages: true }),
            // Link.on.click(event, element, state, ctx)
          }
        },
        // props: { href: '#tbilisi'},
        class: {
          show: (element, state) => state.activeTbilisiPackage
            ? { display: 'none' } : { display: 'block' }
        }
      }
    }
  }
}
