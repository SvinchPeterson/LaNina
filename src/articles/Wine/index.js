'use strict'
import { Box } from '@symbo.ls/symbols'
import { wineText } from '../../texts'
import WINE_JPG from '../../assets/images/sololaki/wine.jpg'

export default {
  proto: Box,
  props: {
    flexAlign: 'center center',
    margin: '200px 0'
  },
  style: {
    minHeight: `${700 / 16}em`,
    backgroundImage: 'url(' + WINE_JPG + ')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center'
  },
  p: {
    proto: Box,
    props: {
      background: 'cream'
    },
    style: {
      background: 'rgba(244, 233, 217, 1)',
      fontSize: `${15 / 16}em`,
      color: 'rgba(0, 0, 0, .35)',
      flex: 1
    },

    span: {
      proto: [wineText, Box],
      props: { padding: 'E D' },
      style: {
        display: 'block',
        maxWidth: `${800 / 16}em`,
        margin: '0 auto',
        lineHeight: '23px',
        letterSpacing: '.7px',
        fontWeight: 300
      }
    }
  }
}
