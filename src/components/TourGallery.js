'use strict'

import { Img, Flex, Button } from 'smbls'

import { NavHorizontalArrowsCream } from './NavigationArrows'

const props = {
  flow: 'column',
  gap: 'A',
  position: 'relative',
  '@mobileL': { gap: 'Y1' },
  // '@mobileS': { width: '100%' },

  title: {
    text: 'Tbilisi City Tour',
    fontWeight: '500',
    fontSize: 'Z',
    position: 'absolute',
    color: 'cream2',
    top: 'Y2',
    right: '-B1',
    textTransform: 'uppercase',
    style: {
      writingMode: 'vertical-lr',
      letterSpacing: '1px'
    },
    '@mobileL': {
      position: 'initial',
      style: { writingMode: 'initial' }
    }
  },

  images: {
    boxSize: 'G1 H1',
    display: 'block',
    position: 'relative',
    '@mobileL': { boxSize: 'F3 H' },
    '@mobileM': { boxSize: 'F3 G3' },
    '@mobileS': { boxSize: 'F3 G1' },
    '@mobileXS': { boxSize: 'F3 G' },
    style: { '@media only screen and (max-width: 400px)': { maxWidth: `${310 / 16}em`, maxHeight: `${180 / 16}em` } },
    childProps: {
      position: 'absolute',
      boxSize: '100% 100%'
    },
    ':after': {
      content: '""',
      position: 'absolute',
      boxSize: '100% 100%',
      background: 'linear-gradient(rgba(30, 52, 71, .25), rgba(30, 52, 71, .45))'
    }
  },

  footer: {
    padding: 'A X1 - X1',
    borderTop: '1px solid silver',
    height: 'fit-content',
    flow: 'row-reverse',
    align: 'center space-between',

    book: {
      text: 'book',
      round: 'D',
      padding: 'A C1',
      fontSize: `${12 / 16}em`,
      fontWeight: '700',
      background: 'transparent',
      border: '1px solid silver',
      color: 'cream2',
      textTransform: 'uppercase',
      opacity: '.85',
      ':hover': {
        opacity: '1'
      },
      '@mobileS': { fontSize: `${10 / 16}em` }
    },

    navArrow: {
      childProps: {
        opacity: '.85',
        ':hover': { opacity: '1' }
        // '@mobileS': { boxSize: `X ` }
      }
    }
  }
}

export const TourGallery = {
  extend: Flex,
  props,

  title: {},

  images: { childExtend: { extend: Img } },

  footer: {
    extend: Flex,
    navArrow: {
      extend: NavHorizontalArrowsCream
    },

    book: { extend: Button }
  }
}
