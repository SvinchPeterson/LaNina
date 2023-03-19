'use strict'

import { deopacity } from '../animations'

export const properties = {
  position: 'relative',
  background: 'cream2',
  flow: 'column',
  width: '100%',
  height: '100%',
  // '@screenL': { border: '10px solid blue' },
  // '@screenM': { border: '10px solid red' },
  // '@screenS': { border: '10px solid yellow' },
  style: {
    flex: 1,
    overflowX: 'hidden',
    overflowY: 'auto',
    scrollBehavior: 'smooth',
    // '> section': { border: '5px solid red' },
    '::-webkit-scrollbar': { display: 'none' }
    // '@media only screen and (min-width: 1900px) and (min-height: 900px)': { fontSize: `${18 / 16}em` },
    // '@media only screen and (min-width: 1900px) and (min-height: 1000px)': { fontSize: `${20 / 16}em` },
    // '@media only screen and (min-width: 1900px) and (min-height: 1100px)': { fontSize: `${21.5 / 16}em` },
    // '@media only screen and (min-width: 1900px) and (min-height: 1200px)': { fontSize: `${23 / 16}em` },
    // '@media only screen and (min-width: 1900px) and (min-height: 1300px)': { fontSize: `${25 / 16}em` },

    // '@media only screen and (min-width: 1600px) and (min-height: 900px)': { fontSize: `${18 / 16}em` }
    // '@media only screen and (min-width: 1600px) and (min-height: 900px)': {
    //   fontSize: `${18 / 16}em`
    // },
    // '@media only screen and (min-width: 1600px) and (min-height: 1000px)': {
    //   fontSize: `${20 / 16}em`
    // }
    // '@media only screen and (min-width: 1900px) and (min-height: 1000px)': {
    //   fontSize: `${20 / 16}em`
    // },
    // '@media only screen and (min-width: 1900px) and (min-height: 1100px)': {
    //   fontSize: `${23 / 16}em`
    // },
    // '@media only screen and (min-width: 1900px) and (min-height: 1250px)': {
    //   fontSize: `${26 / 16}em`
    // }
    // '@media only screen and (max-width: 1900px) and (min-height: 1250px)': {
    //   fontSize: `${26 / 16}em`
    // }
    // '@media only screen and (max-width: 1899px) and (min-height: 1000px)': {
    //   fontSize: `${20 / 16}em`
    // },
    // '@media only screen and (max-width: 1899px) and (min-height: 1150px)': {
    //   fontSize: `${24 / 16}em`
    // }
  },

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
  }
}
