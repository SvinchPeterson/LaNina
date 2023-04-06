'use strict'

import { Flex } from 'smbls'

const props = {
  width: '100%',
  minHeight: '100%',
  position: 'relative',
  padding: '0 0 0 0',
  top: '0',
  overflow: 'hidden',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  ':before': {
    content: '""',
    boxSize: '100% 100%',
    position: 'absolute',
    zIndex: '1',
    bottom: '0',
    pointerEvents: 'none'
  },
  style: {
    backgroundRepeat: 'no-repeat',
    animationDuration: '4s',
    animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
  },
  '@minTabletM': { style:{ backgroundAttachment: 'fixed !important' }},

  title: {
    color: 'cream',
    zIndex: '5',
    flow: 'column',
    align: 'center flex-start',
    h1: {
      fontSize: 'G',
      textTransform: 'capitalize'
    },
    h5: {
      fontWeight: '400',
      textTransform: 'uppercase'
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
