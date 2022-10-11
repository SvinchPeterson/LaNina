'use strict'

import { Flex, Img } from 'smbls'

import { opacity } from './animations'
import { Title } from '../../components'

import LOGO_BIG_PNG from '../../assets/icons/logoBig.png'

const props = {
  align: 'center center',
  gap: 'A1',
  style: {
    animationName: opacity,
    animationDuration: '5s',
    animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
  },
  '@mobileL': { flow: 'column', gap: '0' },

  logo: {
    src: LOGO_BIG_PNG,
    boxSize: 'C2 ',
    '@mobileS': { boxSize: 'C ' }
  },

  title: {
    color: 'cream2',
    fontSize: 'H',
    '@mobileS': { fontSize: 'G' }
  }
}

export default {
  extend: Flex,
  props,

  logo: { extend: Img },
  title: { extend: Title }
}
