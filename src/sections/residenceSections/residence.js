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


  // '@maxMobileM': {
  //   fontSize: `${14 / 16}em`
  // },
  '@maxMobileS': {
    fontSize: `${14 / 16}em`
  },

  // '@maxMobileXS': { fontSize: `${9 / 16}em` },

  imageContainer: {
    alignSelf: 'center',
    width: `${520 / 16}em`,
    height: 'H1',
    position: 'relative',
    round: 'G2 G2 0 0',
    overflow: 'hidden',
    '@maxMobileM': {
      width: '97%',
      height: 'H'
    },
    // '@tabletM': { width: 'H3' },
    // '@tabletS': { width: 'H2' },
    // '@mobileL': {
    //   boxSize: '100% 100%',
    //   round: '0',
    //   '&:before': {
    //     background: 'linear-gradient(rgba(1, 57, 57, .5), rgba(1, 57, 57, .5), rgba(1, 57, 57, .65), rgba(1, 57, 57, .75), rgba(1, 57, 57, 1), rgba(1, 57, 57, 1))'
    //   }
    // },

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
      // boxShadow: 'inset 0px 0px 500px 60px rgba(0, 0, 0, .9)',
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
    title: {
      fontSize: 'D',
      // '@maxMobileS': { fontSize: `${20 / 10}em`}
    },
    '@maxMobileM': {
      margin: '-E2 - - -',
      padding: 'C C D B',
      round: '0 E 0 0',
    },

    p: {
      maxWidth: 'H',
      fontSize: `${15 / 16}em`,
      '@maxMobileM': { maxWidth: 'G3'},
      // '@maxMobileS': { fontSize: `${14 / 10}em`}
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
