'use strict'

import { cream } from '../../colors'
import GREEN_LANINA_JPG from '../../assets/images/sololaki/greenLanina2.jpg'
import BALCONY_JPG from '../../assets/images/sololaki/balcony3.jpg'

export const styleResidenceOrigin = {
  position: 'relative',
  minHeight: `${600 / 16}em`,
  border: '3px solid red',
  boxSizing: 'border-box',
  paddingLeft: `${80 / 16}em`,
  '> div': {
    backgroundImage: 'url(' + GREEN_LANINA_JPG + ')',
    filter: 'grayscale(50%) brightness(70%)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    flex: 1
  },
  '> p': {
    flex: 1,
    border: '4px solid green',
    position: 'absolute',
    maxWidth: ''

  }

}

export default {
  border: '8px solid red',
  '> section': {
    '> div': { backgroundAttachment: 'fixed' },
    '> p': { background: 'rgba(244, 233, 217, 1)' }
  }
}
