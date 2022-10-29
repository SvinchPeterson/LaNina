'use strict'

import { Flex } from 'smbls'

import { opacityScale } from '../../../animations'

const props = {
  boxSize: '100% 80%',
  maxWidth: '1440px',
  borderTop: '1px solid silver',
  backgroundSize: 'cover',
  position: 'absolute',
  margin: 'E1 - - -',
  padding: 'C - C -',
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
    height: '0',
    // background: 'red',
    position: 'absolute',
    bottom: '100px',
    left: '0',
    style: { boxShadow: '0px 0px 120px 100px #1e3447' }
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
    style: { overflowY: 'auto', scrollBehavior: 'smooth' },
    maxHeight: '100%',
    padding: '- - F -',
    '::-webkit-scrollbar': { display: 'none' }
    // '@mobileL': { gap: '0' }
  }
}

export const tour = {
  props,

  title: { extend: Flex, span: {} },
  tours: { extend: Flex }
}
