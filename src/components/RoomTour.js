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
  galleryContainer: {
    gallery: {
      transition: 'width 3s ease-in-out'
    }
  },
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
      background: 'transparent',
      padding: 'A1',
      align: 'center center',
      cursor: 'pointer',
      zIndex: '40',
      '@maxTabletO': { top: '0', right: '0'},
      icon2: {
        boxSize: 'Z ',
        '@maxTabletO': { boxSize: 'Z2 '}
      }
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
      width: '100%',
      background: 'transparent',
      color: 'cream',
      more: {
        cursor: 'pointer',
        opacity: '.75',
        ':hover': { opacity: '1' }
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
  galleryContainer: {
    extend: GalleryContainer
  },
  article: {
    extend: Flex,
    close: {
      extend: [Button, Flex],
      icon2: { extend: Img, props: { src: CLOSE_PNG }}
    },
    description: { extend: Description },
    amenities: { extend: List },
    moreButton: {
      tag: 'button',
      more: { text: 'more'}
    },
    package: { extend: TourPackage },
  }
}