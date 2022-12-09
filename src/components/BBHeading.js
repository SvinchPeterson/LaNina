'use strict'

import { Flex, Img } from 'smbls'
import { Title } from './Title'

import { opacity, opacityLetterSpacing } from '../animations'

// import LOGO_BIG_PNG from '../assets/icons/logoBig.png'
import LOGO_PNG from '../assets/icons/logoCream.png'

const props = {
  align: 'center center',

  gap: 'Y1',
  zIndex: '3',
  style: {
    animationName: opacity,
    animationDuration: '3s',
    animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
  },

  logo: {
    boxSize: 'B1 ',
    opacity: '.85',
    src: LOGO_PNG
  },

  title: {
    fontSize: 'A',
    color: 'white .95',
    fontWeight: '400',
    textTransform: 'uppercase',
    style: {
      letterSpacing: '1.4px',
      animationName: opacityLetterSpacing,
      animationDuration: '2s',
      animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
    },
    text: 'hospitality'
  }

}

export const BBHeading = {
  extend: Flex,
  props,

  logo: { extend: Img },
  title: { extend: Title }
}
