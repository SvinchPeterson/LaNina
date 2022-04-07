'use strict'

export const styleSectionLinks = {
  '> a': {
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontWeight: 500,
    textDecoration: 'none',
    '&:hover': { color: 'rgba(168, 98, 63, 1)' }
  }
}

export const styleSocialMedia = {
  '> a': {
    cursor: 'pointer',
    opacity: '.75'
  },
  '> a:hover': { opacity: 1 }
}

export default {
  zIndex: 9,
  boxSizing: 'border-box',
  background: 'radial-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7))',
  backdropFilter: 'blur(8px)',
  transition: 'opacity .5s ease-in-out'
}
