'use strict'

import { Flex, Img } from 'smbls'
import { Title } from './Title'

import LOGO_BIG_PNG from '../assets/icons/logoBig.png'

const props = {
  align: 'center center',
  gap: 'A',

  logo: {
    src: LOGO_BIG_PNG,
    boxSize: 'C ',
    opacity: '.75'
  },

  title: {
    color: 'cream2',
    fontSize: 'G',
    fontWeight: '100',
    style: { letterSpacing: '3px' }
    // textTransform: 'uppercase'
  }
}

export const BBHeading = {
  extend: Flex,
  props,

  logo: { extend: Img },
  title: { extend: Title }
}
