'use strict'

import { Flex } from 'smbls'

import { roomOpacityTransform } from '../animations'

import { GalleryContainer } from './GalleryContainer'
import { Gallery } from './Gallery'
import { RoomDescription } from './RoomDescription'
import { Amenities } from './Amenities'

import { NavArrowsCream } from './NavigationArrows'

const props = {
  boxSize: '100% 100%',
  align: 'center center',
  position: 'relative',
  gap: 'D',
  zIndex: 10,
  alignSelf: 'center',


  article: {
    flexFlow: 'column',
    gap: 'B',
    description: {
      border: 'solid, cream .5',
      borderWidth: '0 0 .7px 0',
      padding: '- - Z1 -'
    }
  },

  galleryContainer: {
    gallery: {
      position: 'relative',
      width: '100%',
      height: 'H',
      ':after': {
        content: '""',
        position: 'absolute',
        boxSize: '100% 100%',
        background: 'linear-gradient(to right,rgba(0, 49, 49, 1) 0%, rgba(0, 49, 49, 0) 100%)'
      }
    },

    footer: {
      margin: 'A - - Y'
    }


  }
}

export const Room = {
  extend: Flex,
  props,

  article: {
    description: { extend: RoomDescription },
    amenities: { extend: Amenities }
  },

  galleryContainer: {
    extend: GalleryContainer,
    title: null,
    gallery: {},
    footer: {
      book: {},
      navArrows: {}
    }
  }
}
