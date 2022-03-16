'use strict'
import { SVG } from '@rackai/symbols'

import { coverLogoAnimation } from '../../animations'
import LOGO_SVG from '../../assets/icons/logo.svg'

export default {
  proto: SVG,
  src: LOGO_SVG,

  style: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(1)',
    zIndex: 50,
    pointerEvents: 'none',
    animationName: coverLogoAnimation,
    animationDuration: '1.5s',
    animationTimingFunction: 'ease-in-out',
    opacity: 1
  }
}
