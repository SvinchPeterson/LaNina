'use strict'

import { brightness, backgroundPosition, coverLogoAnimation, coverLogoAnimation2 } from '../../animations'

export const styleLink = {
  flex: 1,
  transition: 'all 1s ease-in-out',
  overflow: 'hidden',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat',
  animationName: backgroundPosition,
  animationDuration: '1.5s',
  animationTimingFunction: 'ease-in-out',
  backgroundPosition: '0% 0%',
  position: 'relative',
  // backgroundBlendMode: 'screen',
  '&:hover': {
    flex: 8
  },
  '&:hover > h3': {
    color: 'rgba(244, 233, 217, 1)',
    transform: 'scale(1.05)'
    // fontSize: `${22 / 16}em`
  },
  '&:hover > h3::after': { opacity: 1 },
  '&:not(:hover) > h3::after': { transition: 'opacity 0s ease-in-out' }
}

export const styleLogo = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) scale(1.4)',
  zIndex: 400,
  pointerEvents: 'none',
  opacity: 1,
  '@media only screen and (min-width: 1225px)': {
    animationName: coverLogoAnimation,
    animationDuration: '1s',
    animationTimingFunction: 'ease-in-out'
  },
  '@media only screen and (max-width: 1225px)': {
    opacity: 0
  }
}

export const styleLogo2 = {
  position: 'absolute',
  zIndex: '400',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) scale(1)',
  opacity: 0,
  pointerEvents: 'none',
  '@media only screen and (max-width: 1225px)': {
    opacity: 1,
    animationName: coverLogoAnimation2,
    animationDuration: '2s',
    animationTimingFunction: 'ease-in-out'
  }
}

export const styleheading = {
  position: 'absolute',
  bottom: '15%',
  fontSize: `${18 / 16}em`,
  color: 'rgba(244, 233, 217, .75)',
  textTransform: 'uppercase',
  fontWeight: 700,
  letterSpacing: '1px',
  transition: 'all 1s ease-in-out'

}

export default {
  flex: 1,
  boxSizing: 'border-box',
  animationName: brightness,
  animationDuration: '2s',
  animationTimingFunction: 'ease-in-out',
  display: 'flex',
  '@media only screen and (max-width: 1225px)': {
    flexFlow: 'column'
  }

  // '> a': styleLink,
  // '> a > div': styleImage,
  // '> a > h3 > div': styleUnderConstruction,

  // flex: 1,
  // position: 'relative',
  // overflow: 'hidden',
  // // background: 'black',
  // // background: 'rgba(42, 81, 61, 1)',
  // animationName: brightnessLanding,
  // animationDuration: '2s',
  // animationTimingFunction: 'ease-in-out',
  // margin: '0 auto',
  // '@media only screen and (max-width: 1225px)': {
  //   flexFlow: 'column'
  // }
}
