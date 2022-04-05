'use strict'

import { brightness } from '../../animations'

export const styleLink = {
  flex: 1,
  backgroundSize: 'cover',
  transition: 'flex 1s ease-in-out, background-image 1s ease-in-out, background-position 1s ease-in-out',
  backgroundAttachment: 'fixed',
  animationName: brightness,
  animationDuration: '3s',
  animationTimingFunction: 'ease-in-out',
  textDecoration: 'none',

  '&:hover': { flex: 8 },
  '&:hover > h4': {
    backdropFilter: 'blur(10px)',
    letterSpacing: '1.5px',
    color: 'rgba(244, 233, 217, 1)',
    '> span': { opacity: 1 }
  },
  '&:not(:hover) > h4 > span': {
    transition: 'opacity 0s ease-in-out'
  }
}

export const styleheading = {
  textTransform: 'uppercase',
  letterSpacing: '1px',
  fontWeight: 500,
  transition: 'backdrop-filter .5s ease-in-out, color 1s ease-in-out, letter-spacing 1s ease-in-out'
}

export const styleUnderConstruction = {
  textTransform: 'initial',
  whiteSpace: 'nowrap',
  fontWeight: '400',
  letterSpacing: '.5px',
  opacity: 0,
  transition: 'opacity 1s ease-in-out'
}

export default {
  flex: 1,
  boxSizing: 'border-box',
  animationName: brightness,
  animationDuration: '1s',
  animationTimingFunction: 'ease-in-out'
}
