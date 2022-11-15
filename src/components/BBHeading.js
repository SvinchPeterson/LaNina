'use strict'

import { Flex, Img } from 'smbls'
import { Title } from './Title'

import { opacity, opacityLetterSpacing } from '../animations'

import LOGO_BIG_PNG from '../assets/icons/logoBig.png'

const props = {
  align: 'center center',

  gap: 'Y1',
  padding: '- - - -',
  alignSelf: 'flex-start',
  zIndex: '3',
  style: {
    animationName: opacity,
    animationDuration: '3s',
    animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
  },

  logo: {
    boxSize: 'C ',
    opacity: '.75',
    src: LOGO_BIG_PNG,
    '@mobileS': {
      boxSize: 'B2 '
    }
  },

  title: {
    fontSize: 'A',
    color: 'cream2 .45',
    fontWeight: '400',
    textTransform: 'uppercase',
    style: {
      letterSpacing: '2.5px',
      animationName: opacityLetterSpacing,
      animationDuration: '2s',
      animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
    },
    span: {
      text: 'H',
      fontSize: 'A',
      height: '0',
      overflow: 'hidden'
    },
    text: 'ospitality'
  }

}

export const BBHeading = {
  extend: Flex,
  props,

  logo: { extend: Img },
  title: { extend: Title }
}
