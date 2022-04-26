'use strict'

export const styleSectionLinks = {
  display: 'flex',
  gap: `${40 / 16}em`,
  '> a': {
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontWeight: 500,
    textDecoration: 'none',
    '&:hover': { color: 'rgba(168, 98, 63, 1)' }
  },

  '@media only screen and (max-width: 1024px)': {
    flexFlow: 'column',
    gap: `${30 / 16}em`,
    textAlign: 'center'
  }
}

export const styleSocialMedia = {
  '@media only screen and (min-width: 1024px)': {
    paddingRight: `${50 / 16}em`

  },
  '> a': {
    cursor: 'pointer',
    opacity: '.75'
  },
  '> a:hover': { opacity: 1 }
}

export default {
  boxSizing: 'border-box',
  // background: 'radial-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .7))',
  background: 'radial-gradient(rgba(42, 81, 61, .55), rgba(42, 81, 61, .85))',
  backdropFilter: 'blur(2px)',
  transition: 'opacity .5s ease-in-out',
  zIndex: '400',
  display: 'flex',
  flexFlow: 'column',
  '@media only screen and (min-width: 1024px)': {
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: `${100 / 16}em`,
    paddingRight: `${80 / 16}em`
  },

  '@media only screen and (max-width: 1024px)': {
    alignItems: 'center',
    justifyContent: 'center',
    gap: `${100 / 16}em`
  }

}
