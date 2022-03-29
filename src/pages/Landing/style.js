'use strict'

import { brightness, backgroundPosition, coverLogoAnimation, coverLogoAnimation2 } from '../../animations'

export const styleLink = {
  flex: 1,
  transition: 'flex 1s ease-in-out, background-image 1s ease-in-out, background-position 1s ease-in-out',
  overflow: 'hidden',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  backgroundSize: 'cover',
  textDecoration: 'none',
  color: 'rgba(244, 233, 217, 1)',

  '@media only screen and (min-width: 1225px)': {
    backgroundPosition: '0% 0%',
    backgroundAttachment: 'fixed',
    animationName: backgroundPosition,
    animationDuration: '1.5s',
    animationTimingFunction: 'ease-in-out',
    '&:hover': {
      flex: 8
    },
    '&:hover > h3': {
      color: 'rgba(244, 233, 217, 1)'
    }
    // '&:hover > h3 > span': { opacity: 1 },
    // '&:not(:hover) > h3 > span': { transition: 'opacity 0s ease-in-out' }
  },
  '@media only screen and (max-width: 1225px)': {
    backgroundPosition: 'bottom center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export const styleLogo = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) scale(1.4)',
  zIndex: 400,
  pointerEvents: 'none',
  opacity: 0.85,
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
    animationTimingFunction: 'ease-in-out',
    transform: 'translate(-50%, -50%) scale(1.3)'
  }
}

export const styleheading = {
  textTransform: 'uppercase',
  letterSpacing: '.7px',
  color: 'rgba(244, 233, 217, .55)',
  position: 'relative',
  transition: 'color 1s ease-in-out',
  '> span': {
    textTransform: 'lowercase',
    position: 'absolute',
    whiteSpace: 'nowrap',
    top: '30px',
    left: '15px',
    color: 'rgba(168, 98, 63, 1)'
  }

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
}
