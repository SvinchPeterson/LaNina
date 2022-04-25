'use strict'

export const styleSectionLinks = {
  display: 'flex',
  '@media only screen and (min-width: 1225px)': {
    paddingRight: `${80 / 16}em`,
    gap: `${70 / 16}em`
  },
  '@media only screen and (max-width: 1225px)': {
    flexFlow: 'column',
    padding: 0,
    gap: `${50 / 32}em`,
    textAlign: 'center'
  },

  '> a': {
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontWeight: 500,
    textDecoration: 'none',
    '&:hover': { color: 'rgba(168, 98, 63, 1)' }
  }
}

export const styleSocialMedia = {
  '@media only screen and (min-width: 1225px)': {
    paddingRight: `${160 / 16}em`

  },
  '@media only screen and (max-width: 1225px)': {
    paddingTop: `${100 / 40}em`
  },
  '> a': {
    cursor: 'pointer',
    opacity: '.75'
  },
  '> a:hover': { opacity: 1 }
}

export default {
  boxSizing: 'border-box',
  background: 'radial-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .7))',
  backdropFilter: 'blur(2px)',
  transition: 'opacity .5s ease-in-out',
  zIndex: '400',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',

  '@media only screen and (min-width: 1225px)': {
    alignItems: 'flex-end',
    gap: `${100 / 16}em`
  },
  '@media only screen and (max-width: 1225px)': {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: `${40 / 16}em`,
    gap: `${100 / 40}em`
    // padding: `${300 / 40}em 0 ${300 / 40}em 0`
  }
}
