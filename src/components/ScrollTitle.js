'use strict'

import { Flex, Img } from 'smbls'

import LEFT_ARROW_PNG from '../assets/icons/leftArrow-black.png'
import RIGHT_ARROW_PNG from '../assets/icons/rightArrow-black.png'

const props = {
  align: 'center center',
  width: 'fit-content',
  gap: 'Z',
  style: {
    '> img': { height: '15px' }
  },

  lefts: { src: LEFT_ARROW_PNG },
  title: {
    fontSize: 'B',
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
