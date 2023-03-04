'use strict'

import { TourContainer, Tour } from '../components'

import { galleryAdventureTour } from '../galleries/travelGalleries'

import { descriptionAdventureTure } from '../texts/travelText/toursDescriptions'

import { commonTourProps } from './commonProps'

const tourAdventure = {
  extend: Tour,
  props: commonTourProps,

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

  description: { extend: descriptionAdventureTure }
}

export const adventure = {
  extend: TourContainer,

  class: {
    show: (element, state) => state.activeAdventure
      ? { opacity: '1' }
      : { opacity: '0', zIndex: '-1' }
  },

  tourAdventure
}
