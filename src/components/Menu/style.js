'use strict'

export const styleSectionLinks = {
  display: 'flex',
  '@media only screen and (min-width: 1024px)': {
    fontSize: `${24 / 16}em`,
    gap: `${70 / 18}em`,
    paddingBottom: `${100 / 16}em`
  },
  '@media only screen and (max-width: 1024px)': {
    fontSize: `${24 / 16}em`,
    flexFlow: 'column',
    gap: `${40 / 24}em`,
    textAlign: 'center'
  },
  '> a': {
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontWeight: 700,
    textDecoration: 'none',

    '&:hover': { color: 'rgba(168, 98, 63, 1)' }
  }
}

export const styleSocialMedia = {
  '@media only screen and (min-width: 1024px)': {
    paddingRight: `${50 / 16}em`,
    paddingTop: `${0 / 16}em`

  },
  '> a': {
    cursor: 'pointer',
    opacity: '.75'
  },
  '> a:hover': { opacity: 1 }
}

export default {
  boxSizing: 'border-box',
  background: 'linear-gradient(rgba(42, 81, 61, .55),rgba(42, 81, 61, .65))',
  backdropFilter: 'blur(2px)',
  boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, .5)',
  transition: 'all .5s ease-in-out',
  zIndex: '400',
  display: 'flex',
  flexFlow: 'column',
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
    paddingRight: `10%`
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
