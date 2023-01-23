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
  background: 'transparent',
  align: 'center center',
  ':before': {
    content: '""',
    boxSize: '100% 100%',
    background: 'radial-gradient(rgba(0, 0, 0, .15), rgba(0, 0, 0, .45))',
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
    overflow: 'hidden',
    bottom: '0',
    right: '0',
    backgroundImage: 'url(' + SOLOLAKI_JPG + ')',
    backgroundSize: 'cover',
    ':before': {
      content: '""',
      width: '100%',
      height: '100%',
      display: 'block',
      background: 'radial-gradient(rgba(0, 0, 0, .65), rgba(0, 0, 0, .7))'
    },
    style: {
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      animationName: positionBanner,
      animationDuration: '10s',
      animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)',
      backgroundPosition: 'center center',
      '@media only screen and (max-width: 1366px)': {
        backgroundAttachment: 'initial',
        animationName: scale
      }
    },
    '@tabletM': { backgroundImage: 'url(' + SOLOLAKI_TABLET_JPG + ')' },
    '@mobileL': { backgroundPosition: 'bottom center' }
  },
  titleContainer: {
    position: 'absolute',
    flow: 'column',
    gap: 'A',
    title: {
      text: 'BB Residence',
      fontSize: 'H',
      padding: '0',
      margin: '0',
      minHeight: 'fit-content',
      fontWeight: '700',
      color: 'cream2',
      letterSpacing: `${-2.5 / 57}em`,
      style: { textShadow: '.5px .5px rgba(0, 0, 0, .5)' }
    },
    subTitle: {
      text: 'sololaki',
      color: 'cream2 .75',
      fontSize: 'A',
      textTransform: 'uppercase',
      letterSpacing: `${10 / 16}em`,
      margin: '-Z2 -Y2 - -',
      alignSelf: 'center'
    }
  }
}

export const banner = {
  tag: 'section',
  extend: Flex,
  props,
  attr: { id: 'banner' },

  image: {},

  titleContainer: {
    extend: Flex,
    title: {},
    subTitle: {}
  }
}
