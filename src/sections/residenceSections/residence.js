'use strict'

import { Flex } from 'smbls'

import { Paragraph } from '../../components'

import { residenceTextEng } from '../../texts/residence'

import BB_JPG from '../../assets/images/residence/sololaki/b.jpg'

const props = {
  width: 'fit-content',
  flow: 'column',
  padding: 'E2 - - -',
  alignSelf: 'center',
  margin: 'D2 - B2 -',
  align: 'flex-start center',
  position: 'relative',
  boxSizing: 'border-box',

  '@maxTabletM': { fontSize: `${15 / 16}em` },
  '@maxMobileM': { margin: 'C - 0 -', padding: 'E - - -'},

  // '@maxMobileS': { fontSize: `${14 / 16}em` },

  imageContainer: {
    alignSelf: 'center',
    width: `${520 / 16}em`,
    height: 'H1',
    position: 'relative',
    round: 'G2 G2 0 0',
    overflow: 'hidden',
    '@maxMobileM': {
      width: '90%',
      height: 'H'
    },

    ':before': {
      content: '""',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      background: 'naviGreen .35'
    },

    image: {
      boxSize: '100% 100%',
      backgroundImage: 'url(' + BB_JPG + ')',
      backgroundSize: 'contain',
      backgroundPosition: 'center center',
      style: { backgroundRepeat: 'no-repeat'},
      '@minTabletL': {style: { backgroundAttachment: 'fixed' } },
      '@maxTabletL': {style: { backgroundSize: 'cover' } },
    }
  },

  paragraph: {
    background: 'cream',
    margin: '-F - - -',
    padding: 'C D1 D B',
    round: '0 F 0 0',
    gap: 'Z',
    zIndex: '5',
    boxSizing: 'border-box',
    title: { fontSize: 'D', },
    '@maxMobileM': {
      margin: '-E2 - - -',
      padding: 'C C D B2',
      round: '0 E 0 0',
      style: {boxShadow: '0px -40px 30px 0px rgba(0, 0, 0, .4)'}
    },

    p: {
      maxWidth: 'H',
      fontSize: `${15 / 16}em`
    }
  }
}

export const residence = {
  tag: 'section',
  extend: Flex,
  attr: { id: 'residence' },
  props,

  imageContainer: { image: {} },

  paragraph: {
    extend: Paragraph,
    title: { text: 'residence' },
    p: { extend: residenceTextEng }
  }
}
