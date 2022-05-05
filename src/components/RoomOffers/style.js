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
  '@media only screen and (max-width: 768px)': {
    gridTemplateColumns: '100%',
    overflowY: 'auto'

  },

  '> span': {
    fontSize: `${13 / 16}em`,
    textTransform: 'uppercase',
    transition: 'height 1s ease-in-out, opacity 1s ease-in-out 0s',
    fontWeight: '500',
    '@media only screen and (max-width: 768px)': {
      // fontSize: `${11 / 16}em`

    }
  }
}

export default {
  transition: 'all 1s ease-in-out',
  minWidth: `${380 / 16}em`,
  // borderTopRightRadius: '30px',
  // borderTopLeftRadius: '30px',
  borderRadius: '35px',
  backdropFilter: 'blur(5px)',
  background: 'radial-gradient(rgba(42, 81, 61, .5),rgba(42, 81, 61, .7))',
  '@media only screen and (max-width: 1024px)': {
    fontSize: '13.7px'
  },
  '@media only screen and (max-width: 768px)': {
    marginRight: '0px',
    left: '50%',
    bottom: '-200px',
    transform: 'translate(-50%, 30%)',
    borderBottomRightRadius: '30px',
    borderBottomLeftRadius: '30px',
    maxHeight: '300px',
    overflow: 'hidden'
  },
  '@media only screen and (max-width: 480px)': {
    minWidth: `${350 / 16}em`
    // minWidth: '100%',
    // maxWidth: '100%'
  }
}
