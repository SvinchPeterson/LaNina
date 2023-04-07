'use strict'

import { Tour } from '../../components'
import { galleryMartvili } from '../../galleries/travelGalleries'
import { $dashbashi } from '../../texts/travel'
import { packageDashbashi } from '../../toursPackages'

export const tourDashbashi = {
  extend: Tour,
  attr: { id: 'dashbash' },

  galleryContainer: {
    class: {
      show: (element, state) => state.activeDashbashPackage
        ? { transform: 'scale(.75) translateX(-50px)' } : {  transform: 'scale(1) translateX(0)' }
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
        show: (element, state) => state.activeDashbashPackage
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
          state.update({ activeDashbashPackage: false, activeDailyPackages: false })
        }
      }
    },

    description: {
      extend: $dashbashi,
      class: {
        show: (element, state) => state.activeDashbashPackage
          ? { display: 'none' } : {display: 'block'}
      }
    },

    package: {
      extend: packageDashbashi,
      class: {
        show: (element, state) => state.activeDashbashPackage
          ? {
            height: '100%',
            '> *': { opacity: '1', transform: 'scale(1)' }
          }
          : { height: '0', '> *': { opacity: '0', transform: 'scale(.97)' } }
      }
    },

    more: {
      props: { href: '#dashbash' },
      on: {
        click: (event, element, state) => {
          state.update({ activeDashbashPackage: true, activeDailyPackages: true })
        }
      },
      class: {
        show: (element, state) => state.activeDashbashPackage
          ? { display: 'none' } : { display: 'block' }
      }
    }
  }
}
