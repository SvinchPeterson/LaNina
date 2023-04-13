'use strict'

import { Flex, Button } from 'smbls'

import { roomOpacityTransform, roomDescription } from '../animations'

import { GalleryContainer } from './GalleryContainer'
import { RoomDescription } from './RoomDescription'
import { Amenities } from './Amenities'
import { RoomResDesc } from './RoomResDesc'

const props = {
  boxSize: '100% 100%',
  align: 'center center',
  position: 'relative',
  gap: 'A',
  zIndex: 10,
  alignSelf: 'center',
  border: '2px solid red',
  '@maxTabletM': {
    flow: 'column',
    gap: '0'
  },

  header: {
    display: 'none',
    '@maxTabletM': { display: 'flex' },
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
    maxWidth: `${430 / 16}em`,
    '@maxTabletL': { maxWidth: `${350 / 16}em` },
    '@maxTabletM': { display: 'none' }
  },

  galleryContainer: {
    height: '80%',
    '@maxTabletM': { minWidth: '100%' },
    gallery: {
      position: 'relative',
      width: '100%',
      height: `80%`,
      '@maxMobileM': { height: `${400 / 16}em` },
      '@maxMaxS': { height: `${270 / 16}em` },
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
