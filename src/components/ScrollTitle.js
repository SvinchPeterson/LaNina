'use strict'

import { Flex, Img } from 'smbls'

import LEFT_ARROW_BLACK_PNG from '../assets/icons/arrowsDouble-left.png'
import RIGHT_ARROW_BLACK_PNG from '../assets/icons/arrowsDouble-right.png'

import LEFT_ARROW_CREAM_PNG from '../assets/icons/arrowsDouble-left-cream.png'
import RIGHT_ARROW_CREAM_PNG from '../assets/icons/arrowsDouble-right-cream.png'

const props = {
  align: 'center center',
  width: 'fit-content',
  gap: 'Y',
  style: {
    '> img': { height: `${10 / 16}em` }
  },

  title: {
    fontSize: `${9 / 16}em`,
    textTransform: 'uppercase',
    margin: '- - - -',
    fontWeight: '700',
    opacity: '.75',
    style: { letterSpacing: '1px' }
  },
}

const ScrollTitle = {
  extend: Flex,
  props,

  lefts: { extend: Img },
  title: { text: 'scroll' },
  rights: { extend: Img }
}

export const ScrollTitleBlack = {
  extend: ScrollTitle,
  props: {
    lefts: { src: LEFT_ARROW_BLACK_PNG },
    rights: { src: RIGHT_ARROW_BLACK_PNG }
  }
}


export const ScrollTitleCream = {
  extend: ScrollTitle,
  props: {
    lefts: { src: LEFT_ARROW_CREAM_PNG },
    rights: { src: RIGHT_ARROW_CREAM_PNG }
  }
}
