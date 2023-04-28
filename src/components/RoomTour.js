'use strict'

import { Flex, Link, Button, Img } from 'smbls'

import { GalleryContainer } from './GalleryContainer'
import { Description } from './Description'
import { List } from './List'
import { TourPackage } from './TourPackage'

import CLOSE_PNG from '../assets/icons/close.png'

const props = {
  alignItems: 'center',
  gap: '',
  header: { '@minTabletO': { display: 'none' } },
  article: {
    position: 'relative',
    flex: '1',
    minHeight: '100%',
    flow: 'column',
    align: 'center center',
    padding: '- D1',
    gap: 'A',
    '@maxTabletM': { padding: '- C1' },

    close: {
      position: 'absolute',
      // top: '0',
      // right: '0',
      background: 'transparent',
      boxSize: 'B2 B2',
      align: 'center center',
      cursor: 'pointer',
      icon: { boxSize: 'Y2 Y2'}
    },

    description: {},
    amenities: {
      width: '100%',
      border: 'solid, cream .5',
      borderWidth: '.5px 0 0 0',
      padding: 'Z - - -'
    },

    moreButton: {
      border: 'solid, cream .5',
      borderWidth: '.5px 0 0 0',
      minWidth: '100%',
      more: {
        color: 'cream2',
        cursor: 'pointer'
      }
    }
  }
}

export const RoomTour = {
  extend: Flex,
  props,
  header: {
    extend: Flex,
    childExtend: Button,
    ...[{}, {}]
  },
  galleryContainer: { extend: GalleryContainer },
  article: {
    extend: Flex,
    close: {
      extend: [Button, Flex],
      icon: { extend: Img, props: { src: CLOSE_PNG }}
    },
    description: { extend: Description },
    amenities: { extend: List },
    moreButton: { more: { extend: Link, text: 'more' } },
    package: { extend: TourPackage },
  }
}