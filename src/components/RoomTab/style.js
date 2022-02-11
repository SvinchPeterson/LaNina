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
    // top: `${50 / 20}em`,
    // right: `${50 / 20}em`,
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    whiteSpace: 'nowrap',
    textTransform: 'Uppercase',
    fontFamily: 'Bellefair',
    letterSpacing: '3px'
  },
  '&:hover': {
    flex: 3,
    transform: 'scale(1.2)',
    '> div': {
      filter: 'brightness(20%) grayscale(50%)',
      transform: 'scale(1.1)'

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
