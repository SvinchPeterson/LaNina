'use strict'
export const styleParagraph = {
  zIndex: 10,
  opacity: 0,
  pointerEvents: 'none',
  transition: 'opacity .3s ease-in-out',
  transitionDelay: '.4s',
  lineHeight: `${17 / 14}em`,
  letterSpacing: '.5px',
  fontWeight: 400,
  textAlign: 'left',
  '@media only screen and (min-width: 1225px)': {
    fontSize: `${14 / 16}em`,
    maxWidth: `370px`,
    padding: `0 30px 0 45px`
  },
  '@media only screen and (max-width: 1225px)': {
    fontSize: `${17 / 16}em`,
    maxWidth: `${500 / 17}em`
  },
  '@media only screen and (max-width: 768px)': {
    padding: `${50 / 18}em ${30 / 18}em`
  },
  '@media only screen and (max-width: 480px)': {
    fontSize: `${17 / 18}em`,
    padding: `${50 / 18}em ${50 / 18}em`
  }
}

export const styleBook = {
  zIndex: 10,
  textTransform: 'uppercase',
  fontWeight: 900,
  borderRadius: '30px',
  letterSpacing: '0px',
  backdropFilter: 'blur(2px)',
  border: '1px solid rgba(248, 241, 227, .5)',
  // background: 'radial-gradient(rgba(220, 187, 140, .15),rgba(220, 187, 140, .25))',
  textDecoration: 'none',
  transform: 'translate(-50%, -50%)',
  '&:hover': { opacity: 1 },
  '@media only screen and (max-width: 480px)': { bottom: '5%' },
  '> span': { fontSize: `${13 / 16}em` }
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
  boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, .35)',
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
    background: 'linear-gradient(rgba(42, 81, 61, .4), rgba(42, 81, 61, .9))',
    opacity: '.5',
    transition: 'opacity .7s ease-in-out',
    cursor: 'pointer'
  },
  '&:after': {
    content: '""',
    fontSize: `${14 / 16}em`,
    fontWeight: '900',
    position: 'absolute',
    top: '-25px',
    left: '5px',
    color: 'rgba(244, 233, 217, .85)',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    '@media only screen and (max-width: 1225px)': {
      left: '15px',
      top: '-30px'
    }
  },
  '@media only screen and (min-width: 1225px)': {
    minHeight: `${400 / 16}em`,
    '&:hover': { flex: 5.5, backdropFilter: 'blur(10px)' },
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
    height: `${500 / 16}em`,
    '> h3': {
      fontSize: `${28 / 16}em`
    }
  },
  '@media only screen and (max-width: 768px)': {
    minWidth: `100%`,
    minHeight: '100%',
    height: `${400 / 16}em`
  },
  '@media only screen and (max-height: 600px)': {
    height: `${300 / 16}em`
  },
  '> h3': {
    textTransform: 'uppercase',
    zIndex: 10,
    pointerEvents: 'none',
    transition: 'letter-spacing .7s ease-in-out',
    whiteSpace: 'nowrap'
  }
}
