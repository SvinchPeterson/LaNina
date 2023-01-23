'use strict'

import { Flex, Img, Link } from 'smbls'
import { Title } from './Title'

import { opacity, opacityLetterSpacing } from '../animations'

// import LOGO_BIG_PNG from '../assets/icons/logoBig.png'
import LOGO_PNG from '../assets/icons/logo-white.png'
import BACK_PNG from '../assets/icons/arrowBack-white.png'

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
    position: 'relative',
    flow: 'column',
    align: 'center center',
    width: 'fit-content',
    img: {
      boxSize: 'B ',
      opacity: '.85',
      src: LOGO_PNG,
      ':hover': { opacity: '1' }
    }
  }

}

export const BBHeading = {
  extend: Flex,
  props,

  logo: {
    extend: Flex,
    img: { extend: Img }
  }
}
