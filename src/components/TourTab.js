'use strict'

import { Flex, Link } from 'smbls'

const props = {
  // boxSize: 'G J',
  minWidth: 'G2',
  minHeight: 'G2',
  // background: '#1E5E6B',
  // border: '4px solid red',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  background: 'linear-gradient(rgba(30, 98, 123, .85), rgba(30, 98, 123, 1))',
  align: 'center center',
  position: 'relative',
  opacity: '.95',
  round: '0 0 G1 G1',
  overflow: 'hidden',
  '@mobileL': {
    minWidth: 'G',
    minHeight: 'G'
  },
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
  ':not(:last-child):before': {
    content: '""',
    width: '1px',
    height: '95%',
    position: 'absolute',
    top: '50%',
    right: '0',
    background: 'radial-gradient(rgba(248, 241, 227, .45), rgba(248, 241, 227, 0))',
    transform: 'translate(50%, -50%)'
  },
  style: {
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    // backgroundSize: 'contain',
    cursor: 'pointer',
    '@media only screen and (max-width: 1280px)': {
      backgroundAttachment: 'initial'

    },
    '@media only screen and (min-width: 1366px)': {
      '&:hover': {
        opacity: '1',
        transition: 'opacity .3s ease-in-out',
        '> h5': {
          color: 'rgba(248, 241, 227, 1)',
          transform: 'scale(1.01)'
        }
      }
    }
  },

  title: {
    fontSize: `${36 / 16}em`,
    fontWeight: '100',
    textTransform: 'uppercase',
    color: 'white',
    zIndex: '3',
    padding: 'D - - -',
    '@mobileL': { fontSize: 'D' },
    style: {
      letterSpacing: '1.5px',
      transition: 'transform .23s ease-in-out, color .23s ease-in-out, letter-spacing .23s ease-in-out'
    }
  }

}

export const TourTab = {
  extend: [Link, Flex],
  props,

  title: { tag: 'h5' }
}
