'use strict'

import { banner } from '../Sololaki/banner'

import TBILISI_JPG from '../../assets/images/travel/tbilisi2.jpg'
import TBILISI_TABLET_JPG from '../../assets/images/travel/tbilisi2-tablet.jpg'

const props = {
  image: {
    ':before': { background: 'radial-gradient(rgba(30, 98, 123, .15), rgba(30, 98, 123, .65))' },
    backgroundImage: 'url(' + TBILISI_JPG + ')',
    '@tabletM': { backgroundImage: 'url(' + TBILISI_TABLET_JPG + ')' }
  },

  title: {
    margin: '- - E -H1',
    '@tabletM': { margin: '- - E 0' },
    '@mobileS': { alignItems: 'center' },

    h3: {
      text: 'BB TRAVEL',
      fontWeight: '100',
      fontSize: 'I',
      '@mobileS': { fontSize: 'G' }
    },

    caption: {
      text: 'make your trip extraordinary',
      fontSize: 'Z',
      margin: '- -D1 - -',
      style: {
        fontWeight: '400',
        letterSpacing: '3px',
        fontStyle: 'italic'
      },
      ':before': {
        width: '100%',
        top: '-Z1',
        height: '.8px',
        background: 'orange3',
        '@mobileS': { top: '0' }
      },
      '@mobileL': { margin: '- 0 - -' },
      '@mobileS': {
        padding: 'A2 - - -',
        maxWidth: '220px',
        lineHeight: '25px'
      }
    }
  }
}
export const travelBanner = {
  extend: banner,
  props
}
