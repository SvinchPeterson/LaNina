'use strict'
export const styleParagraph = {
  zIndex: 10,
  opacity: 0,
  pointerEvents: 'none',
  minWidth: `${400 / 16}em`,
  width: `${460 / 16}em`,
  transition: 'opacity .3s ease-in-out',
  transitionDelay: '.6s',
  lineHeight: `${20 / 15}em`,
  letterSpacing: '.5px',
  fontWeight: 400,
  fontSize: '15px',
  // whiteSpace: 'nowrap',
  '@media only screen and (max-width: 1225px)': {
    fontSize: `${18 / 16}em`,
    letterSpacing: 0,
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
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
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  fontWeight: 700,
  // borderRadius: '50px',
  borderTopRightRadius: '30px',
  borderBottomRightRadius: '30px',
  borderTopLeftRadius: '30px',
  borderBottomLeftRadius: '30px',
  border: '.7px solid rgba(168, 98, 63, 1)',
  letterSpacing: '.5px',
  backdropFilter: 'blur(2px)',
  background: 'radial-gradient(rgba(42, 81, 61, .15),rgba(42, 81, 61, .25))',
  // background: 'radial-gradient( rgba(168, 98, 63, .2), rgba(168, 98, 63, .15))',
  // opacity: '.9',
  textDecoration: 'none',
  borderBottom: 'none',
  '&:hover': { opacity: 1 },
  '@media only screen and (max-width: 480px)': { bottom: '5%' }
  // '> span': { fontSize: `${16 / 16}em` }
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
    minWidth: `100%`,
    height: `${600 / 16}em`,
    justifyContent: 'space-between',
    '> h3': {
      fontSize: `${24 / 16}em`
    }
  },
  '@media only screen and (max-width: 768px)': {
    minWidth: `100%`,
    minHeight: '100%'
  },
  '> h3': {
    textTransform: 'uppercase',
    zIndex: 10,
    pointerEvents: 'none',
    transition: 'letter-spacing .7s ease-in-out',
    whiteSpace: 'nowrap'
  }
}
