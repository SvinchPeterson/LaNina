'use strict'

import { brightnessLanding, zoomInLanding } from '../../animations'

import { cream } from '../../colors'

const styleLink = {
  flex: 1,
  transition: 'all 1s ease-in-out',
  overflow: 'hidden',
  position: 'relative',
  transform: 'scale(1)',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',

  '&:hover': {
    flex: 8,
    '> h3': {
      opacity: 1,
      width: '120px'
    },
    '> h3 > span': {
      opacity: 1
    }
  },
  '&:hover > div': {
    backgroundPosition: 'top center',
    filter: 'grayscale(30%) brightness(65%) blur(0px)'
  },
  '&:not(:hover) > h3 > span': {
    transitionDelay: 0,
    transition: 'all 0s ease-in-out'

  },

  '@media only screen and (max-width: 1000px)': {
    '> h3': {
      transform: 'scale(1)',
      width: '210px',
      height: '210px',
      opacity: 1,
      fontSize: '16px'
    },
    '&:hover': {
      border: 'none',
      '> h3': { height: ' 210px', width: '210px' }
    }

  }

}

const styleImage = {
  position: 'relative',
  flex: 1,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundAttachment: 'fixed',
  filter: 'grayscale(100%) brightness(50%) blur(0px)',
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
  width: '0',
  height: '140px',
  zIndex: '100',
  color: cream,
  fontWeight: 700,
  fontSize: `${18 / 16}em`,
  transform: 'scale(1)',
  marginTop: `${50 / 18}em`,
  textTransform: 'uppercase',
  letterSpacing: '3px',
  opacity: 0,
  transition: 'all .5s linear',
  background: 'radial-gradient(rgba(42, 81, 61, .65), rgba(42, 81, 61, .8))',

  '> span': {
    opacity: 0,
    transition: 'all 1s ease-in-out',
    transitionDelay: '.3s'
  },

  '@media only screen and (max-width: 1000px)': {
    transform: 'scale(1.1)',
    marginTop: 0,
    '> span': { opacity: 1 }
  }
}

const styleUnderConstruction = {
  position: 'absolute',
  top: '70%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: '#E69369',
  zIndex: '100',
  fontSize: '16px',
  fontWeight: 700,
  letterSpacing: '2.7px',
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
  margin: '0 auto',

  '@media only screen and (max-width: 1000px)': {
    flexFlow: 'column',

    '> a': { tranform: 'scale(1.5)' },
    '> a:hover': { flex: 1 },
    '> a > div': {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'local'
    },

    '> div': {
      top: '50%',
      '> h5': { display: 'none' }
    },

    '> span': { top: '90%' }
  }
}
