'use strict'

import { TourContainer, Tour } from '../components'
import { galleryAdventureTour } from '../galleries/travelGalleries'
import { $adventure } from '../texts/travel'
import { packageAdventure } from '../toursPackages'

import { commonTourProps } from './commonProps'

const tourAdventure = {
  extend: Tour,
  class: {
    show: (element, state) => state.activeAdventure
      ? { opacity: '1', transition: 'opacity 1.5s ease-in-out' }
      : { opacity: '0', transition: 'opacity .35s ease-in-out' }
  },

  gallery: {
    gallery: {
      extend: galleryAdventureTour,
      childExtend: {
        class: {
          show: (element, state) => state.activeAdventureGalleryImage === parseInt(element.key)
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
                const { activeAdventureGalleryImage } = state
                state.update({
                  activeAdventureGalleryImage: activeAdventureGalleryImage - 1
                })
                if (activeAdventureGalleryImage <= 0) {
                  state.update({ activeAdventureGalleryImage: 3 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeAdventureGalleryImage } = state
                state.update({
                  activeAdventureGalleryImage: activeAdventureGalleryImage + 1
                })
                if (activeAdventureGalleryImage >= 3) {
                  state.update({ activeAdventureGalleryImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  },

  article: {
    description: { extend: $adventure },
    package: { extend: packageAdventure }
    // class: {
    //   show: (element, state) => state.activeAdventure
    //     ? {
    //       opacity: '1',
    //       transform: 'translateY(0)',
    //       transition: 'opacity .65s ease-in-out, transform .65s ease-in-out'

    //     }
    //     : {
    //       opacity: '0',
    //       transform: 'translateY(50px)',
    //       transition: 'opacity .35s ease-in-out, transform .35s ease-in-out'
    //     }
    // },
  }
}

export const adventure = {
  extend: TourContainer,
  props: commonTourProps,

  class: {
    show: (element, state) => state.activeAdventure
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

  tourAdventure
}
