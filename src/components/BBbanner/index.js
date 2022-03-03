'use strict'
import { Block, Text, Img } from '@rackai/symbols'

import { zoomInB, zoomOutB, opacityBanner, letterSpacingBanner } from '../../animations'
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
      // width: `${70 / 16}em`,
      width: `${80 / 16}em`,
      opacity: '.4',
      animationName: zoomOutB,
      animationDuration: '1.4s',
      animationTimingFunction: 'ease-in-out'
    },

    '> h5': {
      textTransform: 'uppercase',
      letterSpacing: '5px',
      fontWeight: 700,
      animationName: letterSpacingBanner,
      animationDuration: '1.3s',
      animationTimingFunction: 'ease-in-out',
      color: 'rgba(244, 233, 217, .4)'
    }
  }
}

export default {
  proto: [Block, style],
  props: {
    flexFlow: 'column',
    flexAlign: 'center center',
    gap: 'A'
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
