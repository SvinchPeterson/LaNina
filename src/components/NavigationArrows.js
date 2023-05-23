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
    fontSize: '1em',
    // fontSize: '16px',
    boxSize: `${42 / 16}em ${42 / 16}em`,
    round: '100%',
    background: 'transparent',
    opacity: '.75',
    transition: 'opacity .25s ease, background .25s ease',
    align: 'center center',

    ':hover': { opacity: '1' },
    style: { cursor: 'pointer' },
    arrow: {
      alignSelf: 'center',
      boxSize: ' Z2',
      transition: 'transform .25s ease'
    }
  }
}

export const NavArrows = {
  extend: Flex,
  props,
  childExtend: {
    tag: 'button',
    extend: Flex,
    arrow: { extend: Img }
  }
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
      style: {border: '.5px solid rgba(255, 249, 237, .5)' },
      ':hover': { '@minTabletL': { background: 'cream .025' } },
      ':hover > img': { '@minTabletL': { transform: 'scale(1.1)' } }
    }
  },
  ...[
    { arrow: { props: { src: LEFT_ARROW_CREAM_PNG } } },
    { arrow: { props: { src: RIGHT_ARROW_CREAM_PNG } } }
  ]
}