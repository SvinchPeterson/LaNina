'use strict'

import { Flex, Img } from 'smbls'

import LEFT_ARROW_PNG from '../assets/icons/arrowsDouble-left.png'
import RIGHT_ARROW_PNG from '../assets/icons/arrowsDouble-right.png'

const props = {
  align: 'center center',
  width: 'fit-content',
  gap: 'Z',
  style: {
    '> img': { height: `${16 / 16}em` }
  },

  lefts: { src: LEFT_ARROW_PNG },
  title: {
    fontSize: 'A',
    // fontWeight: '700',
    style: { letterSpacing: '2px' }
  },
  rights: { src: RIGHT_ARROW_PNG }

}

export const ScrollTitle = {
  extend: Flex,
  props,

  lefts: { extend: Img },
  title: { text: 'scroll' },
  rights: { extend: Img }
}
