'use strict'

import { opacity, scaleUp, landingLoading, backgroundPosition, letterSpacing, widthShrink } from '../../animations'

export const stylePageLink = {
  height: '100%',
  maxHeight: '100%',
  transition: 'all 1s ease-in-out',
  display: 'flex',
  flex: 1,
  overflow: 'hidden',
  textDecoration: 'none',
  filter: 'blur(.5px) grayscale(20%)',
  zIndex: '10',
  // borderRight: '30px solid rgba(0, 0, 0, 0)',
  '> div': {
    flex: 1,
    display: 'flex',
    maxHeight: '100%',
    transition: 'all 1s ease-in-out',
    filter: 'brightness(30%)',
    overflow: 'hidden'
    // background: 'rgba(243, 231, 219, 1)'
  },

  '& > div > div': {
    animationName: landingLoading,
    animationDuration: '2s',
    animationTimingFunction: 'cubic-bezier(0.1, 0.7, 1.0, 0.1)',
    flex: 1,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    transition: 'all 1s ease-in-out',
    backgroundPosition: 'center center'
  },

  '&:hover': {
    flex: 6,
    filter: 'blur(0px) grayscale(5%)'
    // borderTop: '100px solid black'
    // borderBottom: '100px solid black'
    // zIndex: '300'
  },
  '&:hover > h6': {
    width: '60px',
    '> span': {
      opacity: 1
    }
  },
  '&:not(:hover) > h6': {
    width: 0
  },

  '&:hover > div': {
    filter: 'brightness(50%)',
    // transform: ''
    transform: 'scale(1.1)'
    // backgroundPosition: 'bottom right',
  },
  '&:hover > div > div': {
    backgroundPosition: 'bottom right'
  }
}

const styleUnderConstruction = {
  fontFamily: 'Avenir Next',
  position: 'absolute',
  top: '70%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  letterSpacing: '4px',
  color: 'rgba(165, 125, 2, .65)',
  zIndex: '200',
  opacity: 0
}

const styleBanner = {
  pointerEvents: 'none',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) scale(1)',
  minWidth: '250px',
  animationName: opacity,
  animationDuration: '2s',
  animationTimingFunction: 'ease-in-out',
  zIndex: 20,
  '> div': {
    minWidth: '100%',
    h4: {
      animationName: landingLoading,
      animationDuration: '2s',
      animationTimingFunction: 'ease-in-out'
    },
    span: {
      animationName: letterSpacing,
      animationDuration: '2s',
      animationTimingFunction: 'ease-in-out',
      textTransform: 'uppercase'
    }
  }
}

const styleHeading = {
  // fontFamily: 'Avenir Next',
  fontFamily: 'Bellefair',
  writingMode: 'vertical-rl',
  textOrientation: 'upright',
  textTransform: 'uppercase',
  background: 'linear-gradient(rgba(0, 0, 0, 1),rgba(0, 0, 0, .82), rgba(0, 0, 0, 1))',
  // background: 'rgba(243, 231, 219, .95)',
  // color: 'rgba(0, 0, 0, .95)',
  // background: 'rgba(243, 231, 219, .95)',
  // boxShadow: '20px 20px 20px red',
  color: 'rgba(243, 231, 219, 1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  height: '100%',
  width: '0',
  fontWeight: '500',
  transform: 'scale(1)',
  fontSize: '16px',
  letterSpacing: '6px',
  transition: 'all 1s ease-in-out',
  span: {
    opacity: 0,
    transition: 'all 1s ease-in-out',
    zIndex: '100'
  }
}

export default {
  boxSizing: 'border-box',
  flex: 1,
  justifyContent: 'space-between',
  display: 'flex',

  // minWidth: '100%',
  // minHeight: '100%',
  // filter: 'brightness(100%) blur(0) contrast(100%)',
  position: 'relative',
  // background: 'radial-gradient(rgba(0, 0, 0, .9), rgba(0, 0, 0, .7), rgba(0, 0, 0, .9))',
  // animationName: landingLoading,
  // animationDuration: '5s',
  '> a': stylePageLink,
  '> a > h6': styleHeading,

  '> div': styleBanner,
  '> span': styleUnderConstruction,
  '> h6': styleHeading

}
