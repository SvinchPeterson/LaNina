'use strict'

import { Flex, Img } from 'smbls'
import { Title } from './Title'

import LOGO_BIG_PNG from '../assets/icons/logoBig.png'

const props = {
  align: 'center center',
  gap: 'Z',

  logo: {
    src: LOGO_BIG_PNG,
    boxSize: 'B2 ',
    opacity: '.75'
  },

  title: {
    color: 'cream2',
    fontSize: 'G',
    fontWeight: '100'
    // style: { letterSpacing: '3px' }
  }
}

export const BBHeading = {
  extend: Flex,
  props,

  logo: { extend: Img },
  title: { extend: Title }
}
