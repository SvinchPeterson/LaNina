'use strict'

export const styleHeader = {
  textTransform: 'uppercase',
  height: `${50 / 16}em`,
  transition: 'height .3s linear',
  '@media only screen and (max-width: 1225px)': {
    height: `${60 / 16}em`,
    '> h5': { fontWeight: '900' }
  }
}
export const styleOffers = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  columnGap: `${20 / 16}em`,
  rowGap: `${5 / 16}em`,
  letterSpacing: '1px',
  transition: 'min-height .6s ease-in-out, padding-bottom .6s ease-in-out',
  height: 0,
  '@media only screen and (max-width: 1225px)': {
    gridTemplateColumns: '100%',
    overflowY: 'auto',
    rowGap: `${5 / 16}em`,
    transition: 'min-height .4s ease-in-out, padding-bottom .4s ease-in-out'
  },

  '> span': {
    fontSize: `${14 / 16}em`,
    // textTransform: 'uppercase',
    // transition: 'height .3s linear, opacity .3s linear .2s',
    fontWeight: 400,
    '@media only screen and (max-width: 1225px)': {
      fontSize: `${14 / 16}em`,
      textTransform: 'uppercase',
      fontWeight: 500

    }
  }
}

export default {
  transition: 'all 1s ease-in-out',
  minWidth: `${380 / 16}em`,
  borderRadius: '35px',
  backdropFilter: 'blur(5px)',
  background: 'radial-gradient(rgba(60,84, 72, .7),rgba(60,84, 72, .8))',
  zIndex: '70',
  '@media only screen and (max-width: 1225px)': {
    maxHeight: '400px',
    overflow: 'hidden',
    left: '50%',
    transform: 'translate(-50%, 50%)',
    bottom: '-180px'
  },
  '@media only screen and (max-width: 480px)': {
    minWidth: `${300 / 16}em`,
    bottom: '-150px'
  }
}
