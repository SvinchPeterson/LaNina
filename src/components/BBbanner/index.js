'use strict'
import { Block, Text, Img } from '@rackai/symbols'

import { zoomOutB, opacityBanner, letterSpacingBanner } from '../../animations'
import LOGO_PNG from '../../assets/logoBB.png'

const style = {
  style: {
    fontFamily: 'Avenir Next',
    minWidth: `${200 / 16}em`,
    pointerEvents: 'none',

    animationName: opacityBanner,
    animationDuration: '.9s',
    animationTimingFunction: 'ease-in-out',

    '> img': {
      width: `${100 / 16}em`,
      opacity: '.75',

      animationName: zoomOutB,
      animationDuration: '1.4s',
      animationTimingFunction: 'ease-in-out'
    },

    '> h5': {
      textTransform: 'uppercase',
      letterSpacing: '2px',
      fontWeight: 700,
      color: 'rgba(244, 233, 217, .5)',

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
    gap: 'Y'
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
