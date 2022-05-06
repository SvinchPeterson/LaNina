'use strict'
export const styleParagraph = {
  zIndex: 10,
  opacity: 0,
  pointerEvents: 'none',
  transition: 'opacity .3s ease-in-out',
  transitionDelay: '.6s',
  lineHeight: `${20 / 15}em`,
  letterSpacing: '.5px',
  fontWeight: 400,
  '@media only screen and (min-width: 1225px)': {
    fontSize: `${15 / 16}em`,
    minWidth: `${400 / 15}em`,
    width: `${435 / 15}em`
  },
  '@media only screen and (max-width: 1225px)': {
    fontSize: `${17 / 16}em`,
    maxWidth: `${500 / 17}em`
  },
  '@media only screen and (max-width: 768px)': {
    padding: `${50 / 18}em ${15 / 18}em`,
    minWidth: `${300 / 15}em`
  },
  '@media only screen and (max-width: 480px)': {
    fontSize: `${17 / 18}em`
  }
}

export const styleBook = {
  zIndex: 10,
  textTransform: 'uppercase',
  fontWeight: 500,
  borderRadius: '30px',
  border: '.7px solid rgba(168, 98, 63, 1)',
  letterSpacing: '.5px',
  backdropFilter: 'blur(2px)',
  background: 'radial-gradient(rgba(42, 81, 61, .15),rgba(42, 81, 61, .25))',
  textDecoration: 'none',
  borderBottom: 'none',
  transform: 'translate(-50%, -50%)',
  '&:hover': { opacity: 1 },
  '@media only screen and (max-width: 480px)': { bottom: '5%' },
  '> span': { fontSize: `${13.5 / 16}em` }
}
export const styleRoomTab = {
  height: `${400 / 16}em`,
  flex: 1,
  cursor: 'pointer',
  boxSizing: 'border-box',
  transition: 'all .7s ease-in-out',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: 1,
  textDecoration: 'none',
  position: 'relative',
  backdropFilter: 'blur(2px)',
  '> div': {
    overflow: 'hidden'
  },
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
  '&:after': {
    content: '""',
    fontSize: `${14 / 16}em`,
    fontWeight: '500',
    position: 'absolute',
    top: '-25px',
    left: '5px',
    color: 'rgba(244, 233, 217, .85)',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    whiteSpace: 'nowrap',
    '@media only screen and (max-width: 1225px)': {
      fontSize: `${16 / 14}em`,
      top: '-35px',
      left: '30px',
      letterSpacing: '1px'
    },
    '@media only screen and (max-width: 768px)': {
      fontSize: `${14 / 14}em`
    }
  },
  '@media only screen and (min-width: 1225px)': {
    minHeight: `${400 / 16}em`,
    '&:hover': { flex: 5.5 },
    '&:hover > div > p': { opacity: 1 },
    '&:not(:hover) > div > p': {
      transitionDelay: '0s',
      transition: 'opacity 0s ease-in-out'
    },
    '&:hover > h3': { letterSpacing: '1px' },
    '&:hover:before': { opacity: 1 }
  },
  '@media only screen and (max-width: 1225px)': {
    minWidth: `100%`,
    height: `${450 / 16}em`,
    '> h3': {
      fontSize: `${28 / 16}em`
    }
  },
  '@media only screen and (max-width: 768px)': {
    minWidth: `100%`,
    minHeight: '100%',
    height: `${400 / 16}em`
  },
  '> h3': {
    textTransform: 'uppercase',
    zIndex: 10,
    pointerEvents: 'none',
    transition: 'letter-spacing .7s ease-in-out',
    whiteSpace: 'nowrap'
  }
}
