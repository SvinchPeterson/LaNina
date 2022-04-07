'use strict'

import BB_JPG from '../../assets/images/sololaki/BB.jpg'
import ENTRENCE_JPG from '../../assets/images/sololaki/entrence.jpg'

export const styleResidence = {
  backgroundImage: 'url(' + BB_JPG + ')',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  minHeight: `${700 / 16}em`,
  backgroundAttachment: 'fixed',
  backgroundPosition: 'top left 100px',
  p: {
    maxWidth: `${850 / 16}em`,
    letterSpacing: '.8px',
    fontWeight: 300,
    lineHeight: `${28 / 16}em`,
    boxShadow: '0px 0px 75px 0px rgba(244, 233, 217, .55)'
  }
}

export const styleEntrence = {
  minHeight: `${700 / 16}em`,
  backgroundImage: 'url(' + ENTRENCE_JPG + ')',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed'
}
