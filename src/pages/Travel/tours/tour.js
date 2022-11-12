'use strict'

import { Flex } from 'smbls'

import { opacityScale } from '../../../animations'

const props = {
  boxSize: '100% 80%',
  // border: '4px solid red',
  maxWidth: '1440px',
  borderTop: '1px solid silver',
  backgroundSize: 'cover',
  position: 'absolute',
  margin: 'E - - -',
  padding: '- - C -',
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
  ':before': {
    content: '""',
    width: '100%',
    height: `${100 / 16}em`,
    // background: 'red',
    background: 'linear-gradient(to bottom, rgba(30, 98, 123, 1) 0%,rgba(30, 98, 123, 0) 100%)',
    position: 'absolute',
    top: `0`,
    left: '0',
    zIndex: '3',
    style: { pointerEvents: 'none' }
  },
  ':after': {
    content: '""',
    width: '100%',
    height: `${200 / 16}em`,
    // background: 'red',
    background: 'linear-gradient(to top, rgba(30, 98, 123, 1) 0%,rgba(30, 98, 123, 0) 100%)',
    position: 'absolute',
    bottom: `${100 / 16}em`,
    left: '0',
    style: { pointerEvents: 'none' }
  },
  '@tabletM': {
    boxSize: '100% 90%'
  },

  title: {
    fontSize: 'D',
    fontWeight: '100',
    textTransform: 'uppercase',
    position: 'absolute',
    color: 'cream2',
    top: '-B',
    gap: 'Y1',
    zIndex: '3',
    '@mobileS': { fontSize: 'B' },
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
    gap: 'E',
    align: 'center flex-start',
    style: {
      overflowY: 'auto',
      scrollBehavior: 'smooth',
      '> div:first-child': { paddingTop: `${100 / 16}em` }
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
