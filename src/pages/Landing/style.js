'use strict'

export const styleLink = {
  flex: 1,
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  boxSizing: 'border-box',
  display: 'flex',
  textDecoration: 'none',
  '@media only screen and (min-width: 1024px)': {
    transition: 'flex .8s ease-in-out, background-position .8s ease-in-out, background-image .8s ease-in-out',
    paddingBottom: `${100 / 16}em`,
    '&:hover': { flex: 8 },
    '&:hover > h4': {
      backdropFilter: 'blur(10px)',
      letterSpacing: '2.5px',
      color: 'rgba(244, 233, 217, .85)'
    },
    '&:hover > h4 > span': { opacity: 1 },
    '&:not(:hover) > h4 > span': { transition: 'opacity .2s ease-in-out' }
  },

  '@media only screen and (max-width: 1024px)': {
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export const styleLogo = {
  transform: 'translate(-50%, -50%) scale(1.1)',
  pointerEvents: 'none',
  opacity: 0
}

export const styleHeading = {
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  fontWeight: 700,
  '@media only screen and (min-width: 1024px)': {
    transition: 'backdrop-filter .5s ease-in-out, letter-spacing .8s ease-in-out'
  },
  '@media only screen and (max-width: 1024px)': {
    fontSize: `${30 / 16}em`

  }
}

export const styleUnderConstruction = {
  textTransform: 'initial',
  fontWeight: 500,
  whiteSpace: 'nowrap',
  fontSize: `${15 / 16}em`,
  '@media only screen and (min-width: 1024px)': {
    transition: 'opacity 1s ease-in-out',
    opacity: 0,
    position: 'absolute',
    bottom: '3px',
    left: '12px'
  }
}
export default {
  flex: 1,
  display: 'flex',
  '@media only screen and (max-width: 1024px)': {
    flexFlow: 'column'

  }
}
