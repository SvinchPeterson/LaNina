'use strict'

import { deopacity } from '../animations'

export const properties = {
  position: 'relative',
  background: 'cream',
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
  ':before': {
    content: '""',
    position: 'fixed',
    boxSize: '46.41px 90%',
    top: '0',
    zIndex: '40',
    alignSelf: 'center',
    round: '0 0 A1 A1',
    style: { backdropFilter: 'blur(5px)'}
  },

  ':after': {
    content: '""',
    boxSize: '100% 100%',
    background: 'linear-gradient(rgba(0 , 0, 0, 1), rgba(0, 0, 0, 1))',
    opacity: '0',
    position: 'absolute',
    pointerEvents: 'none',
    zIndex: '2',
    display: 'none',
    style: {
      animationName: deopacity,
      animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)',
      animationDuration: '5s'
    }
  }
}
