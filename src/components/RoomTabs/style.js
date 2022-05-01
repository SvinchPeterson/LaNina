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

// export const styleBook = {
//   letterSpacing: '5px',
//   textDecoration: 'none',
//   color: 'rgba(244, 233, 217, .75)',
//   position: 'absolute',
//   top: '80%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   // background: 'radial-gradient(rgba(168, 98, 63, .25), rgba(168, 98, 63, .7))',
//   border: '2px solid rgba(168, 98, 63, .75)',
//   borderRadius: '50px',
//   // opacity: 0,
//   transition: 'opacity .7s ease-in-out',
//   transitionDelay: '.5s',
//   fontWeight: 700,
//   '> img': {
//     display: 'block',
//     opacity: '.75'
//   },
//   '&:hover': {
//     background: 'radial-gradient(rgba(243, 231, 219, .25), rgba(243, 231, 219, 0))',
//     transitionDelay: '0s'
//   }
// }

// export const styleParagraph = {
//   color: 'rgba(243, 231, 219, .75)',
//   opacity: 0,
//   letterSpacing: '.4px',
//   minWidth: `${400 / 16}em`,
//   maxWidth: `${700 / 16}em`,
//   fontWeight: '400',
//   transition: 'all .7s ease-in-out',
//   transitionDelay: '.5s',
//   lineHeight: `${28 / 16}em`,
//   boxSizing: 'border-box'
//   // textAlign: 'center'

// }

// export const styleImage = {
//   position: 'absolute',
//   width: '100%',
//   height: '100%',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center center',
//   filter: 'brightness(40%) grayscale(100%)',
//   transition: 'all .7s ease-in-out',
//   zIndex: '-1'
// }

// export default {
//   flex: 1,
//   cursor: 'pointer',
//   overflow: 'hidden',
//   position: 'relative',
//   transition: 'all .7s ease-in-out',
//   zIndex: 50,
//   boxSizing: 'border-box',
//   textDecoration: 'none',
//   transform: 'scale(1)',
//   boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, .5)',
//   '&::after': {
//     content: '""',
//     fontSize: `${20 / 16}em`,
//     position: 'absolute',
//     color: 'rgba(168, 98, 63, 1)',
//     top: '27%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     whiteSpace: 'nowrap',
//     textTransform: 'Uppercase',
//     letterSpacing: `${1 / 16}em`,
//     fontWeight: 600
//   },
//   '&:hover': {
//     flex: 3,
//     zIndex: 70,
//     minWidth: '1000px',
//     '> div': {
//       filter: 'brightness(20%) grayscale(50%)',
//       transform: 'scale(1)'
//     },
//     '> p': {
//       opacity: 1
//     },
//     '> a': {
//       opacity: '.85'
//     }
//   },
//   '&:not(:hover) > p': {
//     transitionDelay: '-1s'
//   },
//   '&:not(:hover) > a': {
//     transitionDelay: '-1s'
//   },
//   '@media only screen and (max-width: 1225px)': {
//     minWidth: '80%',
//     '&:hover': {
//       minWidth: '80%'
//     }
//   },

//   '@media only screen and (max-width: 600px)': {
//     minWidth: '90%',
//     '> p': { fontSize: '14px' }
//   },

//   '@media only screen and (max-width: 480px)': {
//     minWidth: '100%',
//     '&:hover': {
//       minWidth: '100%'
//     }
//   },

//   '@media only screen and (max-width: 372px)': {
//     '> p': { fontSize: '13px', fontWeight: '600', paddingLeft: '15px', paddingRight: '15px' }
//   },

//   '> div': styleImage,
//   '> p': styleParagraph,
//   '> a': styleBook
// }
