'use strict'

import { Flex, Img } from 'smbls'

import LEFT_ARROW_PNG from '../assets/icons/arrowsDouble-left-orange.png'
import RIGHT_ARROW_PNG from '../assets/icons/arrowsDouble-right-orange.png'

const props = {
  align: 'center center',
  width: 'fit-content',
  gap: 'Y',
  style: {
    '> img': { height: `${8.5 / 16}em` }
  },

  lefts: { src: LEFT_ARROW_PNG },
  title: {
    fontSize: `${9 / 16}em`,
    textTransform: 'uppercase',
    margin: '-V2 - - -',
    fontWeight: '700',
    opacity: '.75',
    style: { letterSpacing: '1px' }
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
