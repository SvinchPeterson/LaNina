'use strict'

import { Flex } from 'smbls'

import { Paragraph } from '../../components'

import { wineTextEng } from '../../texts/residence'

import WINE_JPG from '../../assets/images/residence/sololaki/wine.jpg'

const props = {
  position: 'relative',
  align: 'center center',
  margin: 'F -',
  width: 'fit-content',
  alignSelf: 'center',
  flow: 'column',
  '@maxTabletM': { fontSize: `${15 / 16}em` },
  '@maxMobileM': { minWidth: '100%' },
  image: {
    boxSize: `H G3`,
    padding: '0',
    round: '0 0 G G',
    backgroundSize: 'contain',
    zIndex: '2',
    backgroundPosition: `center center`,
    '@minTabletL': { style: { backgroundAttachment: 'fixed'} },
    '@maxTabletL': { backgroundSize: 'cover' },
    '@maxMobileM': { width: '90%' },
    style: {
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'radial-gradient(rgba(1, 57, 57, .35), rgba(1, 57, 57, .5)), url(' + WINE_JPG + ')'
    }
  },

  paragraph: {
    gap: 'Z',
    maxWidth: 'G1',
    background: 'cream',
    margin: '- - -F1 -Z2',
    padding: 'C A C2 D',
    zIndex: '3',
    boxSizing: 'content-box',
    round: '0 0 0 E2',
    '@maxMobileM': {
      minWidth: '100%',
      boxSizing: 'border-box',
      padding: 'C C D D',
      margin: '- - -F1 0',
      style: { boxShadow: '15px 35px 30px rgba(0, 0, 0, .36)' }
    },
    '@maxMobileXS': { padding: 'C B2 C D',},

    title: {
      fontSize: 'D',
      alignSelf: 'center',
      margin: '- B - -'
    },

    p: {
      fontSize: `${15 / 16}em`
    }
  }
}

export const wine = {
  tag: 'section',
  extend: Flex,
  props,
  attr: { id: 'wine' },
  paragraph: {
    extend: Paragraph,
    title: { text: 'wine' },
    p: { extend: wineTextEng }
  },
  image: {},
}
