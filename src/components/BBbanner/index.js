'use strict'
import { Block, Flex, Text } from '@rackai/symbols'

import { zoomInB, zoomOutB, opacityBanner, letterSpacingBanner } from '../../animations'

const style = {
  style: {
    fontFamily: 'Avenir Next',
    minWidth: `${200 / 16}em`,
    color: 'rgba(243, 231, 219, 1)',
    pointerEvents: 'none',
    animationName: opacityBanner,
    animationDuration: '.9s',
    animationTimingFunction: 'ease-in-out',

    '> caption': {
      fontWeight: 'bold',
      opacity: '.75',
      '> span': {
        animationDuration: '1s',
        animationTimingFunction: 'ease-in-out'
      },
      '> span:first-child': {
        animationName: zoomOutB
      },
      '> span:last-child': {
        animationName: zoomInB
      }
    },

    '> h5': {
      textTransform: 'uppercase',
      letterSpacing: '6.5px',
      opacity: '.45',
      fontWeight: 500,
      animationName: letterSpacingBanner,
      animationDuration: '1s',
      animationTimingFunction: 'ease-in-out'
    }
  }
}

export default {
  proto: [Block, style],
  props: {
    flexFlow: 'column',
    flexAlign: 'center center'
  },

  caption: {
    proto: Block,
    props: { flexAlign: 'center center' },
    childProto: {
      tag: 'span',
      proto: [Block, Text],
      props: {
        size: 'H'
      }
    },
    ...[
      { props: { text: 'B' } },
      { props: { text: 'B' } }
    ]
  },

  h5: {
    proto: Text,
    props: {
      text: 'residence',
      size: 'B'
    }
  }
}
