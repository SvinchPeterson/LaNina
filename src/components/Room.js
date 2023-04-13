'use strict'

import { Flex, Button } from 'smbls'

import { roomOpacityTransform, roomDescription } from '../animations'

import { GalleryContainer } from './GalleryContainer'
import { RoomDescription } from './RoomDescription'
import { Amenities } from './Amenities'
import { RoomResDesc } from './RoomResDesc'
import { AmenitiesResponsive} from './AmenitiesResponsive'

const props = {
  boxSize: 'fit-content 100%',
  align: 'flex-start center',
  position: 'relative',
  gap: 'B',
  zIndex: 10,
  alignSelf: 'center',
  '@maxTabletS': {
    flow: 'column',
    gap: '0',
    margin: '-C - - -'
  },
  '@maxHeightN': {  margin: '0 - - -' },

  header: {
    display: 'none',
    '@maxTabletS': { display: 'flex' },
    minWidth: '100%',
    align: 'center space-between',
    padding: '- B',

    childProps: {
      color: 'cream',
      padding: 'A 0',
      background: 'transparent',
      textTransform: 'uppercase',
      fontSize: `${11 / 16}em`,
      letterSpacing: `${2 / 11.5}em`,
      fontWeight: '700'
    }
  },

  article: {
    flexFlow: 'column',
    gap: 'A',
    width: `${400 / 16}em`,
    margin: 'A - - -',
    '@maxTabletS': { display: 'none' }
  },

  galleryContainer: {
    '@maxTabletS': { minWidth: '100%' },
    gallery: {
      position: 'relative',
      height: `${500 / 16}em`,
      '@maxMobileM': { height: `${450 / 16}em` },
      '@maxMaxS': { height: `${300 / 16}em` },
      childProps: { backgroundSize: 'cover' }
    },

    footer: {
      width: '100%',
      padding: 'X B - B'
    }
  }
}

export const Room = {
  extend: Flex,
  props,

  header: {
    extend: Flex,
    childExtend: Button,
    ...[
      { text: 'description' },
      { text: 'amenities' }
    ]
  },

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
