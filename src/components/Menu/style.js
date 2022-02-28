'use strict'

const styleSectionLinks = {
  transition: 'all .7s linear',
  boxSizing: 'border-box',
  zIndex: 0,
  minWidth: '100%',
  flex: 20,
  // paddingTop: '100px',
  // flex: 12,
  '> a': {
    // fontFamily: 'Bellefair',
    fontFamily: 'Avenir Next',
    color: 'rgba(243, 231, 219, .55)',
    textTransform: 'uppercase',
    letterSpacing: '3.8px',
    cursor: 'pointer',
    transformOrigin: 'left',
    transition: 'all .3s linear',
    textDecoration: 'none',
    fontWeight: 600,
    textAlign: 'left',

    '&:hover': {
      color: 'rgba(243, 231, 219, .85)',
      letterSpacing: '4px'
    }
  }
}

const styleSocialMedia = {
  transition: 'all .5s linear',
  transitionDelay: '.4s',
  flex: 20,
  minWidth: '100%',
  paddingBottom: '0px',
  alignSelf: 'flex-end',
  // border: '10px solid yellow',

  '> a': {
    cursor: 'pointer',
    opacity: '.65',
    border: '1px solid rgba(243, 231, 219, 0)',
    padding: '15px',
    borderRadius: '100%',
    transition: 'all .3s linear',
    '&:hover': {
      // background: 'radial-gradient(rgba(243, 231, 219, .1), rgba(243, 231, 219, 0))',
      border: '1.7px solid rgba(243, 231, 219, .25)',
      opacity: '.9'
    },
    '> img': {
      width: '25px'
    }
  }
}

export default {
  background: 'radial-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7))',
  backdropFilter: 'blur(5px)',
  position: 'fixed',
  minWidth: '100%',
  minHeight: '100%',
  padding: '0 45px',
  top: 0,
  left: 0,
  transition: 'all .5s linear',
  zIndex: 200,
  boxSizing: 'border-box',
  flexFlow: 'column',
  gap: '320px',

  '> nav': styleSectionLinks,
  '> div': styleSocialMedia
}
