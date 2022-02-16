'use strict'

const styleSectionLinks = {
  // border: '2px solid red',

  '> a': {
    // fontFamily: 'Avenir Next',
    fontFamily: 'Bellefair',
    color: 'rgba(243, 231, 219, .55)',
    textTransform: 'uppercase',
    letterSpacing: '3.8px',
    cursor: 'pointer',
    transformOrigin: 'left',
    transition: 'all .3s linear',
    fontWeight: 500,
    '&:hover': {
      color: 'rgba(243, 231, 219, .85)',
      letterSpacing: '4px'
    }
  }
}

export default {
  background: 'radial-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7))',
  backdropFilter: 'blur(3px)',
  position: 'fixed',
  minWidth: '100%',
  top: 0,
  left: 0,
  transition: 'all .5s ease-in-out',
  zIndex: 100,
  height: '100%',
  // border: '5px solid red',
  boxSizing: 'border-box',

  '> nav': styleSectionLinks
}
