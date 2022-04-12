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
  // props: {
  //   flexAlign: 'center center'
  // },
  // style: {
  //   margin: '200px 0',
  //   minHeight: `${700 / 16}em`,
  //   backgroundImage: 'url(' + WINE_JPG + ')',
  //   backgroundSize: 'contain',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundAttachment: 'fixed',
  //   backgroundPosition: 'center center',
  //   '@media only screen and (max-width: 1225px)': {
  //     backgroundAttachment: 'initial',
  //     backgroundSize: 'cover'
  //   }
  // },

  // p: {
  //   proto: wineText,
  //   style: {
  //     background: 'rgba(244, 233, 217, 1)',
  //     maxWidth: `${700 / 15}em`,
  //     padding: `${100 / 15}em`,
  //     fontSize: `${15 / 16}em`,
  //     color: 'rgba(0, 0, 0, .25)',
  //     letterSpacing: '.7px',
  //     '@media only screen and (max-width: 1225px)': {
  //       fontSize: `${16 / 15}em`,
  //       background: 'rgba(244, 233, 217, .5)',
  //       color: 'rgba(0, 0, 0, .55)',
  //       backdropFilter: 'blur(.5px)'

  //     }
  //   }
  // }

}
