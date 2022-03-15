'use strict'
import { SVG } from '@rackai/symbols'

import { zoomOutB, opacityBanner, letterSpacingBanner } from '../../animations'
import LOGO_SVG from '../../assets/icons/logo.svg'

export default {
  proto: SVG,
  src: LOGO_SVG,

  style: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    pointerEvents: 'none'
  }
}
