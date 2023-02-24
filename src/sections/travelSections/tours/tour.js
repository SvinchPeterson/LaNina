'use strict'

import { Flex } from 'smbls'

import { opacityScale } from '../../../animations'

const props = {
  boxSize: '100% 80%',
  maxWidth: '1440px',
  borderTop: '1px solid gray',
  backgroundSize: 'cover',
  position: 'absolute',
  background: 'rgba(229, 249, 252, .3)',
  margin: 'E - - -',
  padding: '- - - -',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) scale(1)',
  zIndex: '10',
  style: {
    boxSizing: 'border-box',
    backgroundAttachment: 'fixed',
    animationName: opacityScale,
    animationDuration: '.5s',
    animationTimingFunction: 'cubic-bezier(.17,.67,.99,1)'
  },
  ':after': {
    content: '""',
    width: '100%',
    height: `${100 / 16}em`,
    // background: 'red',
    background: 'linear-gradient(to top, rgba(229, 249, 252, 1) 0%,rgba(229, 249, 252, 0) 100%)',
    position: 'absolute',
    bottom: `${100 / 16}em`,
    left: '0',
    style: { pointerEvents: 'none' },
    '@mobileM': { bottom: '50px' }
  },
  '@tabletM': {
    boxSize: '100% 90%'
  },
  '@tabletS': {
    boxSize: '100% 95%'
  },
  '@MobileL': { boxSize: '100% 100%' },
  '@mobileM': {
    margin: 'D1 - - -'
  },

  title: {
    fontSize: 'D',
    fontWeight: '100',
    textTransform: 'uppercase',
    position: 'absolute',
    color: 'black',
    top: '-B',
    gap: 'Y1',
    zIndex: '3',
    // '@mobileS': { fontSize: 'B' },
    style: { whiteSpace: 'nowrap' },
    span: {
      text: 'daily',
      fontWeight: '700',
      display: 'block'
    },
    text: 'tours'
  },

  tours: {
    flow: 'column',
    gap: 'D',
    align: 'center flex-start',
    style: {
      // overflowY: 'auto',
      // scrollBehavior: 'smooth',
    },
    maxHeight: '100%',
    padding: '- - F -',
    margin: '0 - - -',
    '::-webkit-scrollbar': { display: 'none' }
  }
}

export const tour = {
  props,

  title: { extend: Flex, span: {} },
  tours: { extend: Flex }
}
