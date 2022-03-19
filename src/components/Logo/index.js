'use strict'
import { SVG } from '@rackai/symbols'

import { coverLogoAnimation } from '../../animations'

import LOGO_SVG from '../../assets/icons/logo.svg'

import LOGOB_SVG from '../../assets/icons/logos.svg'

export const logoB = {
  proto: SVG,
  src: LOGOB_SVG,
  style: {
    position: 'absolute',
    zIndex: '400',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(1)',
    opacity: 0,
    '@media only screen and (max-width: 1225px)': {
      opacity: 1
    }
  }
}

export default {
  proto: SVG,
  src: LOGO_SVG,

  style: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(1.4)',
    zIndex: 400,
    pointerEvents: 'none',
    opacity: 0.85,
    '@media only screen and (min-width: 1225px)': {
      animationName: coverLogoAnimation,
      animationDuration: '1.5s',
      animationTimingFunction: 'ease-in-out',
      opacity: 0.8
    },
    '@media only screen and (max-width: 1225px)': {
      transform: 'translate(-50%, -50%) scale(1.5)',
      opacity: 0
    }
  }
}
