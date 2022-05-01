'use strict'

export const styleHeader = {
  textTransform: 'uppercase',
  letterSpacing: '.5px',
  height: `${70 / 16}em`
}
export const styleOffers = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  // paddingBottom: `${0 / 16}em`
  columnGap: `${30 / 14}em`,
  fontWeight: '400',
  // border: '2px solid red',
  letterSpacing: '.5px',
  transition: 'min-height .6s ease-in-out, padding-bottom .6s ease-in-out',
  '> span': {
    fontSize: `${15 / 16}em`,
    // border: '2px solid red',
    transition: 'height .6s ease-in-out, opacity .4s ease-in-out .3s'
  }
}

export default {
  transition: 'all 1s ease-in-out',
  minWidth: `${380 / 16}em`,
  borderTopRightRadius: '40px',
  background: 'radial-gradient(rgba(32, 63, 45, .95), rgba(32, 63, 45, 1))'
  // border: '5px solid red'

}
