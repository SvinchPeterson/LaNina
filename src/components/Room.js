'use strict'

import { Flex } from 'smbls'

import { roomOpacityTransform } from '../animations'

import { GalleryContainer } from './GalleryContainer'

// import { Gallery } from './Gallery/gallery'
import { RoomDescription } from './RoomDescription'
import { Amenities } from './Amenities'

const props = {
  boxSize: '100% 100%',
  align: 'center center',
  position: 'relative',
  gap: 'D',
  zIndex: 10,
  border: '3px solid yellow',
  alignSelf: 'center',
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

  article: {
    description: { extend: RoomDescription },
    amenities: { extend: Amenities }
  },

  galleryContainer: {
    extend: GalleryContainer
  }
}
