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
    width: '95%',
    minHeight: '50px',
    top: '0',
    zIndex: '35',
    alignSelf: 'center',
    background: 'transparent',
    round: '0 0 A2 A2',
    border: 'solid, orange',
    borderWidth: '0 0px .5px 0px',
    overflow: 'hidden',
    background: 'orange .01',
    style: {
      animationName: opacity,
      animationDuration: '2s',
      animationTimingFunction: 'ease-in-out',
      boxShadow: 'rgba(0, 0, 0, .5) 0px 10px 20px -10px',
      backdropFilter: 'blur(10px)'

    }
  },

  footerBackground: {
    minWidth: '95%',
    bottom: 'A',
    zIndex: '40',
    // opacity: '0',
    alignSelf: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    position: 'fixed',
    height: 'C',
    padding: '- A',
    // background: 'red',
    socialLinksBack: {
      // border: '2px solid black',
      width: 'fit-content',
      align: 'center center',
      gap: 'A',
      childProps: {
        boxSize: 'B2 B2',
        boxSizing: 'content-box',
        align: 'center center',
        background: 'orange .015',
        round: '100%',
        style: {
          backdropFilter: 'blur(20px)',
          boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
        }
      }
    },

    bookBack: {
      round: 'B',
      // boxSize: 'B2 D2',
      // boxSize: '32.27px 81.27px',
      // height: 'fit-content',
      // border: 'solid, orange',
      // borderWidth: '.3px',
      zIndex: '2',
      boxSize: 'B2 D2',
      style: {
        backdropFilter: 'blur(20px)',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
      },
    }
    // round: 'B',
    // boxSize: '32.27px 81.27px',
    // height: 'fit-content',
    // position: 'absolute',
    // right: 'A',
    // background: 'orange',
    // zIndex: '2',
    // style: { backdropFilter: 'blur(20px)'},
    // bottom: '',
    // right: 'D'
  }
}
