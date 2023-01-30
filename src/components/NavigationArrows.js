'use strict'
import { Box, Img, Flex } from 'smbls'
import LEFT_ARROW_BLACK_PNG from '../assets/icons/leftArrow-black.png'
import RIGHT_ARROW_BLACK_PNG from '../assets/icons/rightArrow-black.png'
import DOWN_ARROW_BLACK_PNG from '../assets/icons/downArrow-black.png'
import UP_ARROW_BLACK_PNG from '../assets/icons/upArrow-black.png'

import LEFT_ARROW_CREAM_PNG from '../assets/icons/leftArrow-cream.png'
import RIGHT_ARROW_CREAM_PNG from '../assets/icons/rightArrow-cream.png'
import DOWN_ARROW_CREAM_PNG from '../assets/icons/downArrow-cream.png'
import UP_ARROW_CREAM_PNG from '../assets/icons/upArrow-cream.png'

import LEFT_ARROW_WHITE_PNG from '../assets/icons/leftArrow-white.png'
import RIGHT_ARROW_WHITE_PNG from '../assets/icons/rightArrow-white.png'

import LEFT_ARROW_BLUE_PNG from '../assets/icons/leftArrow-blue.png'
import RIGHT_ARROW_BLUE_PNG from '../assets/icons/rightArrow-blue.png'

const props = {
  align: 'center space-between',
  gap: 'C',
  position: 'relative',
  maxWidth: 'fit-content',
  height: 'fit-content',
  ':after': {
    content: '""',
    boxSize: '60% 2px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    round: 'C',
    opacity: '.85'
  },

  childProps: {
    background: 'transparent',
    border: 'none',
    opacity: '.75',
    ':hover': { opacity: '1' },
    style: { cursor: 'pointer' },
    arrow: {
      alignSelf: 'center',
      boxSize: ' Z2'
    }
  }
}

const navigationHorizontalArrows = {
  extend: Flex,
  props,
  childExtend: { tag: 'button', arrow: { extend: [Img, Box] } }
}

const navigationVerticalArrows = {
  extend: navigationHorizontalArrows,
  props: {
    flow: 'column',
    ':after': { boxSize: '2px 45%' },
    childProps: { arrow: { boxSize: ' B' } }
  }
}

export const NavVerticalArrowsBlack = {
  extend: navigationVerticalArrows,
  props: { ':after': { background: 'black' } },

  ...[
    { props: { arrow: { src: UP_ARROW_BLACK_PNG } } },

    { props: { arrow: { src: DOWN_ARROW_BLACK_PNG } } }
  ]
}

export const NavVerticalArrowsCream = {
  extend: navigationVerticalArrows,
  props: { ':after': { background: 'cream2' } },

  ...[
    { props: { arrow: { src: UP_ARROW_CREAM_PNG } } },

    { props: { arrow: { src: DOWN_ARROW_CREAM_PNG } } }
  ]
}

export const NavHorizontalArrowsBlack = {
  extend: navigationHorizontalArrows,
  props: { ':after': { background: 'black' } },

  ...[
    { props: { arrow: { src: LEFT_ARROW_BLACK_PNG } } },

    { props: { arrow: { src: RIGHT_ARROW_BLACK_PNG } } }
  ]
}

export const NavHorizontalArrowsWhite = {
  extend: navigationHorizontalArrows,
  props: { ':after': { background: 'black' } },

  ...[
    { props: { arrow: { src: LEFT_ARROW_WHITE_PNG } } },

    { props: { arrow: { src: RIGHT_ARROW_WHITE_PNG } } }
  ]
}

export const NavHorizontalArrowsCream = {
  extend: navigationHorizontalArrows,
  props: { ':after': { background: 'cream2' } },

  ...[
    { props: { arrow: { src: LEFT_ARROW_CREAM_PNG } } },

    { props: { arrow: { src: RIGHT_ARROW_CREAM_PNG } } }
  ]
}

export const NavHorizontalArrowsBlue = {
  extend: navigationHorizontalArrows,
  props: { ':after': { background: 'cream2' } },

  ...[
    { props: { arrow: { src: LEFT_ARROW_BLUE_PNG } } },

    { props: { arrow: { src: RIGHT_ARROW_BLUE_PNG } } }
  ]
}

// rgba(189, 216, 246, 1)
