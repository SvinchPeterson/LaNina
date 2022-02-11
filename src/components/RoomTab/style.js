'use strict'

export default {
  flex: 1,
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'relative',
  transition: 'all .7s ease-in-out',
  zIndex: 50,
  '&::after': {
    content: '""',
    fontSize: `${20 / 16}em`,
    position: 'absolute',
    color: 'rgba(243, 231, 219, 1)',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    whiteSpace: 'nowrap',
    textTransform: 'Uppercase',
    fontFamily: 'Bellefair',
    letterSpacing: '3px'
  },

  '> p': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'rgba(243, 231, 219, 1)',
    fontFamily: 'Avenir Next',
    fontSize: '14px',
    opacity: 0,
    minWidth: '500px',
    fontWeight: '400',
    transition: 'all .7s ease-in-out'
    // textAlign: 'center'

  },
  '&:hover': {
    flex: 3,
    transform: 'scale(1.2)',
    zIndex: 60,
    '> div': {
      filter: 'brightness(20%) grayscale(50%)',
      transform: 'scale(1.1)'
    },
    '> p': {
      opacity: 1
    }
  },

  '> div': {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    filter: 'brightness(60%) grayscale(50%)',
    transition: 'all .7s ease-in-out'
  }

}
