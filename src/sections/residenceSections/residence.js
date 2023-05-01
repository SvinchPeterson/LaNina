'use strict'

import { Flex } from 'smbls'

import { Paragraph } from '../../components'

import { residenceTextEng } from '../../texts/residence'

import BB_JPG from '../../assets/images/residence/sololaki/b.jpg'

const props = {
  width: 'fit-content',
  flow: 'column',
  margin: 'E1 - - -',
  padding: 'E1 - - -',
  alignSelf: 'center',
  align: 'flex-start center',
  position: 'relative',
  boxSizing: 'border-box',
  '@maxTabletM': { fontSize: `${15 / 16}em` },
  '@maxMobileM': { minWidth: '100%'},
  imageContainer: {
    alignSelf: 'center',
    width: `${520 / 16}em`,
    height: 'H1',
    position: 'relative',
    round: 'G2 G2 0 0',
    overflow: 'hidden',
    '@maxMobileM': { width: '90%', height: 'H' },

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
      '@minTabletL': { style: { backgroundAttachment: 'fixed' } },
      '@maxTabletL': { backgroundSize: 'cover' },
      '@minMaxL': { backgroundSize: 'cover' },
    }
  },

  paragraph: {
    padding: 'C E D D1',
    margin: '-F1 - - -A2',
    background: 'cream',
    round: '0 F 0 0',
    title: { fontSize: 'I' },
    style: {
      boxShadow:' rgba(0, 0, 0, 0.45) 0px -25px 20px -20px'
    },
    '@maxTabletL': {
      margin: '-F - - -A2',
    },
    '@maxMobileM': {
      margin: '-E1 - - 0',
      padding: 'C C D C',
      width: '100%',
      round: '0 E1 0 0'
    },

    p: {
      maxWidth: 'H'
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
