'use strict'

import { Flex, Button } from 'smbls'

import { roomOpacityTransform, roomDescription } from '../animations'

import { GalleryContainer } from './GalleryContainer'
import { RoomDescription } from './RoomDescription'
import { Amenities } from './Amenities'
import { RoomResDesc } from './RoomResDesc'

const props = {
  boxSize: 'fit-content 100%',
  align: 'flex-start center',
  position: 'relative',
  gap: 'B',
  zIndex: 10,
  alignSelf: 'center',
  '@maxTabletM': {
    flow: 'column',
    gap: 'Z',
    style: {padding: '0 0 0 0 !important'}
  },

  header: {
    display: 'none',
    '@maxTabletM': { display: 'flex' },
    minWidth: '100%',
    align: 'center space-between',
    padding: '- B',

    childProps: {
      color: 'cream',
      padding: '0',
      background: 'transparent',
      textTransform: 'uppercase',
      fontSize: `${11.5 / 16}em`,
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
    '@maxTabletM': { minWidth: '100%' },
    gallery: {
      position: 'relative',
      width: '100%',
      height: `${500 / 16}em`,
      '@maxTabletM': {
        style: {borderRadius: '0 !important'}
      },
      childProps: {
        backgroundSize: 'cover'

      }
    },

    footer: {
      width: '100%',
      padding: 'V2 B - B'
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
