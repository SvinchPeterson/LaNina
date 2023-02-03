'use strict'

import { Flex } from 'smbls'

import { bannerBackground } from '../animations'

const props = {
  width: '100%',
  minHeight: '100%',
  position: 'relative',
  padding: '0 0 0 0',
  top: '0',
  align: 'center center',
  alignSelf: 'center',
  overflow: 'hidden',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  ':before': {
    content: '""',
    boxSize: '100% 100%',
    background: 'radial-gradient(rgba(0, 0, 0, .55), rgba(0, 0, 0, .85))',
    position: 'absolute',
    zIndex: '1',
    bottom: '0',
    pointerEvents: 'none'
  },
  style: {
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    animationName: bannerBackground,
    animationDuration: '4s',
    animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
  },

  title: {
    flow: 'column',
    gap: 'A',
    zIndex: '3',
    transform: 'translateY(-30px) scale(1)',
    h1: {
      text: 'BB Residence',
      fontSize: 'H',
      padding: '0',
      margin: '0',
      minHeight: 'fit-content',
      fontWeight: '700',
      color: 'cream2',
      letterSpacing: `${-2.5 / 57}em`
    },

    h5: {
      text: 'sololaki',
      color: 'cream2 .85',
      fontSize: 'A',
      textTransform: 'uppercase',
      letterSpacing: `${10 / 16}em`,
      margin: '-Z2 -Y2 - -',
      alignSelf: 'center',
      fontWeight: '400',
      style: {
        animationDuration: '2s',
        animationTimingFunction: 'ease-in-out'
      }
    }
  }
}

export const Banner = {
  tag: 'section',
  extend: Flex,
  attr: { id: 'banner' },
  props,

  title: {
    extend: Flex,
    h1: {},
    h5: {}
  }
}
