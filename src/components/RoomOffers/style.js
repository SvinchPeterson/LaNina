'use strict'

export const styleHeader = {
  textTransform: 'uppercase',
  // letterSpacing: '.5px',
  height: `${50 / 16}em`,
  transition: 'height .3s linear'
}
export const styleOffers = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  columnGap: `${20 / 16}em`,
  letterSpacing: '1px',
  transition: 'min-height .6s ease-in-out, padding-bottom .6s ease-in-out',
  height: 0,
  '@media only screen and (max-width: 1225px)': {
    gridTemplateColumns: '100%',
    overflowY: 'auto'

  },

  '> span': {
    fontSize: `${13 / 16}em`,
    // textTransform: 'uppercase',
    // transition: 'height .3s linear, opacity .3s linear .2s',
    fontWeight: 400,
    '@media only screen and (max-width: 768px)': {
      fontSize: `${13 / 12.5}em`

    }
  }
}

export default {
  transition: 'all 1s ease-in-out',
  minWidth: `${380 / 16}em`,
  borderRadius: '35px',
  backdropFilter: 'blur(5px)',
  background: 'radial-gradient(rgba(42, 81, 61, .5),rgba(42, 81, 61, .7))',
  '@media only screen and (max-width: 1225px)': {
    marginRight: '0px',
    left: '50%',
    bottom: '-180px',
    transform: 'translate(-50%, 30%)',
    // borderBottomRightRadius: '30px',
    // borderBottomLeftRadius: '30px',
    maxHeight: '300px',
    overflow: 'hidden'
  },
  '@media only screen and (max-width: 1024px)': {
    fontSize: '13.7px'
  },
  '@media only screen and (max-width: 480px)': {
    minWidth: `${350 / 16}em`
  }
}
