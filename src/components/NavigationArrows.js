'use strict'
import { Img, Flex } from 'smbls'

import LEFT_ARROW_BLACK_PNG from '../assets/icons/arrow-left-black.png'
import RIGHT_ARROW_BLACK_PNG from '../assets/icons/arrow-right-black.png'
import LEFT_ARROW_CREAM_PNG from '../assets/icons/arrow-left-cream.png'
import RIGHT_ARROW_CREAM_PNG from '../assets/icons/arrow-right-cream.png'

const props = {
  align: 'center space-between',
  maxWidth: 'fit-content',
  height: 'fit-content',
  position: 'relative',
  gap: 'B',
  childProps: {
    boxSize: 'C1 C1',
    round: '100%',
    background: 'transparent',
    opacity: '.75',
    transition: 'opacity .25s ease, background .25s ease',

    ':hover': { opacity: '1' },
    style: { cursor: 'pointer' },
    arrow: {
      alignSelf: 'center',
      boxSize: ' A',
      transition: 'transform .25s ease',
    }
  }
}

export const NavArrows = {
  extend: Flex,
  props,
  childExtend: { tag: 'button', arrow: { extend: Img } }
}

export const NavArrowsBlack = {
  extend: NavArrows,
  props: {
    childProps: {
      border: 'solid, black .75',
      borderWidth: '.35px',
      ':hover': { '@minTabletL': { background: 'black .025' } },
      ':hover > img': { '@minTabletL': { transform: 'scale(1.1)' } }

    }
  },
  ...[
    { arrow: { props: { src: LEFT_ARROW_BLACK_PNG } } },
    { arrow: { props: { src: RIGHT_ARROW_BLACK_PNG } } }
  ]
}

export const NavArrowsCream = {
  extend: NavArrows,
  props: {
    childProps: {
      border: 'solid, cream .75',
      borderWidth: '.55px',
      ':hover': { '@minTabletL': { background: 'cream .025' } },
      ':hover > img': { '@minTabletL': { transform: 'scale(1.1)' } }
    }
  },
  ...[
    { arrow: { props: { src: LEFT_ARROW_CREAM_PNG } } },
    { arrow: { props: { src: RIGHT_ARROW_CREAM_PNG } } }
  ]
}