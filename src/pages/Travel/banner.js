'use strict'
import { Flex } from 'smbls'

import { countryText } from '../../texts'

import KAZBEGI_JPG from '../../assets/images/travel/ushguli.jpg'
import ORNAMENTS_JPG from '../../assets/images/travel/ornaments.png'

import { deopacity, position, positionOpacity, opacityTransform, scale } from '../../animations'

const props = {
  minWidth: '100%',
  minHeight: '100%',
  background: 'orange2 .5',
  flow: 'column',
  align: 'center center',
  ':before': {
    content: '""',
    background: 'black',
    position: 'absolute',
    top: '0',
    left: '0',
    boxSize: '100% 100%',
    zIndex: '20',
    opacity: '0',
    style: {
      animationName: deopacity,
      animationDuration: '3s',
      animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
    }
  },

  paragraph: {
    position: 'absolute',
    zIndex: '7',
    maxWidth: 'G3',
    margin: '- I - -',
    fontSize: `${15.5 / 16}em`,
    style: {
      letterSpacing: `${0.7 / 16}em`,
      animationName: opacityTransform,
      animationDuration: '3s',
      animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
    },
    '@tabletL': { margin: '- H - -' },
    '@tabletS': { margin: '- F1 - -' },
    '@mobileL': {
      margin: '- 0 - C2',
      alignSelf: 'flex-start'
    },
    '@mobileS': { maxWidth: 'G', margin: '- 0 - C1' },
    title: {
      text: 'make your trip extraordinary',
      fontSize: 'F',
      fontWeight: '700',
      textTransform: 'uppercase',
      lineHeight: `1.1em`,
      color: 'cream2 .85',
      '@mobileL': {
        lineHeight: '1.3em',
        fontWeight: '700'
      },
      '@mobileS': { fontSize: 'D' }
    },
    p: {
      padding: 'A1 - - -',
      color: 'cream2 .8',
      '@mobileL': { display: 'none' }
    }
  },

  image: {
    boxSize: '100% 100%',
    align: 'center flex-end',
    backgroundImage: 'url(' + ORNAMENTS_JPG + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
    '@tabletM': {
      style: { backgroundAttachment: 'initial' }
    },
    style: {
      backgroundAttachment: 'fixed',
      animationName: position,
      animationDuration: '15s',
      animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)',
      backgroundPosition: 'top center'
    },
    ':before': {
      content: '""',
      position: 'absoute',
      boxSize: '100% 100%',
      zIndex: '1',
      background: 'radial-gradient(rgba(30, 40, 49, .9), rgba(30, 40, 49, 1))'
    },

    imgCon: {
      boxSize: '70% 73%',
      position: 'absolute',
      right: '0',
      align: 'center flex-end',
      overflow: 'hidden',
      round: 'H1 0 0 H1',
      '@mobileL': {
        width: '80%'
      },
      imgs: {
        width: '100%',
        height: '100%',
        zIndex: '6',
        right: '0',
        round: 'H1 0 0 H1',
        position: 'absolute',
        backgroundImage: 'url(' + KAZBEGI_JPG + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        overflow: 'hidden',
        ':after': {
          content: '""',
          position: 'absolute',
          boxSize: '100% 100%',
          overflow: 'hidden',
          background: 'radial-gradient(rgba(30, 40, 49, .4), rgba(30, 40, 49, .6), rgba(30, 40, 49, 1))',
          top: '0',
          left: '0',
          zIndex: '5',
          '@mobileL': { background: 'radial-gradient(rgba(30, 40, 49, .6), rgba(30, 40, 49, .6), rgba(30, 40, 49, 1))' }
        },
        style: {
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
          animationName: positionOpacity,
          animationDuration: '10s',
          animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)',
          backgroundAttachment: 'fixed',
          '@media only screen and (max-width: 1280px)': {
            backgroundAttachment: 'initial',
            animationName: scale
          }
        }
      }
    }
  }
}
export const travelBanner = {
  props,
  extend: Flex,

  paragraph: {
    title: {},
    p: {
      extend: countryText,
      ...[
        {
          span: { text: 'Georgia' }
        }
      ]
    }

  },

  image: {
    extend: Flex,
    imgCon: {
      extend: Flex,
      imgs: {}
    }
  }
}
