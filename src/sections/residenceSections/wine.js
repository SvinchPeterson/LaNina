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
  // '@mobileL': {
  //   minHeight: '100%',
  //   flow: 'column',
  //   margin: 'E2 -',
  //   overflow: 'hidden'
  // },
  // '@tabletM': { width: '100%' },
  image: {
    boxSize: `H G3`,
    padding: '0',
    round: '0 0 G G',
    backgroundSize: 'contain',
    zIndex: '2',
    backgroundPosition: `center center`,
    '@minTabletM': { style: { backgroundAttachment: 'fixed'} },
    style: {
      backgroundRepeat: 'no-repeat',
      // '@media only screen and (min-width: 1281px)': {
      //   backgroundPosition: `center bottom ${100 / 16}em`,
      // },
      backgroundImage: 'radial-gradient(rgba(1, 57, 57, .35), rgba(1, 57, 57, .5)), url(' + WINE_JPG + ')'
    },

    // '@tabletM': {
    //   boxSize: `H3 H`,
    //   round: '0 0 I I',
    //   backgroundSize: '100% 100%',
    //   backgroundPosition: `center top`,
    //   style: { backgroundRepeat: 'no-repeat' }
    // },
    // '@tabletS': { margin: '- - - -C2' },
    // '@mobileL': {
    //   margin: '0',
    //   round: '0',
    //   boxSize: '100% 100%',
    //   backgroundSize: 'cover',

    // }
  },

  paragraph: {
    gap: 'Z',
    maxWidth: 'G1',
    // position: 'absolute',
    background: 'cream',
    margin: '- - -F1 -Z2',
    padding: 'C A C2 D',
    zIndex: '3',
    boxSizing: 'content-box',
    round: '0 0 0 E2',
    // margin: '-G -E2 0 0',
    // padding: 'A2 E1 E D',
    // round: '0 0 0 F',
    // align: 'center flex-start',
    // '@tabletM': {
    //   top: '0',
    //   round: '0 0 0 F',
    //   padding: '0 E1 E D2',
    //   margin: '-Y -H -H 0'
    // },
    // '@tabletS': { margin: '-Y -G1 -H 0' },
    // '@mobileL': {
    //   top: '0',
    //   left: '0',
    //   padding: '0 D2',
    //   round: '0',
    //   background: 'naviGreen .35',
    //   textAlign: 'center',
    //   color: 'cream',
    //   maxWidth: '100%',
    //   minHeight: '100%',
    //   align: 'center center',
    //   style: { backdropFilter: 'blur(1px)' }
    //   // alignSelf: 'flex-end',
    // },
    // '@mobileS': {padding: '0 B'},

    title: {
      fontSize: 'D',
      alignSelf: 'center',
      margin: '- B - -'
    },

    p: {
      fontSize: `${15 / 16}em`,
      // '@mobileL': {
      //   fontSize: `${14.5 / 16}em`
      // }
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
