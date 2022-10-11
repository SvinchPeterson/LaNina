'use strict'

import { Flex } from 'smbls'

import { deopacity, position } from './animations'

import heading from './heading'
import navBar from './navBar'

import ORNAMENTS_PNG from '../../assets/images/landing/ornamentsGray.png'

const props = {
  boxSize: '100% 100%',
  backgroundImage: 'url(' + ORNAMENTS_PNG + ')',
  backgroundSize: 'cover',
  backgroundARepeat: 'no-repeat',
  position: 'relative',
  background: 'white .5',
  align: 'center center',
  backgroundPosition: 'top center',
  style: {
    animationName: position,
    animationDuration: '20s',
    animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
  },
  ':before': {
    content: '""',
    position: 'absolute',
    boxSize: '100% 100%',
    background: 'black',
    opacity: '0',
    style: {
      animationName: deopacity,
      animationDuration: '5s',
      animationTimingFunction: 'cubic-bezier(.17,.67,.65,.6)',
      zIndex: 4
    }
  },

  ':after': {
    content: '""',
    position: 'absolute',
    boxSize: '100% 100%',
    background: 'radial-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .6), rgba(0, 0, 0, .8), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))'
  },

  content: {
    flow: 'column',
    gap: 'C1',
    padding: '- - F -',
    zIndex: '5',
    '@mobileL': {
      padding: '- - C -',
      gap: 'C'
    },
    style: { '@media only screen and (max-height: 700px)': { padding: '0' } }
  }
}

export default {
  extend: Flex,
  props,

  content: {
    extend: Flex,

    heading,
    navBar
  }
}
