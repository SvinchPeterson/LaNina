'use strict'

import { Link, Img, Flex } from 'smbls'

export const props = {
  height: 'G1',
  position: 'relative',
  overflow: 'hidden',
  flow: 'column',
  align: 'center center',
  gap: 'C2',
  round: 'F',
  flex: 1,
  cursor: 'pointer',
  boxSizing: 'border-box',
  color: 'cream2',
  style: {
    transition: 'flex .6s linear'
  },
  ':hover': { flex: '5.5' },
  ':hover > p': {
    opacity: '1',
    transition: 'opacity .55s ease-in-out'
  },
  ':hover > h2': {
    style: {
      '@media only screen and (min-width: 1281px)': {
        opacity: '1',
        letterSpacing: '-2px',
        transition: 'opacity .55s ease-in-out, letter-spacing .55s ease-in-out, transform .55s ease-in-out',
        transform: 'scale(1)'
      }
    }
  },

  image: {
    boxSize: '100% 100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    overflow: 'hidden',
    zIndex: '1',
    top: '0',
    left: '0',
    round: 'F',
    style: {
      '@media only screen and (min-width: 1281px)': { backgroundAttachment: 'fixed' },
      backgroundRepeat: 'no-repeat',
      boxShadow: 'inset 0px 0px .5px 0.5px rgba(0, 0, 0, .5)'
    }
  },

  icon: {
    zIndex: '2',
    boxSize: 'B B'
  },
  p: {
    zIndex: '2',
    textAlign: 'center',
    width: 'G',
    fontWeight: '400',
    opacity: '0',
    fontSize: 'B',
    letterSpacing: '.3px'
  },
  title: {
    zIndex: '2',
    fontSize: 'F',
    textTransform: 'capitalize',
    whiteSpace: 'nowrap',
    opacity: '0',
    transform: 'scale(.9)',
    margin: '- - -Y1 -'
  }
}

export const RoomTab = {
  extend: [Link, Flex],
  props,

  on: {
    click: (event, element, state) => {
      state.update({ activeTab: element.key, back: true })
    }
  },

  image: {},
  icon: { extend: Img },
  p: {},
  title: { tag: 'h2' }
}
