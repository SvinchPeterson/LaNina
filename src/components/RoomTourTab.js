'use strict'

import { Link, Img, Flex } from 'smbls'

const props = {
  width: 'G',
  padding: 'E -',
  flow: 'column',
  gap: 'C',
  round: 'F',
  align: 'center center',
  color: 'cream',
  overflow: 'hidden',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  border: 'solid, transparent',
  borderWidth: `A`,
  flex: '1',
  cursor: 'pointer',
  '@minTabletL': {
    transition: 'flex 1s ease',
    ':hover': { flex: '2' },
    ':hover > p': {
       opacity: '1',
       transition: 'opacity 1s ease-in-out'
      },
    ':hover > h3': {
      opacity: '1',
      letterSpacing: `${-2 / 33}em`,
      transition: 'opacity 1s ease-in-out, letter-spacing 1s ease-in-out',
    }
  },

  '@maxTabletL': {
    padding: 'D1 -',
    gap: 'F'
  },
  '@maxTabletS': {},

  '@maxMobileL': {
    width: '85%',
    gap: 'B2 !important'
  },
  style: {
    boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
  },
  ':after': {
    content: '""',
    position: 'absolute',
    boxSize: '100% 100%',
    background: 'naviGreen .5',
    zIndex: '4'
  },

  childProps: {
    ':not(:nth-child(1))': { zIndex: '5' }
  },

  image: {
    boxSize: '100% 100%',
    position: 'absolute',
    top: '0',
    left: '0',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    '@minTabletL': { style: { backgroundAttachment: 'fixed' } }
  },
  icon: { boxSize: 'A2 '},
  p: {
    fontSize: `${14.5 / 16}em`,
    fontWeight: '400',
    textAlign: 'center',
    maxWidth: 'F2',
    opacity: '0',
    style: { fontStyle: 'italic'},
    '@maxTabletL': { display: 'none' }
  },
  title: {
    textTransform: 'capitalize',
    fontSize: 'E',
    opacity: '0',
    letterSpacing: '0',
    textAlign: 'center',
    '@maxTabletL': {
      opacity: '1',
      letterSpacing: `${-2 / 33}em`
    }
  }
}

export const RoomTourTab = {
  extend: [Link, Flex],
  props,

  image: {},
  icon: { extend: Img },
  p: {},
  title: { tag: 'h3' }
}
