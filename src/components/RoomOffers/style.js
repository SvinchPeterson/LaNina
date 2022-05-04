'use strict'

export const styleHeader = {
  textTransform: 'uppercase',
  letterSpacing: '.5px',
  height: `${70 / 16}em`
}
export const styleOffers = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  columnGap: `${30 / 14}em`,
  fontWeight: '400',
  letterSpacing: '.5px',
  transition: 'min-height .6s ease-in-out, padding-bottom .6s ease-in-out',
  '> span': {
    fontSize: `${13 / 16}em`,
    textTransform: 'uppercase',
    transition: 'height .6s ease-in-out, opacity .4s ease-in-out .3s'
  }
}

export default {
  transition: 'all 1s ease-in-out',
  minWidth: `${380 / 16}em`,
  borderTopRightRadius: '30px',
  borderTopLeftRadius: '30px',
  backdropFilter: 'blur(5px)',
  background: 'radial-gradient(rgba(42, 81, 61, .5),rgba(42, 81, 61, .7))'
}
