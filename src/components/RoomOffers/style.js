'use strict'

export const styleHeader = {
  textTransform: 'uppercase',
  height: `${50 / 16}em`,
  transition: 'height .3s linear',
  // fontSize: `${15 / 16}em`,
  '@media only screen and (max-width: 1225px)': {
    height: `${60 / 16}em`,
    '> h5': { fontSize: `${15 / 16}em` }
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
  // background: 'radial-gradient(rgba(42, 81, 61, .75),rgba(42, 81, 61, .85))',
  background: 'radial-gradient(rgba(60,84, 72, .7),rgba(60,84, 72, .8))',
  '@media only screen and (max-width: 1225px)': {
    marginRight: '0px',
    left: '50%',
    bottom: '-300px',
    transform: 'translate(-50%, 30%)',
    maxHeight: '300px',
    overflow: 'hidden'
  },
  '@media only screen and (max-width: 768px)': {
    bottom: '-220px'
  },
  '@media only screen and (max-width: 480px)': {
    minWidth: `${300 / 16}em`
  },
  '@media only screen and (max-width: 330px)': {
    minWidth: `${270 / 16}em`
  },
  '@media only screen and (max-height: 650px)': {
    // bottom: '-150px'
  }
}
