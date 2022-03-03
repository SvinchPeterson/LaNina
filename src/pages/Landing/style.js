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
    opacity: 1,
    letterSpacing: '-1.5px',
    '@media only screen and (max-width: 768px)': {
      letterSpacing: '3.5px'
    }
  },
  '&:hover > div': {
    backgroundPosition: 'top center',
    filter: 'brightness(45%) blur(0px) grayscale(10%)'
  }
}

const styleImage = {
  position: 'relative',
  flex: 1,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundAttachment: 'fixed',
  filter: 'brightness(35%) blur(.7px) grayscale(30%)',
  backgroundColor: 'rgba(0, 0, 0, 1)',
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
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}

const styleHeading = {
  position: 'absolute',
  width: '60px',
  height: '100%',
  zIndex: '100',
  color: 'rgba(244, 233, 217, .65)',
  fontFamily: 'Avenir Next',
  fontWeight: 700,
  writingMode: 'vertical-rl',
  textOrientation: 'upright',
  textTransform: 'uppercase',
  letterSpacing: '-10px',
  opacity: 0,
  transition: 'all 1s ease-in-out',
  backdropFilter: 'blur(2px)',
  '@media only screen and (max-width: 768px)': {
    fontSize: '20px',
    backdropFilter: 'blur(0px)',
    letterSpacing: '2.5px'
  }
}

const styleUnderConstruction = {
  position: 'absolute',
  top: '70%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'rgba(168, 98, 63, .7)',
  zIndex: '100',
  fontFamily: 'Avenir Next',
  fontSize: '20px',
  fontWeight: 500,
  letterSpacing: '3px',
  wordSpacing: '10px',
  opacity: 0,
  transition: 'opacity 1s ease-in-out',
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

    '> a': { tranform: 'scale(1.5)' },
    '> a:hover': { flex: 1 },
    '> a > div': {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'local'
    },
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

    '> div': {
      top: '50%',
      '> h5': { display: 'none' }
    },

    '> span': { top: '90%' }
  }
}
