'use strict'

import { Flex, Link } from 'smbls'

const props = {
  minWidth: `G1`,
  minHeight: 'G3',
  cursor: 'pointer',
  border: 'solid, naviBlue 0',
  borderWidth: `${10 / 16}em`,
  content: {
    flow: 'column',
    align: 'center space-between',
    boxSize: '100% 100%',
    border: 'solid, cream2 .5',
    borderWidth: `${0.5 / 16}em`,
    round: '0 0 F F',
    padding: 'B - C -',
    ':hover > div': {
      backgroundPosition: 'top left',
      ':after': { opacity: '.65' }
    },
    ':hover > h5': { color: 'orange3', transform: 'scale(1.05)' },
    style: { backdropFilter: 'blur(1px)' },

    title: {
      textTransform: 'capitalize',
      color: 'cream2',
      fontSize: 'D',
      fontWeight: '100',
      transition: 'color 1s ease, transform 1s ease'
    },

    image: {
      position: 'relative',
      boxSize: 'F3 F3',
      round: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      transition: 'background-position 1s ease',
      overflow: 'hidden',
      ':after': {
        content: '""',
        position: 'absolute',
        boxSize: '100% 100%',
        top: '0',
        left: '0',
        round: '100%',
        background: 'linear-gradient(rgba(15, 49, 61, 0), rgba(15, 49, 61, 1))',
        transition: 'opacity 1s ease-in-out'
      }
    }
  }
}

export const TourTab = {
  extend: [Link, Flex],
  props,

  content: {
    extend: Flex,
    title: { tag: 'h5' },
    image: {}
  }
}
