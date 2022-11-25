'use strict'

import { Flex, Img } from 'smbls'

import DOWN_ARROW_PNG from '../assets/icons/downArrow-cream.png'
import { TourGallery } from './TourGallery'
import { TourArticle } from './TourArticle'

const props = {
  gap: 'C1',
  alignItems: 'center',
  '@tabletM': {
    flow: 'column',
    gap: '0',
    alignItems: 'center'
  },

  captionButton: {
    display: 'none',
    alignSelf: 'center',
    background: 'transparent',
    padding: 'Y2 Z2',
    gap: 'Y2',
    align: 'center center',
    margin: 'A2 - - -',
    color: 'black',
    textTransform: 'capitalize',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    opacity: '.5',
    '@tabletM': { display: 'flex' },
    span: {
      text: 'description',
      display: 'block',
      textTransform: 'uppercase',
      fontWeight: '700',
      fontSize: 'Z'
    },
    icon: {
      src: DOWN_ARROW_PNG,
      boxSize: ' A',
      style: { transition: 'transform .5s ease-in-out' }
    }
  }
}

export const Tour = {
  extend: Flex,
  props,

  gallery: { extend: TourGallery },

  captionButton: {
    tag: 'button',
    extend: Flex,
    span: {},
    icon: { extend: Img }
  },

  article: {
    extend: TourArticle
  }
}
