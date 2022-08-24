'use strict'

import { ResidenceText } from '../texts'

import { SectionTitle } from '../components'
import BB_JPG from '../assets/images/sololaki/b.jpg'

const title = {
  proto: SectionTitle,
  props: {
    color: 'black .85',
    css: { zIndex: '2' }
  }
}

const paragraph = {
  props: {
    minWidth: '100%',
    padding: 'G 0',
    position: 'relative',
    css: {
      // border: '2px solid yellow',
      backgroundImage: 'url(' + BB_JPG + ')',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center center',
      '@media only screen and (max-width: 1366px)': { backgroundAttachment: 'initial' },
      '&:before': {
        content: '""',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backdropFilter: 'blur(.5px)',
        background: 'radial-gradient(rgba(0, 0, 0, .87), rgba(0, 0, 0, .65))'
      }
    }
  },

  p: {
    proto: ResidenceText,
    props: {
      minWidth: `${630 / 16}em`,
      textAlign: 'center',
      flexFlow: 'column',
      gap: 'A',
      color: 'cream2',
      position: 'absolute',
      top: '50%',
      left: '50%',
      css: { transform: 'translate(-50%, -50%)' },
      '@tabletS': { minWidth: `${500 / 16}em` },
      '@mobileM': {
        fontSize: `${14.7 / 16}em`,
        minWidth: `${400 / 14.7}em`
      },
      '@mobileS': {
        minWidth: `${330 / 14.7}em`,
        textAlign: 'left'
      },
      '@mobileXS': {
        fontSize: `${14 / 16}em`,
        padding: '0 A'
      }

    }
  }
}

// const paragraph = {
//   proto: ResidenceText,
//   props: {
//     flexFlow: 'column',
//     gap: 'A',
//     maxWidth: `${630 / 16}em`,
//     color: 'cream2 .7',
//     textAlign: 'center',
//     position: 'relative',
//     css: {
//       zIndex: '2',
//       boxSizing: 'content-box',
//       '@media only screen and (max-width: 480px)': {
//         textAlign: 'justify',
//         fontSize: `${14.7 / 16}em`
//       }
//     },
//     '@mobileL': {
//       padding: '0 C'
//     },
//     '@mobileS': {
//       padding: '0 B1'
//     }
//   }
// }

// const props = {
//   minHeight: '100%',
//   position: 'relative',
//   flexFlow: 'column',
//   flexAlign: 'center center',
//   gap: 'B',
//   color: 'white',
//   margin: 'F 0',
//   css: {
//     backgroundImage: 'url(' + BB_JPG + ')',
//     backgroundSize: 'cover',
//     backgroundAttachment: 'fixed',
//     backgroundPosition: 'center center',
//     '@media only screen and (max-width: 1366px)': { backgroundAttachment: 'initial' },
//     '&:before': {
//       content: '""',
//       width: '100%',
//       height: '100%',
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       backdropFilter: 'blur(.5px)',
//       background: 'radial-gradient(rgba(0, 0, 0, .87), rgba(0, 0, 0, .65))'
//     }
//   }
// }

const props = {
  minHeight: '100%',
  flexFlow: 'column',
  flexAlign: 'center center',
  gap: 'B',
  margin: 'E 0 0 0',
  css: {}
  // css: { border: '2px solid red' }
}

export const Residence = {
  tag: 'section',
  props,
  attr: { id: 'residence' },
  title,
  paragraph

  // title,
  // paragraph
}
