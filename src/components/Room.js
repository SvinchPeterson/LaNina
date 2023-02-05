'use strict'

import { Flex } from 'smbls'

import { roomOpacityTransform } from '../animations'

import { Back } from './Back'
import { GalleryContainer } from './GalleryContainer'
import { RoomDescription } from './RoomDescription'
import { Amenities } from './Amenities'

const props = {
  boxSize: '100% 100%',
  align: 'center center',
  position: 'relative',
  gap: 'D',
  zIndex: 10,
  alignSelf: 'center',

  back: {
    position: 'absolute',
    top: 'B2',
    left: 'B1'
  },

  article: {
    flexFlow: 'column',
    gap: 'C'
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

  galleryContainer: { extend: GalleryContainer }
}
