'use strict'
import { Flex } from 'smbls'

import LAKE_JPG from '../../assets/images/travel/lake.jpg'

import { opacityLetterSpacing2, deopacity, positionOpacity } from '../../animations'

const props = {
  minWidth: '100%',
  minHeight: '100%',
  backgroundImage: 'url(' + LAKE_JPG + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  align: 'center center',
  style: {
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    animationName: positionOpacity,
    animationDuration: '3s',
    animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)',
    '@media only screen and (max-width: 1024px)': {
      backgroundAttachment: 'initial'
    }
  },
  ':before': {
    content: '""',
    position: 'absolute',
    boxSize: '100% 100%',
    top: '0',
    left: '0',
    background: 'black',
    opacity: '0',
    style: {
      animationName: deopacity,
      animationDuration: '10s',
      animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
    }
  },
  ':after': {
    content: '""',
    position: 'absolute',
    boxSize: '100% 100%',
    top: '0',
    left: '0',
    background: 'radial-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .65))'
  },

  p: {
    text: 'Make your trip extraordinary',
    zIndex: '3',
    color: 'white .75',
    fontSize: 'A',
    textTransform: 'uppercase',
    fontWeight: '400',
    '@mobileL': {
      maxWidth: 'G',
      textAlign: 'center',
      lineHeight: `${32 / 16}em`
    },
    style: {
      letterSpacing: '6px',
      animationName: opacityLetterSpacing2,
      animationDuration: '4s',
      animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
    }
  }
}

export const travelBanner = {
  props,
  extend: Flex,
  p: {}
}
