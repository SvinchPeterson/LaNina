'use strict'

import { Img, Flex } from 'smbls'

import { NavHorizontalArrowsBlack } from './NavigationArrows'
import { Book } from './Book'

const props = {
  flow: 'column',
  gap: 'Z',
  position: 'relative',
  // '@mobileL': { gap: 'Y1' },

  title: {
    text: 'Tbilisi City Tour',
    fontWeight: '500',
    fontSize: 'A',
    color: 'black',
    textTransform: 'uppercase',
    padding: '- - - Z'
    // '@mobileS': { padding: '- - - A' }
  },

  images: {
    boxSize: 'G1 H1',
    display: 'block',
    round: '0 F F 0',
    overflow: 'hidden',
    position: 'relative',
    // '@mobileL': { boxSize: 'G H' },
    // '@mobileM': { boxSize: 'F3 G3' },
    // '@mobileS': { boxSize: 'F3 G1' },
    // style: {
    //   '@media only screen and (max-width: 400px)': { maxWidth: `${310 / 16}em`, maxHeight: `${180 / 16}em` }
    // },
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
    margin: 'Z - - -',
    padding: 'Z - - -',
    width: '70%',
    // height: 'fit-content',
    borderTop: '1px solid gray',
    flow: 'row-reverse',
    align: 'center space-between',
    // '@mobileL': {
    //   align: 'flex-start space-between'
    // },
    // '@mobileXS': { padding: 'A Z1 - Z1' },

    navArrow: {
      ':after': { display: 'none' },
      gap: 'B',
      childProps: {
        boxSize: 'C1 C1',
        borderRadius: '100%',
        border: '1px solid gray',
        padding: '0',
        // '@mobileM': {
        //   boxSize: 'C2 C2'
        // },
        arrow: { fontSize: '11px' }
      }
    },

    book: {
      border: '1px solid gray',
      background: 'transparent',
      padding: 'Z1 B2',
      cursor: 'pointer',
      span: {
        color: 'black',
        fontSize: 'A'
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
      extend: NavHorizontalArrowsBlack,
      props: {
        // '@mobileXS': { gap: 'B1' },
        // childProps: { arrow: { '@mobileXS': { boxSize: ' Z1' } } }
      }
    },

    book: {
      tag: 'button',
      extend: Book
    }
  }
}
