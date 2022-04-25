'use strict'
export const styleCheck = {
  display: 'none',
  '&:checked ~ label > div:first-child': { width: '50%' },
  '&:checked ~ label > div:last-child': { width: '100%' }

}
export const styleMenuIcon = {
  cursor: 'pointer',
  // border: '2px solid red',
  // border: '1px solid red',
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
  // border: '1px solid red',
  // padding: '10px',
  '> span': {
    opacity: 0,
    whiteSpace: 'nowrap'
  },
  '&:hover > span': { opacity: 1 }
}

export default {
  // boxSizing: 'border-box',
  zIndex: 500,
  width: 'fit-content',
  transform: 'translate(-50%, 0%)',
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  borderBottomLeftRadius: '30px',
  borderBottomRightRadius: '30px',
  padding: '6px 25px',
  // border: '1px solid rgba(42, 81, 61, 1)',
  background: 'radial-gradient(rgba(42, 81, 61, 1),rgba(42, 81, 61, 1))'
}
