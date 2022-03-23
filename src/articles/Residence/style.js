'use strict'

import { cream } from '../../colors'
import GREEN_LANINA_JPG from '../../assets/images/sololaki/greenLanina2.jpg'
import BALCONY_JPG from '../../assets/images/sololaki/balcony3.jpg'

export const styleResidenceOrigin = {
  position: 'relative',
  minHeight: `${650 / 16}em`,
  // border: '3px solid red',
  boxSizing: 'border-box',
  paddingLeft: `${80 / 16}em`,
  // justifyContent: 'center',
  '> div': {
    backgroundImage: 'url(' + GREEN_LANINA_JPG + ')',
    filter: 'grayscale(50%) brightness(70%)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    flex: 1,
    transition: 'all 1s ease-in-out'
    // borderTopLeftRadius: '200px'
  },
  '> p': {
    flex: 1,
    // border: '4px solid green',
    position: 'absolute',
    maxWidth: `${900 / 16}em`,
    boxShadow: '0px 0px 75px 0px rgba(244, 233, 217, .55)',
    lineHeight: `${28 / 16}em`
  }
}

export default {
  // border: '8px solid red',
  '> section': {
    '> div': { backgroundAttachment: 'fixed' },
    '> p': {
      background: 'rgba(244, 233, 217, 1)',
      color: 'rgba(0, 0, 0, .25)',
      letterSpacing: '.5px'
    }
  }
}
