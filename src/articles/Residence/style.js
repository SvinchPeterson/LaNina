'use strict'

import { cream } from '../../colors'
import GREEN_LANINA_JPG from '../../assets/images/sololaki/greenLanina2.jpg'
import BALCONY_JPG from '../../assets/images/sololaki/balcony3.jpg'

export const styleResidenceOrigin = {
  position: 'relative',
  minHeight: `${650 / 16}em`,
  boxSizing: 'border-box',
  paddingLeft: `${80 / 16}em`,
  '@media only screen and (max-width: 768px)': {
    paddingLeft: `0`
  },

  '> div': {
    backgroundImage: 'url(' + GREEN_LANINA_JPG + ')',
    filter: 'grayscale(30%) brightness(80%)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    flex: 1,
    transition: 'all 1s ease-in-out',
    '@media only screen and (max-width: 1225px)': {
      backgroundPosition: 'center center'
    },
    '@media only screen and (max-width: 768px)': {
      backgroundSize: 'cover',
      backgroundImage: 'radial-gradient(rgba(42, 81, 61, .25), rgba(42, 81, 61, .5)), url(' + GREEN_LANINA_JPG + ')'
    }
  },

  '> p': {
    flex: 1,
    background: 'rgba(244, 233, 217, 1)',
    color: 'rgba(0, 0, 0, .25)',
    position: 'absolute',
    maxWidth: `${900 / 16}em`,
    boxShadow: '0px 0px 75px 0px rgba(244, 233, 217, .55)',
    lineHeight: `${28 / 16}em`,
    '@media only screen and (max-width: 1225px)': {
      padding: `0 ${80 / 16}em ${80 / 16}em ${20 / 16}em`
    },
    '@media only screen and (max-width: 768px)': {
      background: 'transparent',
      color: 'rgba(244, 233, 217, .55)',
      boxShadow: 'none',
      alignSelf: 'center',
      padding: `0 ${30 / 16}em`
    },
    '@media only screen and (max-width: 480px)': { fontSize: `${15 / 16}em` }
  }
}

export const styleEntrence = {
  minHeight: `${650 / 16}em`,
  '> div': {
    backgroundImage: 'linear-gradient(rgba(42, 81, 61, .1), rgba(42, 81, 61, .3)), url(' + BALCONY_JPG + ')',
    backgroundSize: 'cover',
    flex: 1
  }
}

export default {
  // border: '8px solid red',
  '> section': {
    '> div': { backgroundAttachment: 'fixed' },
    '> p': {
      letterSpacing: '.5px'
    }
  }
}
