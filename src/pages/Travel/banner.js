'use strict'
import { Flex } from 'smbls'

import { countryText } from '../../texts'

import KAZBEGI_JPG from '../../assets/images/travel/ushguli.jpg'
import ORNAMENTS_JPG from '../../assets/images/travel/ornaments.png'

import { deopacity, opacity, position, positionOpacity, opacityTransform } from '../../animations'

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
  // border: '5px solid red',

  paragraph: {
    position: 'absolute',
    zIndex: '7',
    maxWidth: 'G3',
    margin: '- I - -',
    fontSize: `${15.5 / 16}em`,
    // border: '5px solid green',
    style: {
      letterSpacing: '.7px',
      animationName: opacityTransform,
      animationDuration: '3s',
      animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
    },
    '@tabletL': { margin: '- H2 - -' },
    '@tabletM': { margin: '- H - -' },
    '@tabletS': { margin: '- F2 - -' },
    '@mobileL': { maxWidth: 'G3' },
    title: {
      text: 'make your trip extraordinary',
      fontSize: 'F',
      fontWeight: '700',
      textTransform: 'uppercase',
      lineHeight: `1.1em`,
      color: 'cream2 .85',
      '@mobileL': { fontSize: 'D' }
    },
    p: {
      padding: 'A1 - - -',
      color: 'cream2 .75'
    }
  },

  image: {
    boxSize: '100% 100%',
    // border: '5px solid yellow',
    align: 'center flex-end',
    backgroundImage: 'url(' + ORNAMENTS_JPG + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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

    childProps: {
      width: '70%',
      height: '73%',
      position: 'absolute',
      zIndex: '2',
      right: '0',
      // border: '5px solid pink',
      round: 'H1 0 0 H1',
      // '@tabletS': { width: '6%' },
      style: {
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        animationName: positionOpacity,
        animationDuration: '10s',
        animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
        // '@mediia only screen and ( max-height: 750px)': {
        //   height: '75%',
        //   border: '3px solid red'
        // }
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
    ...[
      {
        props: {
          position: 'relative',
          zIndex: '6',
          backgroundImage: 'url(' + KAZBEGI_JPG + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          style: {
            backgroundRepeat: 'no-repeat',
            // transition: 'all 3s ease-in-out',
            backgroundAttachment: 'fixed'
          },
          overflow: 'hidden',
          ':after': {
            content: '""',
            position: 'absolute',
            boxSize: '100% 100%',
            overflow: 'hidden',
            background: 'radial-gradient(rgba(30, 40, 49, .4), rgba(30, 40, 49, .6), rgba(30, 40, 49, 1))',
            top: '0',
            left: '0',
            zIndex: '5'
          }
        }
      }
    ]
  }
}
