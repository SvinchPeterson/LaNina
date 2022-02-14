'use strict'

import { positionLoadingLanding, brightnessLanding, scaleBanner, letterSpacingBanner } from '../../animations'

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
  }
}

const styleImage = {
  position: 'relative',
  flex: 1,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundAttachment: 'fixed',
  filter: 'brightness(15%) blur(.5px) grayscale(30%)',
  zIndex: 10,
  transition: 'all 1s ease-in-out',
  transform: 'scale(1.05)',
  animationName: positionLoadingLanding,
  animationDuration: '1.5s',
  animationTimingFunction: 'ease-in-out',

  '&:hover': {
    backgroundPosition: 'top center',
    filter: 'brightness(35%) blur(0px) grayscale(10%)',
    transition: 'all 1s ease-in-out'
  }
}

const styleBanner = {
  zIndex: 100,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  animationName: scaleBanner,
  animationDuration: '1s',
  animationTimingFunction: 'ease-in-out',

  span: {
    fontSize: '24px',
    animationName: letterSpacingBanner,
    animationDuration: '1.5s',
    display: 'inline-block',
    transform: 'scale(.95)'
  }
}

const styleHeading = {
  position: 'absolute',
  width: '60px',
  height: '100%',
  zIndex: '100',
  background: 'rgba(243, 231, 219, .0)',
  color: 'rgba(243, 231, 219, .65)',
  fontFamily: 'Bellefair',
  fontWeight: '500',
  writingMode: 'vertical-rl',
  textOrientation: 'upright',
  textTransform: 'uppercase',
  letterSpacing: '5px',
  opacity: 0,
  transition: 'opacity 1s ease-in-out'
}

const styleUnderConstruction = {
  position: 'absolute',
  top: '70%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'rgba(243, 231, 219, .8)',
  zIndex: '100',
  fontFamily: 'Avenir Next',
  textTransform: 'uppercase',
  letterSpacing: '3px',
  wordSpacing: '10px',
  opacity: 0,
  transition: 'opacity 1s ease-in-out',
  fontWeight: '500'
}

export default {
  flex: 1,
  position: 'relative',
  overflow: 'hidden',
  background: 'black',
  animationName: brightnessLanding,
  animationDuration: '2s',

  '> a': styleLink,
  '> a > div': styleImage,
  '> a > h3': styleHeading,

  '> div': styleBanner,

  '> span': styleUnderConstruction
}
