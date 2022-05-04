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
    fontSize: `${13 / 16}em`,
    textTransform: 'uppercase',
    // border: '2px solid red',
    transition: 'height .6s ease-in-out, opacity .4s ease-in-out .3s'
  }
}

export default {
  transition: 'all 1s ease-in-out',
  minWidth: `${380 / 16}em`,
  // borderTopRightRadius: '40px',
  // borderRadius: '30px',
  borderTopRightRadius: '30px',
  // borderBottomRightRadius: '40px',
  borderTopLeftRadius: '30px',
  // borderBottomLeftRadius: '40px',
  // borderTopLeftRadius: '40px',
  // borderBottomRightRadius: '40px',
  // borderBottomLeftRadius: '40px',
  // borderTopLeftRadius: '40px',
  backdropFilter: 'blur(5px)',
  // borderTop: '1.5px solid rgba(168, 98, 63, 1)',
  // borderRight: '1.5px solid rgba(168, 98, 63, 1)',
  // borderRight: '1.5px solid rgba(168, 98, 63, 1)',
  background: 'radial-gradient(rgba(42, 81, 61, .5),rgba(42, 81, 61, .7))'
  // background: 'radial-gradient(rgba(32, 63, 45, 1), rgba(32, 63, 45, 1))'
  // background: 'radial-gradient(rgba(42, 81, 61, 1),rgba(42, 81, 61, 1))'
  // background: 'radial-gradient(rgba(168, 98, 63, .15), rgba(168, 98, 63, .25))'
}
