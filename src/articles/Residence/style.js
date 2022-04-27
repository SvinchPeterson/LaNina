'use strict'

import BB_JPG from '../../assets/images/sololaki/BB.jpg'
import ENTRENCE_JPG from '../../assets/images/sololaki/entrance.jpg'
import STREET_JPG from '../../assets/images/sololaki/street.jpg'
import STREET2_JPG from '../../assets/images/sololaki/street2.jpg'

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
    alignItems: 'center'
  },

  p: {
    fontSize: `${15 / 16}em`,
    letterSpacing: '1.5px',
    fontWeight: 300,
    lineHeight: `${25 / 15}em`,
    '@media only screen and (min-width: 1225px)': {
      boxShadow: '0px 0px 75px 0px rgba(244, 233, 217, .55)',
      maxWidth: `${800 / 15}em`,
      color: 'rgba(0, 0, 0, .35)',
      background: 'rgba(244, 233, 217, 1)',
      padding: `${50 / 15}em`,
      paddingBottom: `${100 / 15}em`
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
  backgroundImage: 'linear-gradient(rgba(42, 81, 61, 0),rgba(42, 81, 61, .35), rgba(42, 81, 61, 1)),url(' + ENTRENCE_JPG + ')',
  display: 'flex',
  padding: `${70 / 16}em ${50 / 16}em `,
  backgroundSize: 'cover',
  '@media only screen and (min-width: 1225px)': {
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat'
  },
  '@media only screen and (max-width: 480px)': {
    padding: `${50 / 16}em ${20 / 16}em `
  },
  '> div': {
    alignSelf: 'flex-end'
  },

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
