'use strict'

import BB_JPG from '../../assets/images/sololaki/BB.jpg'
import ENTRENCE_JPG from '../../assets/images/sololaki/entrance.jpg'
import STREET_JPG from '../../assets/images/sololaki/street.jpg'

export const styleResidence = {
  backgroundImage: 'url(' + BB_JPG + ')',
  minHeight: `${600 / 16}em`,
  display: 'flex',
  justifyContent: 'center',
  '@media only screen and (min-width: 1225px)': {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
    alignItems: 'flex-start'
  },
  '@media only screen and (max-width: 1225px)': {
    backgroundImage: 'linear-gradient(rgba(42, 81, 61, .35), rgba(42, 81, 61, 1)), url(' + BB_JPG + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    alignItems: 'center',
    minHeight: `${800 / 16}em`,
    paddingTop: `${200 / 16}em`,
    paddingBottom: `${200 / 16}em`

  },
  '@media only screen and (max-width: 768px)': {
    minHeight: `${700 / 16}em`
  },

  p: {
    fontSize: `${15 / 16}em`,
    letterSpacing: '1.5px',
    fontWeight: 300,
    lineHeight: `${27 / 15}em`,
    '@media only screen and (min-width: 1225px)': {
      boxShadow: '0px 0px 75px 0px rgba(244, 233, 217, .55)',
      maxWidth: `100%`,
      color: 'rgba(0, 0, 0, .35)',
      background: 'rgba(244, 233, 217, 1)',
      padding: `${50 / 15}em ${300 / 15}em`,
      paddingBottom: `${100 / 15}em`,
      '> span': {
        // border: '3px solid red',
        display: 'block',
        padding: `${80 / 15}em`,
        maxWidth: `${815 / 15}em`
      }
    },
    '@media only screen and (max-width: 1225px)': {
      background: 'transparent',
      color: ' rgba(244, 233, 217, 1)',
      maxWidth: `${900 / 15}em`,
      padding: `0 ${50 / 15}em`
    },
    '@media only screen and (max-width: 768px)': {
      padding: `0 ${25 / 15}em`,
      lineHeight: `${22 / 15}em`
    }

  }
}

export const styleEntrence = {
  minHeight: `${700 / 16}em`,
  backgroundImage: 'url(' + ENTRENCE_JPG + ')',
  display: 'flex',
  boxSizing: 'border-box',
  padding: `${100 / 16}em ${100 / 16}em `,
  backgroundSize: 'cover',
  position: 'relative',
  '@media only screen and (min-width: 1225px)': {
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat'
  },
  '@media only screen and (max-width: 1225px)': {
    padding: `${50 / 16}em`
  },
  '@media only screen and (max-width: 768px)': {
    padding: `${30 / 16}em`,
    minHeight: `${450 / 16}em`,
    justifyContent: 'center'
  },
  '@media only screen and (max-width: 480px)': {
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    background: 'linear-gradient(rgba(42, 81, 61, 0),rgba(42, 81, 61, .35), rgba(42, 81, 61, .8))'
  },
  '> div': { alignSelf: 'flex-end', zIndex: 100 },

  '> span': {
    display: 'none',
    '@media only screen and (min-width: 1225px)': {
      display: 'block',
      flex: 1,
      backgroundAttachment: 'fixed',
      maxWidth: `${600 / 16}em`,
      marginLeft: 'auto',
      backgroundImage: 'url(' + STREET_JPG + ')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right bottom'

    }
  }
}
