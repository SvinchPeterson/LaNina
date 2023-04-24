'use strict'

import { Flex } from 'smbls'

import { Gallery } from './Gallery'

import { BookingLink } from './BookingLink'

import { NavArrowsCream } from './NavigationArrows'

const props = {
  flow: 'column',

  title: {
    fontSize: `${12 / 16}em`,
    fontWeight: '400',
    textTransform: 'uppercase',
    color: 'cream',
    letterSpacing: `${4 / 13}em`,
    padding: '- A Y2 A'
  },

  gallery: {
    position: 'relative',
    overflow: 'hidden',
    ':before': {
      content: '""',
      position: 'absolute',
      boxSize: '100% 100%',
      zIndex: '3',
      top: '0',
      left: '0'
    }
  },

  footer: {
    align: 'center space-between',
    width: '80%',
    margin: 'Y2 - - -',
    book: {
      padding: 'Z B',
      background: 'transparent',
      border: 'solid, cream .35',
      borderWidth: '.75px',
      color: 'cream',
      textTransform: 'uppercase',
      fontWeight: '700',
      opacity: '.75',
      transition: 'opacity .25s ease-in-out, background .25s ease-in-out',
      cursor: 'pointer',
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
    book: { extend: BookingLink },
    navArrows: { extend: NavArrowsCream }
  }
}
