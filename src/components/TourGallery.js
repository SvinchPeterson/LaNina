'use strict'

import { Button, Flex } from 'smbls'

import { Gallery } from './Gallery'

import { HorArrowsCreamBor } from './NavigationArrows'

const props = {
  flow: 'column',
  title: {
    fontSize: 'Z',
    fontWeight: '400',
    color: 'cream2',
    letterSpacing: `${5 / 13}em`,
    textTransform: 'uppercase'
  },

  gallery: {
    width: 'H1',
    height: 'G1',
    position: 'relative',
    ':before': {
      content: '""',
      position: 'absolute',
      boxSize: '100% H2',
      zIndex: '3'
    }
  },

  footer: {
    border: 'solid, cream2 .5',
    borderWidth: '.5px 0 0 0',
    align: 'center space-between',
    width: '65%',
    margin: 'A - - -',
    padding: 'Z - - -',
    book: {
      fontSize: `${14.5 / 16}em`,
      height: `${40 / 14.5}em`,
      padding: '0 B1',
      background: 'transparent',
      border: 'solid, cream2 .35',
      borderWidth: '.75px',
      color: 'cream2',
      // height: 'fit-content',
      textTransform: 'uppercase',
      fontWeight: '700',
      opacity: '.85',
      ':hover': { opacity: '1' }
    },
    navArrows: {
      childProps: {
        boxSize: '40px 40px'
        // arrow: { boxSize: ' Y2' }
      }
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
