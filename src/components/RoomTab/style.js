'use strict'

export const styleBook = {
  letterSpacing: '5px',
  fontFamily: 'Avenir Next',
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
  fontFamily: 'Avenir Next',
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
  filter: 'brightness(60%) grayscale(50%)',
  transition: 'all .7s ease-in-out',
  zIndex: '-1',
  transform: 'scale(1.1)'
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
  '&::after': {
    content: '""',
    fontSize: `${17 / 16}em`,
    position: 'absolute',
    color: 'rgba(243, 231, 219, .85)',
    top: '27%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    whiteSpace: 'nowrap',
    textTransform: 'Uppercase',
    // fontFamily: 'Bellefair',
    letterSpacing: `${3 / 16}em`,
    fontFamily: 'Avenir Next',
    fontWeight: 600
  },
  '&:hover': {
    flex: 3,
    zIndex: 70,
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

  '> div': styleImage,
  '> p': styleParagraph,
  '> a': styleBook
}
