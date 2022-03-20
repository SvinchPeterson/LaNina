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

  '@media only screen and (min-width: 1225px)': {
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
        // transform: 'scale(1)',
        '> span': { opacity: 1, width: '60px' },
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

  '@media only screen and (max-width: 1225px)': {
    justifyContent: 'center',

    '> div': {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top 50px right',
      transform: 'scale(1)'
    }
  }
}

const styleImage = {
  flex: 1,
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  '@media only screen and (min-width: 1225px)': {
    filter: 'grayscale(100%) brightness(50%) blur(0px)'
  },
  '@media only screen and (max-width: 1225px)': {
    filter: 'grayscale(100%) brightness(50%) blur(0px)'
  },
  transition: 'all 1s ease-in-out',

  backgroundPosition: 'center center',

  animationName: imagePosition,
  animationDuration: '2s',
  animationTimingFunction: 'ease-in-out'
}

const styleUnderConstruction = {
  '@media only screen and (min-width: 1225px)': {
    marginTop: '40px'
  },
  // color: '#E6763F',
  color: 'rgba(168, 98, 63, 1)',
  position: 'absolute',
  zIndex: '200',
  fontSize: '14px',
  fontWeight: 500,
  letterSpacing: '1.1px',
  opacity: 0,
  transition: 'opacity 1s ease-in-out',
  whiteSpace: 'nowrap',
  marginLeft: '16.5px',
  '@media only screen and (max-width: 1225px)': {
    opacity: 1,
    width: 'fit-content',
    margin: 'auto',
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '20px'
  }
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
  '@media only screen and (max-width: 1225px)': {
    flexFlow: 'column'
  }
}
