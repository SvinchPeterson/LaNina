'use strict'

import { deopacity } from '../animations'

export const properties = {
  position: 'relative',
  background: 'cream2',
  flow: 'column',
  width: '100%',
  height: '100%',
  style: {
    flex: 1,
    overflowX: 'hidden',
    overflowY: 'auto',
    scrollBehavior: 'smooth',
    '::-webkit-scrollbar': { display: 'none' }
  },

  ':after': {
    content: '""',
    boxSize: '100% 100%',
    background: 'linear-gradient(rgba(0 , 0, 0, 1), rgba(0, 0, 0, 1))',
    opacity: '0',
    position: 'absolute',
    pointerEvens: 'none',
    zIndex: '2',
    style: {
      animationName: deopacity,
      animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)',
      animationDuration: '5s'
    }
  }
}
