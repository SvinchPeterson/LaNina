'use strict'

import { Link, Img, Flex } from 'smbls'

const props = {
  width: 'E',
  height: 'G',
  flow: 'column',
  position: 'relative',
  round: 'F2',
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'space-between',
  flex: '1',
  cursor: 'pointer',
  gap: 'C',
  border: 'solid, transparent',
  borderWidth: `B`,
  padding: 'B - B -',
  childProps: { ':not(:nth-child(1))': { zIndex: '5' } },
   ':after': {
    content: '""',
    position: 'absolute',
    boxSize: '100% 100%',
    zIndex: '4',
    top: '0',
    left: '0',
    round: 'F2',
    background: 'naviGreen .5'
  },
  ':last-child > p': { color: 'orange' },
  '@minTabletL': {
    transition: 'flex 1s ease',
    ':hover': { flex: '12' },
    ':hover:last-child > h3': { opacity: '.6' },
    ':hover > p': {
       opacity: '1',
       transition: 'opacity 1s ease-in-out'
    },
    ':hover > h3': {
      opacity: '1',
      letterSpacing: `${-2 / 33}em`,
      transition: 'opacity 1s ease-in-out, letter-spacing 1s ease-in-out',
    },
  },
  '@maxTabletL': {
    minWidth: 'F',
    justifyContent: 'center',
    ':last-child > p': {
      display: 'block',
      opacity: '1',
      // width: 'C'
    }
  },
  backImage: {
    boxSize: '100% 100%',
    position: 'absolute',
    top: '0',
    left: '0',
    round: 'F2',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: 'solid, orange',
    borderWidth: '.5px',
    '@minTabletL': { style: { backgroundAttachment: 'fixed' } }
  },

  icon: {
    boxSize: 'A1 '
  },
  p: {
    fontSize: `${14.5 / 16}em`,
    fontWeight: '400',
    textAlign: 'center',
    width: `${240 / 14.5}em`,
    margin: '0',
    opacity: '0',
    color: 'cream .75',
    style: { fontStyle: 'italic'},
    '@maxTabletL': { display: 'none' }
  },
  title: {
    textTransform: 'capitalize',
    opacity: '0',
    letterSpacing: '0',
    textAlign: 'center',
    color: 'cream',
    lineHeight: `${35 / 33}em`,
    whiteSpace: 'nowrap',
    fontWeight: '700'
  }
}

export const RoomTab = {
  extend: [Link, Flex],
  props,

  backImage: {},
  icon: { extend: Img },
  p: {},
  title: { tag: 'h3' }
}
