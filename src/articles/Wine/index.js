'use strict'
import { Block } from '@rackai/symbols'
import { wineText } from '../../texts'
import WINE_JPG from '../../assets/images/sololaki/wine.jpg'

export default {
  tag: 'article',
  proto: Block,
  props: {
    flexAlign: 'center center'
  },
  style: {
    margin: '200px 0',
    minHeight: `${700 / 16}em`,
    backgroundImage: 'url(' + WINE_JPG + ')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center'
  },

  p: {
    proto: wineText,
    style: {
      background: 'rgba(244, 233, 217, 1)',
      maxWidth: '700px',
      padding: '100px',
      fontSize: '15px',
      color: 'rgba(0, 0, 0, .25)',
      letterSpacing: '.7px'
    }
  }

}
