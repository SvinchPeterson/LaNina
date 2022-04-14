'use strict'

export const styleHeader = {
  textTransform: 'uppercase',
  letterSpacing: '.5px',
  height: `${80 / 16}em`,
  borderTop: '5px solid rgba(168, 98, 63, 1)',
  '> button': {
    background: 'transparent',
    opacity: '.55'
  }
}
export const styleOffers = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  paddingBottom: `${100 / 16}em`,
  rowGap: `${0 / 16}em`,
  columnGap: `${60 / 16}em`,
  fontWeight: '400',
  letterSpacing: '.5px',
  transition: 'min-height .6s ease-in-out, padding-bottom .6s ease-in-out',
  '> span': {
    fontSize: `${15 / 16}em`,
    transition: 'height .6s ease-in-out, opacity .4s ease-in-out .3s'
  }
}

export default {
  transition: 'all 1s ease-in-out',
  minWidth: `${550 / 16}em`
  // border: '5px solid red'

}
