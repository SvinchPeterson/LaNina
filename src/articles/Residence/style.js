'use strict'

import BB_JPG from '../../assets/images/sololaki/BB.jpg'
import ENTRENCE_JPG from '../../assets/images/sololaki/entrence.jpg'

export const styleResidence = {
  backgroundImage: 'url(' + BB_JPG + ')',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  minHeight: `${600 / 16}em`,
  backgroundAttachment: 'fixed',
  backgroundPosition: 'top left 100px',
  '@media only screen and (max-width: 1225px)': {
    backgroundSize: 'cover',
    backgroundAttachment: 'initial',
    backgroundPosition: 'center',
    overflow: 'hidden'
  },
  p: {
    maxWidth: `${850 / 16}em`,
    letterSpacing: '.8px',
    fontWeight: 300,
    lineHeight: `${28 / 16}em`,
    boxShadow: '0px 0px 75px 0px rgba(244, 233, 217, .55)',
    '@media only screen and (max-width: 1225px)': {
      padding: `${200 / 22}em ${100 / 22}em`,
      alignSelf: 'center',
      minWidth: '100%',
      color: 'rgba(244, 233, 217, 1)',
      background: 'rgba(244, 233, 217, .35)',
      backdropFilter: 'blur(5px)',
      fontSize: `${22 / 16}em`
    }
  }
}

export const styleEntrence = {
  minHeight: `${700 / 16}em`,
  backgroundImage: 'url(' + ENTRENCE_JPG + ')',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  '@media only screen and (max-width: 1225px)': {
    backgroundAttachment: 'initial',
    fontSize: `${22 / 16}em`,
    '> div': {
      minWidth: '100%',
      boxSizing: 'border-box',
      marginTop: `${50 / 22}em`,
      background: 'rgba(244, 233, 217, .45)',
      // border: '4px solid red',
      p: {
        fontWeight: 500
      },
      backdropFilter: 'blur(5px)'
    }

  }
}
