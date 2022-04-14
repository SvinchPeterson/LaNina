'use strict'
export const styleCheck = {
  display: 'none',
  '&:checked ~ label > div:first-child': { width: '50%' },
  '&:checked ~ label > div:last-child': { width: '100%' }

}
export const styleMenuIcon = {
  cursor: 'pointer',
  '> div': { transition: 'width .5s ease-in-out' }
}
export const styleLangs = {
  textTransform: 'uppercase',
  width: `${200 / 16}em`,
  '> div': { cursor: 'pointer' },
  '> div:hover': { opacity: 1, fontWeight: 700 }
}

export const styleCall = {
  cursor: 'pointer',
  '> span': {
    opacity: 0,
    whiteSpace: 'nowrap',
    '@media only screen and (max-width: 1225px)': {
      left: '-200px',
      top: `${40 / 20}em`
    }

  },
  '&:hover > span': { opacity: 1 }
}

export default {
  boxSizing: 'border-box',
  zIndex: 500,
  mixBlendMode: 'difference',
  '@media only screen and (max-width: 1225px)': {
    fontSize: '2em',
    gap: `${42 / 32}em`
  }
}
