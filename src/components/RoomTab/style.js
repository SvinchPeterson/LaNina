'use strict'

export const styleBook = {
  letterSpacing: '5px',
  textDecoration: 'none',
  color: 'rgba(243, 231, 219, .75)',
  position: 'absolute',
  top: '80%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: 'radial-gradient(rgba(243, 231, 219, .15), rgba(243, 231, 219, 0))',
  border: '.5px solid rgba(243, 231, 219, .45)',
  borderRadius: '50px',
  opacity: 0,
  transition: 'opacity .7s ease-in-out',
  transitionDelay: '.5s',
  fontWeight: 700,
  '> img': {
    display: 'block',
    opacity: '.75'
  },
  '&:hover': {
    background: 'radial-gradient(rgba(243, 231, 219, .25), rgba(243, 231, 219, 0))',
    transitionDelay: '0s'
  }
}

export const styleParagraph = {
  color: 'rgba(243, 231, 219, .75)',
  opacity: 0,
  letterSpacing: '.4px',
  minWidth: `${400 / 16}em`,
  maxWidth: `${700 / 16}em`,
  fontWeight: '400',
  transition: 'all .7s ease-in-out',
  transitionDelay: '.5s',
  lineHeight: `${28 / 16}em`,
  boxSizing: 'border-box'
  // textAlign: 'center'

}

export const styleImage = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  filter: 'brightness(40%) grayscale(100%)',
  transition: 'all .7s ease-in-out',
  zIndex: '-1'
}

export default {
  flex: 1,
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'relative',
  transition: 'all .7s ease-in-out',
  zIndex: 50,
  boxSizing: 'border-box',
  textDecoration: 'none',
  transform: 'scale(1)',
  boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, .5)',
  '&::after': {
    content: '""',
    fontSize: `${20 / 16}em`,
    position: 'absolute',
    color: 'rgba(168, 98, 63, 1)',
    top: '27%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    whiteSpace: 'nowrap',
    textTransform: 'Uppercase',
    letterSpacing: `${1.5 / 16}em`,
    fontWeight: 600
  },
  '&:hover': {
    flex: 3,
    zIndex: 70,
    minWidth: '1000px',
    '> div': {
      filter: 'brightness(20%) grayscale(50%)',
      transform: 'scale(1)'
    },
    '> p': {
      opacity: 1
    },
    '> a': {
      opacity: '.85'
    }
  },
  '&:not(:hover) > p': {
    transitionDelay: '-1s'
  },
  '&:not(:hover) > a': {
    transitionDelay: '-1s'
  },
  '@media only screen and (max-width: 1225px)': {
    minWidth: '80%',
    '&:hover': {
      minWidth: '80%'
    }
  },

  '@media only screen and (max-width: 600px)': {
    minWidth: '90%',
    '> p': { fontSize: '14px' }
  },

  '@media only screen and (max-width: 480px)': {
    minWidth: '100%',
    '&:hover': {
      minWidth: '100%'
    }
  },

  '@media only screen and (max-width: 372px)': {
    '> p': { fontSize: '13px', fontWeight: '600', paddingLeft: '15px', paddingRight: '15px' }
  },

  '> div': styleImage,
  '> p': styleParagraph,
  '> a': styleBook
}
