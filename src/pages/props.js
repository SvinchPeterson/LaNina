'use strict'

import { deopacity, opacity } from '../animations'

export const properties = {
  position: 'relative',
  background: 'cream',
  flow: 'column',
  height: '100%',
  // ':before': {
  //   content: '""',
  //   position: 'fixed',
  //   boxSize: '46.41px 90%',
  //   top: '0',
  //   zIndex: '40',
  //   alignSelf: 'center',
  //   round: '0 0 A1 A1',
  //   style: { backdropFilter: 'blur(5px)'}
  // },

  ':after': {
    content: '""',
    boxSize: '100% 100%',
    background: 'linear-gradient(rgba(0 , 0, 0, 1), rgba(0, 0, 0, 1))',
    opacity: '0',
    position: 'absolute',
    pointerEvents: 'none',
    zIndex: '2',
    style: {
      animationName: deopacity,
      animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)',
      animationDuration: '5s'
    }
  },

  menuBackground: {
    position: 'fixed',
    width: '90%',
    minHeight: '48px',
    top: '0',
    zIndex: '35',
    alignSelf: 'center',
    background: 'transparent',
    round: '0 0 A2 A2',
    border: 'solid, orange',
    borderWidth: '0 0 1px 0',
    style: {
      animationName: opacity,
      animationDuration: '2s',
      animationTimingFunction: 'ease-in-out',
    }
  },

  menuBackImage: {
    backgroundColor: 'orange',
    position: 'fixed',
    boxSize: '48px 90%',
    top: '0',
    zIndex: '30',
    alignSelf: 'center',
    round: '0 0 A2 A2',
    border: 'solid, orange',
    borderWidth: '0 1px 0 1px',
    ':after': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      boxSize: '100% 100%',
      round: '0 0 A2 A2'
    },
    // background: 'rgba(0, 0, 0, 0)',
    style: {
      // backdropFilter: 'blur(1px)',
      // animationName: opacity,
      // animationDuration: '2s',
      // animationTimingFunction: 'ease-in-out',
    }
  }
}
