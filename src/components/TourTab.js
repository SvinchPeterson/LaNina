'use strict'

import { Flex, Link } from 'smbls'

const props = {
  minWidth: `${300 / 16}em`,
  minHeight: 'G',
  cursor: 'pointer',
  border: 'solid, naviBlue 0',
  borderWidth: `${16 / 16}em`,
  '@maxHeightXS': {
    minWidth: `G`,
    minHeight: 'G'
  },
  content: {
    flow: 'column',
    align: 'center space-between',
    boxSize: '100% 100%',
    border: 'solid, cream .15',
    borderWidth: `0 ${0.25 / 16}em ${0.25 / 16}em ${0.25 / 16}em`,
    round: 'B B F F',
    padding: 'A - C -',
    background: 'linear-gradient(rgba(248, 241, 227, 0) 30%, rgba(248, 241, 227, .1) 70%)',
    ':hover > div': {
      backgroundPosition: 'top left',
      ':after': { opacity: '.65' }
    },
    ':hover > h5': { color: 'orange3', transform: 'scale(1.05)' },
    style: { backdropFilter: 'blur(.5px)' },

    title: {
      textTransform: 'uppercase',
      color: 'cream',
      fontSize: `${17 / 16}em`,
      letterSpacing: `${3 / 17}em`,
      fontWeight: '100',
      transition: 'color 1s ease, transform 1s ease'
    },

    image: {
      position: 'relative',
      boxSize: 'E2 E2',
      round: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      transition: 'background-position 1s ease-in-out, border 1s ease-in-out',
      overflow: 'hidden',
      style: {  boxShadow: '0 0 30px 0 rgba(0, 0, 0, .35)' },
      '@maxHeightXS': {
        boxSize: 'E2 E2',
      },
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
