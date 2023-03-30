'use strict'

import { Flex } from 'smbls'

import { Paragraph } from '../../components'

import { wineTextEng } from '../../texts/residence'

import WINE_JPG from '../../assets/images/residence/sololaki/wine.jpg'

const props = {
  position: 'relative',
  align: 'center center',
  margin: 'G -',
  // '@tabletM': { width: '100%' },
  image: {
    boxSize: `H1 H`,
    padding: '0',
    round: '0 0 G G',
    backgroundSize: 'contain',
    backgroundPosition: `center bottom ${100 / 16}em`,
    zIndex: '2',
    style: {
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      // '@media only screen and (min-width: 1281px)': { },
      backgroundImage: 'radial-gradient(rgba(1, 57, 57, .35), rgba(1, 57, 57, .5)), url(' + WINE_JPG + ')'
    },

    // '@tabletM': {
    //   boxSize: `I H1`,
    //   round: '0 0 I I',
    //   backgroundSize: '100% 100%',
    //   backgroundPosition: `center top`,
    //   style: { backgroundRepeat: 'no-repeat' }
    // },
    // '@tabletS': { margin: '- - - -C' }
  },

  paragraph: {
    gap: 'Z',
    maxWidth: 'H1',
    position: 'absolute',
    background: 'cream2',
    margin: '-G -E2 0 0',
    padding: 'A2 E1 E D',
    round: '0 0 0 F',
    align: 'center flex-start',
    title: { fontSize: 'D' },
    // '@tabletM': {
    //   top: '0',
    //   round: '0 0 0 F',
    //   padding: 'D E1 E D2',
    //   margin: '-Y -H -H 0'
    // },
    // '@tabletS': {
    //   margin: '-Y -G1 -H 0'
    // }
  }
}

export const wine = {
  tag: 'section',
  extend: Flex,
  props,
  attr: { id: 'wine' },

  image: {},
  paragraph: {
    extend: Paragraph,
    title: { text: 'wine' },
    p: { extend: wineTextEng }
  }
}
