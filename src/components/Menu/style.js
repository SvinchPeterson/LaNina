'use strict'

export const styleSectionLinks = {
  display: 'flex',
  flexFlow: 'column',
  gap: `${40 / 24}em`,
  textAlign: 'center',
  '> a': {
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontWeight: 900,
    textDecoration: 'none',
    border: '1px solid rgba(248, 241, 227, .4)'
  }
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
  justifyContent: 'center',
  alignItems: 'flex-end',
  paddingRight: `12%`,
  '@media only screen and (max-width: 768px)': {
    alignItems: 'center',
    paddingRight: 0,
    gap: '100px'
  }
}
