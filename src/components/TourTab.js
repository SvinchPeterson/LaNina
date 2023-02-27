'use strict'

import { Flex, Link } from 'smbls'

const props = {
  // boxSize: 'G1 H1',
  minWidth: `H1`,
  minHeight: 'G1',
  align: 'center center',
  position: 'relative',
  opacity: '1',
  overflow: 'hidden !important',
  border: 'solid, naviBlue 0',
  // round: '0 0 H2 H2',
  borderWidth: `${5 / 16}em`,

  style: {
    cursor: 'pointer',
    transition: 'transform 1s ease'
  },
  ':hover h5': {
    transform: 'scale(1)',
    letterSpacing: '-1px'
  },
  ':hover > div': { backgroundPosition: 'top left', transform: 'scale(1.1)' },

  image: {
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    minWidth: `100%`,
    minHeight: '100%',
    position: 'relative',
    overflow: 'hidden',
    transform: 'scale(1)',
    boxShadow: '0 0 10px 1px black',
    // round: '0 0 H2 H2',
    // border: 'solid, white .35',
    // borderWidth: '1px',
    style: {
      transition: 'background-position 1s ease-in-out, transform 1s ease-in-out',
      backgroundRepeat: 'no-repeat'
    },
    // border: 'solid, silver',
    // borderWidth: '1px',

    ':hover:after': { opacity: '.9' },
    ':after': {
      content: '""',
      boxSize: '100% 100%',
      background: 'linear-gradient(rgba(15, 49, 61, .2), rgba(15, 49, 61, 1))',
      position: 'absolute',
      top: '0',
      left: '0',
      opacity: '1',
      style: {
        transition: 'opacity .5s ease-in-out'
      }
    },

    title: {
      fontSize: 'F',
      fontWeight: '100',
      zIndex: '200',
      textTransform: 'capitalize',
      color: 'cream2',
      padding: '- - ',
      transform: 'scale(.9)',
      // width: '100%',
      whiteSpace: 'nowrap',
      position: 'absolute',
      // border: 'solid, naviBlue',
      // borderWidth: '0 0 5px 0',
      margin: '0',
      bottom: 'A',
      right: 'B',
      // letterSpacing: '-1px',
      // lineHeight: '30px',
      // transform: 'translate(-50%, -50%)',
      style: {
        backdropFilter: 'blur(.8px)',
        transition: 'transform .5s ease-in-out, letter-spacing .5s ease-in-out'
      }
    }
  }
}

export const TourTab = {
  extend: [Link, Flex],
  props,

  image: {
    title: { tag: 'h5' }
  }
}
