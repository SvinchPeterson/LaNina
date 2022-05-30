'use strict'

export const styleSectionLinks = {
  display: 'flex',
  '@media only screen and (min-width: 1024px)': {
    gap: `${30 / 18}em`
  },
  '@media only screen and (max-width: 1024px)': {
    flexFlow: 'column',
    gap: `${40 / 24}em`,
    textAlign: 'center'
  },
  '> a': {
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontWeight: 900,
    textDecoration: 'none',
    backdropFilter: 'blur(3px)',

    '&:hover': {
      background: 'rgba(244, 233, 217, .3)'
    }
  }
}

export const styleSocialMedia = {
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
  background: 'rgba(42, 81, 61, .8)',
  backdropFilter: 'blur(.2px)',
  transition: 'all .5s ease-in-out',
  zIndex: '400',
  display: 'flex',
  flexFlow: 'column',
  gap: `${40 / 16}em`,
  '@media only screen and (max-width: 1225px)': {
    transitionDelay: '-1s'

  },
  '@media only screen and (min-width: 1024px)': {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: `12%`
  },

  '@media only screen and (max-width: 1024px)': {
    alignItems: 'center',
    justifyContent: 'center',
    gap: `${100 / 16}em`
  },
  '@media only screen and (min-height: 1024px)': {
    gap: `${200 / 16}em`
  },
  '@media only screen and (max-width: 768px)': {
    paddingTop: `${100 / 16}em`

  }
}
