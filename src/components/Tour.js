'use strict'

import { Flex, Img } from 'smbls'

import DOWN_ARROW_PNG from '../assets/icons/downArrow-cream.png'
import { ImgGallery } from './ImgGallery'
import { TourArticle } from './TourArticle'

const props = {
  gap: 'D2',
  alignItems: 'flex-start',
  '@tabletM': {
    flow: 'column',
    gap: '0',
    alignItems: 'center'
  },

  captionButton: {
    display: 'none',
    alignSelf: 'flex-start',
    background: 'transparent',
    padding: 'Y2 Z2',
    gap: 'Y',
    align: 'center center',
    margin: 'A - - -',
    color: 'cream2',
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
      boxSize: ' A'
    }
  }
}

export const Tour = {
  extend: Flex,
  props,

  gallery: { extend: ImgGallery },

  captionButton: {
    tag: 'button',
    extend: Flex,
    on: {
      click: (event, element, state) => {
        state.activeDescription
          ? state.update({ activeDescription: false, activeArrow: false })
          : state.update({ activeDescription: true, activeArrow: true })
      }
    },

    class: {
      show: (element, state) => state.activeArrow
        ? {
          '> img': { transform: 'rotate(180deg)' }
        }
        : {
          '> img': { transform: 'rotate(0deg)' }
        }
    },
    span: {},
    icon: { extend: Img }
  },

  article: {
    extend: TourArticle
  }
}
