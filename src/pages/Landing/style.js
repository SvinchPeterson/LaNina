'use strict'

import { brightnessLanding, imagePosition } from '../../animations'

import { cream } from '../../colors'

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
  '> h3': {
    border: '10px solid rgba(0, 0, 0, 0)',
    paddingBottom: '100px'
  },

  '@media only screen and (min-width: 1024px)': {
    '&:hover': {
      flex: 8,
      borderBottom: 'none',
      borderTop: 'none',
      '> div': {
        backgroundPosition: 'bottom left',
        filter: 'grayscale(50%) brightness(55%) blur(0px)'
      },

      '> h3': {
        width: `${130 / 30}em`,
        transition: 'all 1s ease-in-out',
        border: '100px solid rgba(0, 0, 0, 1)',

        opacity: 1
      }
    },
    '&:not(:hover)': {
      '> h3': {
        transition: 'all .3s ease-in-out'
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

const styleHeading = {
  position: 'absolute',
  zIndex: 200,
  color: cream,
  width: 0,
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '2.5px',

  transition: 'all .8s ease-in-out',
  boxSizing: 'border-box',
  fontFamily: 'Helvetica Neue',
  '@media only screen and (min-width: 1024px)': {
    bottom: '0px'
  },
  '@media only screen and (max-width: 1024px)': {
    width: '60%',
    height: '90%',
    opacity: '1 !importan'
  }
}

const styleUnderConstruction = {
  position: 'absolute',
  top: '70%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'rgba(244, 233, 217, .75)',
  zIndex: '200',
  fontSize: '20px',
  fontWeight: 500,
  fontFamily: 'Helvetica',
  letterSpacing: '2.7px',
  wordSpacing: '10px',
  opacity: 0,
  transition: 'opacity 1s ease-in-out',
  whiteSpace: 'nowrap'
}

export default {
  '> a': styleLink,
  '> a > h3': styleHeading,
  '> a > div': styleImage,
  '> span': styleUnderConstruction,

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
