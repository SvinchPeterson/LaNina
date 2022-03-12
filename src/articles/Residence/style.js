'use strict'

import { cream } from '../../colors'
import GREEN_LANINA_JPG from '../../assets/images/sololaki/greenLanina2.jpg'
import BALCONY_JPG from '../../assets/images/sololaki/balcony3.jpg'

export const styleBBresidence = {
  width: '100%',
  backgroundImage: 'url(' + GREEN_LANINA_JPG + ')',
  backgroundSize: 'contain',
  backgroundPosition: 'left 100px bottom',
  transform: 'scale(.95)',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',

  p: {
    maxWidth: `${800 / 16}em`,
    boxShadow: '-50px 50px 100px 20px rgba(243, 231, 219, .2)',
    lineHeight: `${30 / 16}em`,
    color: 'rgba(0, 0, 0, .35)',
    letterSpacing: '.7px'
  }
}

export const styleEntrence = {
  backgroundImage: 'url(' + BALCONY_JPG + ')',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  transform: 'scale(1.05)',
  marginBottom: '150px',

  p: {
    fontSize: `${15 / 16}em`,
    letterSpacing: '.7px',

    '> ul': {
      padding: 0,
      listStyleType: 'none'
    },
    '> ul > li': {
      color: 'rgba(0, 0, 0, .25)',
      fontWeight: 500
    },
    '> ul > li > span': {
      display: 'block',
      background: 'rgba(0, 0, 0, .35)',
      borderRadius: '100%'
    },

    '> div': {
      maxWidth: `${500 / 15}em`,
      color: 'rgba(0, 0, 0, .35)',
      lineHeight: '20px'
    },
    '> div > img': {
      width: `${20 / 15}em`,
      marginTop: '4px',
      opacity: 0.65
    }
  }
}

export default {
  section: {
    minHeight: `${700 / 16}em`
  },
  p: { background: cream }
}
