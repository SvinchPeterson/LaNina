'use strict'

import { Flex, Link } from 'smbls'

const props = {
  minWidth: `G2`,
  align: 'center center',
  position: 'relative',
  opacity: '1',
  overflow: 'hidden !important',
  border: 'solid, naviBlue 0',
  round: 'B2 B2 G G',
  borderWidth: `${10 / 16}em`,
  style: {
    cursor: 'pointer'
  },
  ':hover h5': {
    transform: 'scale(.95)',
    letterSpacing: '-1px'
  },
  ':hover > div': { backgroundPosition: 'top left' },

  image: {
    // round: 'B1',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom right',
    minWidth: `100%`,
    minHeight: 'G1',
    position: 'relative',
    overflow: 'hidden',
    transform: 'scale(1)',
    style: {
      transition: 'background-position 1s ease-in-out, transform 1s ease-in-out',
      backgroundRepeat: 'no-repeat'
      // boxShadow: 'inset 0 0 10px 3px rgba(0, 0, 0, .85)'
    },
    // border: 'solid, silver',
    // borderWidth: '1px',

    ':hover:after': { opacity: '.7' },
    ':after': {
      content: '""',
      boxSize: '100% 100%',
      background: 'linear-gradient(rgba(30, 40, 49, .5), rgba(30, 40, 49, 1))',
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
      fontWeight: '700',
      zIndex: '200',
      textTransform: 'capitalize',
      color: 'cream2',
      padding: '- - ',
      // width: '100%',
      whiteSpace: 'nowrap',
      position: 'absolute',
      // border: 'solid, naviBlue',
      // borderWidth: '0 0 5px 0',
      margin: '0',
      bottom: 'A',
      right: 'A2',
      lineHeight: '30px',
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
