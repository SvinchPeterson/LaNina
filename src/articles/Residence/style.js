'use strict'

import { cream } from '../../colors'
import GREEN_LANINA_JPG from '../../assets/images/sololaki/greenLanina2.jpg'

export const styleBBresidence = {
  width: '100%',
  backgroundImage: 'url(' + GREEN_LANINA_JPG + ')',
  backgroundSize: 'contain',
  backgroundPosition: 'left 100px bottom',
  transform: 'scale(.95)',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',

  p: {
    maxWidth: `${1000 / 16}em`,
    boxSizing: 'border-box',
    boxShadow: '-50px 50px 100px 20px rgba(243, 231, 219, .2)',
    lineHeight: `${30 / 16}em`,
    color: 'rgba(0, 0, 0, .35)',
    letterSpacing: '.7px'
  }
}

export default {
  p: { background: cream }
}
