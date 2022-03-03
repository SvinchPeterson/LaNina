'use strict'

import { brightnessLanding, zoomInLanding } from '../../animations'

const styleLink = {
  flex: 1,
  transition: 'all 1s ease-in-out',
  overflow: 'hidden',
  position: 'relative',
  '&:hover': {
    flex: 8
  },
  '&:hover > h3': {
    opacity: 1
  },
  '&:hover > div': {
    backgroundPosition: 'top center',
    filter: 'brightness(35%) blur(0px) grayscale(10%)'
  }
}

const styleImage = {
  position: 'relative',
  flex: 1,
  backgroundSize: 'cover',
  // backgroundPosition: 'center center',
  backgroundAttachment: 'fixed',
  filter: 'brightness(15%) blur(.5px) grayscale(30%)',
  zIndex: 10,
  transition: 'all 1s ease-in-out',
  transform: 'scale(1.1)',
  animationName: zoomInLanding,
  animationDuration: '2s',
  animationTimingFunction: 'ease-in-out',

  '&:hover': {
    transition: 'all 1s ease-in-out'
  }
}

const styleBanner = {
  zIndex: 100,
  position: 'absolute',
  top: '45%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}

const styleHeading = {
  position: 'absolute',
  width: '60px',
  height: '100%',
  zIndex: '100',
  color: 'rgba(244, 233, 217, 1)',
  fontFamily: 'Avenir Next',
  fontWeight: 600,
  writingMode: 'vertical-rl',
  textOrientation: 'upright',
  textTransform: 'uppercase',
  letterSpacing: '5px',
  opacity: 0,
  transition: 'opacity 1s ease-in-out',
  backdropFilter: 'blur(2px)'
}

const styleUnderConstruction = {
  position: 'absolute',
  top: '70%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'rgba(244, 233, 217, 1)',
  zIndex: '100',
  fontFamily: 'Avenir Next',
  fontSize: '20px',
  // textTransform: 'capitalize',
  letterSpacing: '3px',
  wordSpacing: '10px',
  opacity: 0,
  transition: 'opacity 1s ease-in-out',
  fontWeight: '500',
  whiteSpace: 'nowrap'
}

export default {
  '> a > h3': styleHeading,
  '> a': styleLink,
  '> a > div': styleImage,
  '> div': styleBanner,
  '> span': styleUnderConstruction,

  flex: 1,
  position: 'relative',
  overflow: 'hidden',
  background: 'black',
  animationName: brightnessLanding,
  animationDuration: '2s',
  maxWidth: `${2560 / 16}em`,
  margin: '0 auto',

  '@media only screen and (max-width: 768px)': {
    flexFlow: 'column',
    // border: '10px solid red',
    '> a > h3': {
      flex: '1',
      width: '100%',
      height: '60px',
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'flex',
      alignItem: 'center',
      opacity: 1,
      paddingTop: '150px',
      writingMode: 'horizontal-tb'
    },
    '> a': {
      // border: '10px solid yellow',
      tranform: 'scale(1.5)'
    },
    '> div': {
      top: '50%',
      '> h5': {
        fontSize: '18px'
      }

    },
    '> a:hover': {
      flex: 1
    },

    '> span': {
      top: '90%'
    },

    '> a > div': {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'local'
    }
  }
}
