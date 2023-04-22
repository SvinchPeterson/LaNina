'use strict'

import { Flex, Img } from 'smbls'

import LEFT_ARROW_PNG from '../assets/icons/arrowsDouble-left-orange.png'
import RIGHT_ARROW_PNG from '../assets/icons/arrowsDouble-right-orange.png'

import LEFT_ARROW_BLACK_PNG from '../assets/icons/arrowsDouble-left.png'
import RIGHT_ARROW_BLACK_PNG from '../assets/icons/arrowsDouble-right.png'

import LEFT_ARROW_CREAM_PNG from '../assets/icons/arrowsDouble-left-cream.png'
import RIGHT_ARROW_CREAM_PNG from '../assets/icons/arrowsDouble-right-cream.png'

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

export const ScrollTitle2 = {
  extend: ScrollTitle,
  props: {
    lefts: { src: LEFT_ARROW_BLACK_PNG },
    rights: { src: RIGHT_ARROW_BLACK_PNG }
  }
}


export const ScrollTitle3 = {
  extend: ScrollTitle,
  props: {
    lefts: { src: LEFT_ARROW_CREAM_PNG },
    rights: { src: RIGHT_ARROW_CREAM_PNG }
  }
}
