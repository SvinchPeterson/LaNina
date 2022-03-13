'use strict'
import { Block, Text, Img } from '@rackai/symbols'

import { zoomOutB, opacityBanner, letterSpacingBanner } from '../../animations'
import LOGO_PNG from '../../assets/logoBB.png'

import { cream } from '../../colors'

const style = {
  style: {
    minWidth: `${200 / 16}em`,
    pointerEvents: 'none',

    animationName: opacityBanner,
    animationDuration: '.9s',
    animationTimingFunction: 'ease-in-out',

    '> img': {
      width: `${90 / 16}em`,
      opacity: 0.85,

      animationName: zoomOutB,
      animationDuration: '1.4s',
      animationTimingFunction: 'ease-in-out'
    },

    '> h5': {
      textTransform: 'uppercase',
      // letterSpacing: '2px',
      letterSpacing: '4px',
      fontWeight: 700,
      // fontFamily: 'Helvetica Neue LT GEO 75 Bold Caps',
      // fontWeight: 700,
      color: cream,
      opacity: 0.65,

      animationName: letterSpacingBanner,
      animationDuration: '1.3s',
      animationTimingFunction: 'ease-in-out'
    }
  }
}

export default {
  proto: [Block, style, Text],
  props: {
    size: 'A',
    flexFlow: 'column',
    flexAlign: 'center center',
    gap: 'Z'
  },

  logo: {
    proto: Img,
    props: { src: LOGO_PNG }
  },

  h5: {
    proto: Text,
    props: {
      text: 'residence',
      size: 'C'
    }
  }
}
