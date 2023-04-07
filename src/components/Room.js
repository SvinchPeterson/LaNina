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
  // border: '4px solid red',
  style: {
    '@media only screen and (max-width: 1366px) and (min-height: 1000px)': {
      // minHeight: 'fit-content',
      // padding: `${100 / 16}em 0 0 0`
    }
  },

  // back: {
  //   position: 'absolute',
  //   top: 'B2',
  //   left: 'B1'
  // },

  article: {
    flexFlow: 'column',
    gap: 'B',
    description: {
      border: 'solid, cream .5',
      borderWidth: '0 0 1px 0',
      padding: '- - Z1 -'
    }
  },

  galleryContainer: {
    margin: 'C - - -',
    gallery: {
      position: 'relative',
      // width: 'H1',
      height: 'H',
      ':after': {
        content: '""',
        position: 'absolute',
        boxSize: '100% 100%',
        background: 'linear-gradient(to right,rgba(1, 57, 57, 1) 0%, rgba(1, 57, 57, 0) 100%)'
      }
    }
  }
}

export const Room = {
  extend: Flex,
  props,

  // class: {
  //   show: (element, state) => state.activeTab === element.key
  //     ? {
  //       minWidth: '100%',
  //       height: '100%',
  //       animationName: roomOpacityTransform,
  //       animationDuration: '.5s',
  //       animationTimingFunction: 'cubic-bezier(.17,.67,.99,1)'
  //     }

  //     : {
  //       height: `0`,
  //       opacity: 0,
  //       background: 'black',
  //       pointerEvents: 'none'
  //     }
  // },

  // back: {
  //   extend: Back,
  //   on: {
  //     click: (event, element, state) => {
  //       state.update({ activeTab: false, activeImage: 0 })
  //     }
  //   }
  // },

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
