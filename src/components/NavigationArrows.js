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

const props = {
  align: 'center space-between',
  gap: 'C1',
  position: 'relative',
  maxWidth: 'fit-content',
  height: 'fit-content',
  // border: '2px solid red',
  ':after': {
    content: '""',
    boxSize: '60% 2px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    round: '100%'
  },

  childProps: {
    background: 'transparent',
    border: 'none',
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

export const NavHorizontalArrowsCream = {
  extend: navigationHorizontalArrows,
  props: { ':after': { background: 'cream2' } },

  ...[
    { props: { arrow: { src: LEFT_ARROW_CREAM_PNG } } },

    { props: { arrow: { src: RIGHT_ARROW_CREAM_PNG } } }
  ]
}
