'use strict'

import { Flex } from 'smbls'

import { Gallery } from './Gallery'

import { Book } from './Book'

import { NavArrowsCream } from './NavigationArrows'

const props = {
  flow: 'column',

  title: {
    fontSize: `Z`,
    fontWeight: '400',
    textTransform: 'uppercase',
    color: 'cream',
    letterSpacing: `${4 / 13}em`,
    padding: '- A Y2 A'
  },

  gallery: {
    // width: 'H2',
    // height: 'G1',
    position: 'relative',
    overflow: 'hidden',
    ':before': {
      content: '""',
      position: 'absolute',
      boxSize: '101% 100%',
      zIndex: '3',
      top: '0'
    }
  },

  footer: {
    // border: 'solid, cream .25',
    // borderWidth: '.6px 0 0 0',
    align: 'center space-between',
    width: '80%',
    margin: 'Y2 - - -',
    book: {
      padding: '10px B',
      // padding: 'Z2 B2',
      background: 'transparent',
      border: 'solid, cream .35',
      borderWidth: '.75px',
      color: 'cream',
      textTransform: 'uppercase',
      fontWeight: '700',
      opacity: '.75',
      transition: 'opacity .25s ease-in-out, background .25s ease-in-out',
      span: { transition: 'transform .25s ease'},
      ':hover': { opacity: '1', background: 'cream .025' },
      ':hover > span': { transform: 'scale(1.05)' },
    }
  }
}

export const GalleryContainer = {
  props,
  extend: Flex,

  title: { tag: 'h5' },
  gallery: { extend: Gallery },
  footer: {
    extend: Flex,
    book: { extend: Book },
    navArrows: { extend: NavArrowsCream }
  }
}
