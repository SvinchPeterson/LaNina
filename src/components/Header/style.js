'use strict'
export const styleCheck = {
  display: 'none',
  '&:checked ~ label > div:first-child': { width: '50%' },
  '&:checked ~ label > div:last-child': { width: '100%' }

}
export const styleMenuIcon = {
  cursor: 'pointer',
  // mixBlendMode: 'difference',
  '> div': { transition: 'width .5s ease-in-out' }
}
export const styleLangs = {
  textTransform: 'uppercase',
  width: `${200 / 16}em`,
  // backdropFilter: 'blur(10px)',
  '> div': { cursor: 'pointer' },
  '> div:hover': { opacity: 1, fontWeight: 700 }
}

export const styleCall = {
  cursor: 'pointer',
  '> span': {
    opacity: 0,
    whiteSpace: 'nowrap'
  },
  '&:hover > span': { opacity: 1 }
}

export default {
  boxSizing: 'border-box',
  zIndex: 10,
  mixBlendMode: 'difference'
}
