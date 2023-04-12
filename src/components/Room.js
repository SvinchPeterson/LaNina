'use strict'

import { Flex } from 'smbls'

import { roomOpacityTransform, roomDescription } from '../animations'

import { GalleryContainer } from './GalleryContainer'
import { Gallery } from './Gallery'
import { RoomDescription } from './RoomDescription'
import { Amenities } from './Amenities'

import { NavArrowsCream } from './NavigationArrows'

const props = {
  boxSize: 'fit-content 100%',
  align: 'flex-start center',
  position: 'relative',
  gap: 'A',
  zIndex: 10,
  alignSelf: 'center',

  article: {
    flexFlow: 'column',
    gap: 'Y2',
    maxWidth: `${430 / 16}em`
  },

  galleryContainer: {
    gallery: {
      position: 'relative',
      width: '100%',
      height: `${500 / 16}em`,
      ':after': {
        content: '""',
        position: 'absolute',
        boxSize: '100% 100%',
        top: '0'
      },
      childProps: {
        backgroundSize: 'cover'

      }
    },

    footer: {
      width: '100%',

      // padding: 'Y2 - - A2'
      // margin: 'Z B1 - -'
    }


  }
}

export const Room = {
  extend: Flex,
  props,

  galleryContainer: {
    extend: GalleryContainer,
    title: null,
    gallery: {},
    footer: {
      book: {},
      navArrows: {}
    }
  },
  article: {
    description: { extend: RoomDescription },
    amenities: { extend: Amenities }
  },


}
