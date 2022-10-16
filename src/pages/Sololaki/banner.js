'use strict'

import { Flex } from 'smbls'

import { deopacity, positionBanner, letterSpacing, opacity, scale } from '../../animations'

import SOLOLAKI_JPG from '../../assets/images/residence/sololaki/residencee.jpg'
import SOLOLAKI_TABLET_JPG from '../../assets/images/residence/sololaki/residence-tablet.jpg'

const props = {
  minWidth: '100%',
  minHeight: '100%',
  position: 'relative',
  padding: '0 0 0 0',
  background: 'radial-gradient(rgba(0 ,0 , 0, .8), rgba(0 , 0, 0, .95))',
  align: 'center center',

  ':before': {
    content: '""',
    boxSize: '100% 100%',
    background: 'radial-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .45))',
    position: 'absolute',
    zIndex: '2',
    bottom: '0',
    pointerEvents: 'none'
  },

  ':after': {
    content: '""',
    boxSize: '100% 100%',
    background: 'linear-gradient(rgba(0 , 0, 0, 1), rgba(0, 0, 0, 1))',
    opacity: '0',
    position: 'absolute',
    pointerEvens: 'none',
    style: {
      animationName: deopacity,
      animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)',
      animationDuration: '5s'
    }
  },
  style: {
    overflow: 'hidden',
    '@media only screen and (max-height: 500px)': { padding: '0' }
  },

  image: {
    boxSize: '100% 100%',
    position: 'absolute',
    top: '0',
    left: '0',
    backgroundImage: 'url(' + SOLOLAKI_JPG + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    ':before': {
      content: '""',
      width: '100%',
      height: '100%',
      display: 'block',
      background: 'radial-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .7))'
    },
    style: {
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      animationName: positionBanner,
      animationDuration: '5s',
      animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)',
      '@media only screen and (max-width: 1366px)': {
        backgroundAttachment: 'initial',
        animationName: scale

      }
    },
    '@tabletM': { backgroundImage: 'url(' + SOLOLAKI_TABLET_JPG + ')' },
    '@mobileL': { backgroundPosition: 'bottom center' }
  },

  title: {
    position: 'absolute',
    flow: 'column',
    color: 'cream2',
    alignItems: 'flex-end',
    animationName: opacity,
    animationDuration: '3s',
    animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)',

    h3: {
      text: 'BB Residence',
      fontSize: 'G',
      style: {
        animationName: letterSpacing,
        animationDuration: '3s',
        animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
      },
      '@mobileS': { fontSize: 'F' }
    },

    caption: {
      width: 'fit-content',
      text: 'sololaki',
      fontSize: 'A',
      textTransform: 'uppercase',
      fontWeight: '700',
      position: 'relative',
      margin: '- D1 - -',
      padding: 'Z - - -',
      style: { letterSpacing: '10px' },
      ':before': {
        content: '""',
        width: '150%',
        height: 'V1',
        background: 'gold',
        position: 'absolute',
        top: '-X',
        round: 'C'
      },
      '@mobileS': { fontSize: 'Z' }
    }
  }
}

export const banner = {
  tag: 'section',
  extend: Flex,
  props,
  attr: { id: 'banner' },

  image: {},

  title: {
    extend: Flex,
    h3: {},
    caption: {}
  }
}
