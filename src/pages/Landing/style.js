'use strict'

import { brightnessLanding, imagePosition } from '../../animations'

const styleLink = {
  flex: 1,
  overflow: 'hidden',
  position: 'relative',
  backgroundSize: 'cover',
  transition: 'all .85s ease-in-out',
  boxSizing: 'border-box',
  animationName: brightnessLanding,
  animationDuration: '2s',
  animationTimingFunction: 'ease-in-out',
  borderTop: '0px solid black',
  borderBottom: '0px solid black',

  '@media only screen and (min-width: 1024px)': {
    '&:hover': {
      flex: 8,
      borderBottom: 'none',
      borderTop: 'none',
      '> div': {
        backgroundPosition: 'top left',
        filter: 'grayscale(50%) brightness(65%) blur(0px)'
      },
      '> h3': {
        background: 'rgba(0, 0,0, 0)',
        transform: 'scale(1.05)',
        '> span': { opacity: 1 },
        '> div': { opacity: 1 }
        // '&::before': {transform: 'scale(1.1)'}
      },
      '> h3::before': {
        opacity: '1',
        transform: 'scale(1.2)',
        letterSpacing: '1px'
      }
    }

  },

  '@media only screen and (max-width: 1024px)': {
    transform: 'scale(1.05)',
    '> div': {
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top 50px right',
      transform: 'scale(.95)'
    },
    '> h3': {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }

  }
}

const styleImage = {
  flex: 1,
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  filter: 'grayscale(100%) brightness(50%) blur(.5px)',
  transition: 'all 1s ease-in-out',

  backgroundPosition: 'center center',

  animationName: imagePosition,
  animationDuration: '2s',
  animationTimingFunction: 'ease-in-out'
}

const styleUnderConstruction = {
  // position: 'absolute',
  // top: '66%',
  // left: '0',
  // border: '3px solid red',

  // transform: 'translate(-50%, -50%)',
  // color: 'rgba(244, 233, 217, .75)',
  color: 'rgba(168, 98, 63, .75)',
  position: 'absolute',
  zIndex: '200',
  fontSize: '15px',
  fontWeight: 700,
  fontFamily: 'Helvetica',
  letterSpacing: '1.1px',
  // wordSpacing: '10px',
  opacity: 0,
  transition: 'opacity 1s ease-in-out',
  whiteSpace: 'nowrap',
  marginTop: '36px',
  marginLeft: '16.5px'
}

export default {
  '> a': styleLink,
  '> a > div': styleImage,
  '> a > h3 > div': styleUnderConstruction,

  flex: 1,
  position: 'relative',
  overflow: 'hidden',
  background: 'black',
  animationName: brightnessLanding,
  animationDuration: '2s',
  animationTimingFunction: 'ease-in-out',
  margin: '0 auto',
  '@media only screen and (max-width: 1024px)': {
    flexFlow: 'column'
  }
}
