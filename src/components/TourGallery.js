'use strict'

import { Button, Flex } from 'smbls'

import { Gallery } from './Gallery'

import { HorArrowsCreamBor } from './NavigationArrows'

const props = {
  flow: 'column',
  title: {
    fontSize: `Z`,
    fontWeight: '400',
    textTransform: 'uppercase',
    color: 'cream2',
    letterSpacing: `${4 / 13}em`,
    padding: '- A Y2 A'
  },

  gallery: {
    width: 'H1',
    height: 'G1',
    position: 'relative',
    overflow: 'hidden',
    ':before': {
      content: '""',
      position: 'absolute',
      boxSize: '100% H2',
      zIndex: '3'
    }
  },

  footer: {
    border: 'solid, cream2 .25',
    borderWidth: '.6px 0 0 0',
    align: 'center space-between',
    width: '65%',
    margin: 'A - - -',
    padding: 'Z - - -',
    book: {
      fontSize: 'Z',
      padding: 'Z2 B2',
      background: 'transparent',
      border: 'solid, cream2 .35',
      borderWidth: '.75px',
      color: 'cream2',
      textTransform: 'uppercase',
      fontWeight: '700',
      opacity: '.85',
      transition: 'opacity .25s ease-in-out',
      ':hover': { opacity: '1' }
    }
  }
}

export const TourGallery = {
  extend: Flex,
  props,
  title: { tag: 'h5' },
  gallery: { extend: Gallery },
  footer: {
    extend: Flex,
    book: { extend: Button, text: 'book' },
    navArrows: { extend: HorArrowsCreamBor }
  }
}
