'use strict'

import { Flex } from 'smbls'

import { roomOpacityTransform } from '../animations'

import { Back } from './Back'
import { GalleryContainer } from './GalleryContainer'
import { RoomDescription } from './RoomDescription'
import { Amenities } from './Amenities'

import { HorArrowsCream } from './NavigationArrows'

const props = {
  boxSize: '100% 100%',
  align: 'center center',
  position: 'relative',
  gap: 'D',
  zIndex: 10,
  alignSelf: 'center',
  style: {
    '@media only screen and (max-width: 1366px) and (min-height: 1000px)': {
      // minHeight: 'fit-content',
      // padding: `${100 / 16}em 0 0 0`
    }
  },

  back: {
    position: 'absolute',
    top: 'B2',
    left: 'B1'
  },

  article: {
    flexFlow: 'column',
    gap: 'C'
  },

  galleryContainer: {
    margin: 'C - - -',
    navArrows: {}
  }
}

export const Room = {
  extend: Flex,
  props,

  class: {
    show: (element, state) => state.activeTab === element.key
      ? {
        minWidth: '100%',
        height: '100%',
        animationName: roomOpacityTransform,
        animationDuration: '.5s',
        animationTimingFunction: 'cubic-bezier(.17,.67,.99,1)'
      }

      : {
        height: `0`,
        opacity: 0,
        background: 'black',
        pointerEvents: 'none'
      }
  },

  back: {
    extend: Back,
    on: {
      click: (event, element, state) => {
        state.update({ activeTab: false, activeImage: 0 })
      }
    }
  },

  article: {
    description: { extend: RoomDescription },
    amenities: { extend: Amenities }
  },

  galleryContainer: {
    extend: GalleryContainer,
    book: {},
    gallery: {},
    navArrows: {
      extend: HorArrowsCream,
      ...[
        {
          on: {
            click: (event, element, state) => {
              const { activeImage } = state
              state.update({
                activeImage: activeImage - 1
              })
              if (activeImage <= 0) {
                state.update({ activeImage: 8 })
              }
            }
          }
        },

        {
          on: {
            click: (event, element, state) => {
              const { activeImage } = state
              state.update({
                activeImage: activeImage + 1
              })
              if (activeImage >= 8) {
                state.update({ activeImage: 0 })
              }
            }
          }
        }
      ]
    }
  }
}
