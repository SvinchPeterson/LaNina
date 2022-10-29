'use strict'

import { Img, Flex } from 'smbls'

import { TourBook } from './TourBook'

import { NavHorizontalArrowsCream } from './NavigationArrows'

const props = {
  flow: 'column',
  gap: 'Z',
  position: 'relative',
  '@mobileL': { gap: 'Y1' },

  title: {
    text: 'Tbilisi City Tour',
    fontWeight: '500',
    fontSize: 'Z',
    color: 'cream2',
    textTransform: 'uppercase',
    '@mobileS': { padding: '- - - A' }
  },

  images: {
    boxSize: 'G1 H1',
    display: 'block',
    position: 'relative',
    // border: '5px solid red',
    '@mobileL': { boxSize: 'G H' },
    '@mobileM': { boxSize: 'F3 G3' },
    '@mobileS': { boxSize: 'F3 G1' },
    style: {
      // boxShadow: '0px 0px 10px 1px black;',
      '@media only screen and (max-width: 400px)': { maxWidth: `${310 / 16}em`, maxHeight: `${180 / 16}em` }
    },
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
    '@mobileXS': { padding: 'A Z1 - Z1' },
    navArrow: {
      childProps: {
        opacity: '.85',
        // border: '2px solid red',
        ':hover': { opacity: '1' }
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
      extend: NavHorizontalArrowsCream,
      props: {
        '@mobileXS': { gap: 'B1' },
        childProps: { arrow: { '@mobileXS': { boxSize: ' Z1' } } }
      }
    },

    bookContainer: { extend: TourBook }
  }
}
