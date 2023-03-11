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
    description: {
      extend: $exclusive
    },
    package: { extend: packageExclusive }
    // class: {
    //   show: (element, state) => state.activeExclusive
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
