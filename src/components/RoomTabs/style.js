'use strict'
export const styleParagraph = {
  zIndex: 10,
  opacity: 0,
  pointerEvents: 'none',
  minWidth: `${400 / 16}em`,
  maxWidth: `${600 / 16}em`,
  transition: 'opacity .3s ease-in-out',
  transitionDelay: '.6s',
  lineHeight: `${23 / 16}em`,
  letterSpacing: '1px',
  fontWeight: 400,
  '@media only screen and (max-width: 480px)': {
    fontSize: `${15 / 16}em`,
    minWidth: `${300 / 16}em`,
    paddingTop: `${35 / 15}em`
  }
}

export const styleBook = {
  zIndex: 10,
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  fontWeight: 700,
  borderRadius: '50px',
  border: '1.5px solid rgba(168, 98, 63, 1)',
  letterSpacing: '0',
  background: 'radial-gradient( rgba(168, 98, 63, .2), rgba(168, 98, 63, .15))',
  opacity: '.9',
  textDecoration: 'none',
  bottom: '2%',
  '&:hover': { opacity: 1 },
  '@media only screen and (max-width: 480px)': { bottom: '5%' }
}
export const styleRoomTab = {
  flex: 1,
  cursor: 'pointer',
  boxSize: 'border-box',
  transition: 'all .7s ease-in-out',
  overflow: 'hidden',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: 1,
  textDecoration: 'none',
  position: 'relative',
  backdropFilter: 'blur(2px)',
  '&:before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    background: 'linear-gradient(rgba(42, 81, 61, .35), rgba(42, 81, 61, .85))',
    opacity: '.5',
    transition: 'opacity .7s ease-in-out',
    cursor: 'pointer'
  },
  '@media only screen and (min-width: 1225px)': {
    minHeight: `${400 / 16}em`,
    '&:hover': { flex: 5.5 },
    '&:hover > p': { opacity: 1 },
    '&:not(:hover) > p': {
      transitionDelay: '0s',
      transition: 'opacity 0s ease-in-out'
    },
    '&:hover > h3': { letterSpacing: '1px' },
    '&:hover:before': { opacity: 1 }
  },
  '@media only screen and (max-width: 1225px)': {
    minWidth: `${700 / 16}em`,
    height: `${500 / 16}em`
  },
  '@media only screen and (max-width: 768px)': {
    minWidth: `100%`
  },
  '> h3': {
    textTransform: 'uppercase',
    zIndex: 10,
    pointerEvents: 'none',
    transition: 'letter-spacing .7s ease-in-out',
    whiteSpace: 'nowrap'
  }
}
