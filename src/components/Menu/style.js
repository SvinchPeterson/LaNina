'use strict'

export const styleSectionLinks = {
  display: 'flex',
  '@media only screen and (min-width: 1024px)': {
    fontSize: `${24 / 16}em`,
    gap: `${30 / 18}em`,
    paddingBottom: `${50 / 16}em`
  },
  '@media only screen and (max-width: 1024px)': {
    fontSize: `${20 / 16}em`,
    flexFlow: 'column',
    gap: `${40 / 24}em`,
    textAlign: 'center'
  },
  '> a': {
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontWeight: 900,
    textDecoration: 'none',

    '&:hover': {
      color: 'rgba(220, 187, 140, .85)'
    }
  }
}

export const styleSocialMedia = {
  // border: '5px solid green',
  '@media only screen and (min-width: 1024px)': {
    paddingRight: `${50 / 16}em`,
    paddingTop: `${0 / 16}em`
  },
  '> a': {
    cursor: 'pointer',
    opacity: '.85'
  },
  '> a:hover': { opacity: 1 }
}

export default {
  boxSizing: 'border-box',
  background: 'radial-gradient(rgba(42, 81, 61, .5),rgba(42, 81, 61, .7))',
  backdropFilter: 'blur(.2px)',
  // boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, .5)',
  transition: 'all .5s ease-in-out',
  zIndex: '400',
  display: 'flex',
  flexFlow: 'column',
  // border: '5px solid yellow',
  '@media only screen and (max-width: 1225px)': {
    transitionDelay: '-1s'

  },
  // borderTopLeftRadius: '300px',
  // borderBottomLeftRadius: '300px',
  '@media only screen and (min-width: 1024px)': {
    justifyContent: 'center',
    alignItems: 'flex-end',
    // alignItems: 'center'
    // gap: `${100 / 16}em`
    paddingRight: `12%`
  },

  '@media only screen and (max-width: 1024px)': {
    alignItems: 'center',
    justifyContent: 'center',
    gap: `${100 / 16}em`
  },
  '@media only screen and (min-height: 1024px)': {
    gap: `${200 / 16}em`
  }
}
