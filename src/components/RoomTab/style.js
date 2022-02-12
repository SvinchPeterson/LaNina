'use strict'

export const styleBook = {
  gap: '12px',
  fontSize: '22px',
  letterSpacing: '5px',
  fontFamily: 'Bellefair',
  // fontFamily: 'Avenir Next',
  textDecoration: 'none',
  color: 'white',
  display: 'flex',
  position: 'absolute',
  top: '80%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  alignItems: 'center',
  border: '1px solid white',
  padding: '10px 20px',
  '> img': {
    // width: '30px',
    // height: '30px',
    // transform: 'scale(.1)',
    // width: '30px',
    // height: '30px',
    display: 'block'
    // border: '1px solid white',
    // paddingRight: '5px'
    // border: '1px solid white',
    // padding: '10px'
  }
}

export const styleParagraph = {
  color: 'rgba(243, 231, 219, 1)',
  fontFamily: 'Avenir Next',
  fontSize: '16px',
  opacity: 0,
  minWidth: '400px',
  maxWidth: '600px',
  fontWeight: '400',
  transition: 'all .7s ease-in-out',
  transitionDelay: '.5s',
  lineHeight: '28px',
  boxSizing: 'border-box'

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
  // border: '5px solid red',
  textDecoration: 'none',
  padding: '50px',
  transform: 'scale(.995)',
  '&::after': {
    content: '""',
    fontSize: `${18 / 16}em`,
    position: 'absolute',
    color: 'rgba(243, 231, 219, 1)',
    top: '25%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    whiteSpace: 'nowrap',
    textTransform: 'Uppercase',
    fontFamily: 'Bellefair',
    letterSpacing: '3px'
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
    }
  },

  '&:not(:hover) > p': {
    transitionDelay: '-1s'
  }
}
