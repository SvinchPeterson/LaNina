'use strict'
import { Grid } from 'smbls'

import SNOW_JPG from '../../../assets/images/travel/snow.jpg'
import SNOW_TABLET_JPG from '../../../assets/images/travel/snow-tablet.jpg'
import SNOW_MOBILE_JPG from '../../../assets/images/travel/snow-mobile.jpg'

import VARZIA_JPG from '../../../assets/images/travel/varzia.jpg'
import VARZIA_MOBILE_JPG from '../../../assets/images/travel/varzia-mobile.jpg'

import MTSKETA_JPG from '../../../assets/images/travel/mtsketa.jpg'
import MTSKETA_TABLET_JPG from '../../../assets/images/travel/mtsketa-tablet.jpg'
import MTSKETA_MOBILE_JPG from '../../../assets/images/travel/mtsketa-mobile.jpg'

import DANCE_JPG from '../../../assets/images/travel/dance.jpg'
import DANCE_TABLET_JPG from '../../../assets/images/travel/dance-tablet.jpg'
import DANCE_MOBILE_JPG from '../../../assets/images/travel/dance-mobile.jpg'

import MUSEUM_JPG from '../../../assets/images/travel/museum.jpg'

import STALIN_JPG from '../../../assets/images/travel/stalin.jpeg'
import STALIN_TABLET_JPG from '../../../assets/images/travel/stalin-tablet.jpeg'
import STALIN_MOBILE_JPG from '../../../assets/images/travel/stalin-mobile.jpeg'

const gridGallery = {
  extend: Grid,
  ...[
    {
      props: {
        backgroundImage: 'url(' + SNOW_JPG + ')',
        '@tabletS': { backgroundImage: 'url(' + SNOW_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + SNOW_MOBILE_JPG + ')' },
        gridColumn: '1 / span 2',
        gridRow: '1 / span 2'
      }
    },

    {
      props: {
        gridColumn: '3 / span 4',
        backgroundImage: 'url(' + VARZIA_JPG + ')',
        '@tabletS': { backgroundImage: 'url(' + VARZIA_MOBILE_JPG + ')' }
      }
    },

    {
      props: {
        gridColumn: '3 / span 4',
        backgroundImage: 'url(' + MTSKETA_JPG + ')',
        '@tabletS': { backgroundImage: 'url(' + MTSKETA_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + MTSKETA_MOBILE_JPG + ')' }
      }
    },

    {
      props: {
        backgroundImage: 'url(' + DANCE_JPG + ')',
        '@tabletS': { backgroundImage: 'url(' + DANCE_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + DANCE_MOBILE_JPG + ')' },
        gridColumn: '1 / span 6',
        gridRow: 'span 2'
      }
    },

    {
      props: {
        gridRow: '5',
        gridColumn: '1 / span 2',
        backgroundImage: 'url(' + MUSEUM_JPG + ')'
      }
    },

    {
      props: {
        gridRow: '5',
        gridColumn: '3 / span 4',
        backgroundImage: 'url(' + STALIN_JPG + ')',
        '@tabletS': { backgroundImage: 'url(' + STALIN_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + STALIN_MOBILE_JPG + ')' }
      }
    }
  ]
}

const props = {
  width: '100%',
  maxWidth: '1440px',
  padding: '0 0 0 0',
  margin: '0 auto',
  style: { ':hover': { '> div > h3 > div': { width: '100px' } } },

  gridGallery: {
    maxWidth: '1440px',
    columns: 'repeat(4, 1fr)',
    rows: 'repeat(5, 450px)',
    padding: '0 0',
    gap: 'X',
    '@tabletS': { rows: 'repeat(5, 300px)' },
    '@mobileL': { rows: 'repeat(5, 250px)' },
    '@mobileM': { rows: 'repeat(5, 200px)' },
    '@mobileS': { rows: 'repeat(5, 150px)' },

    childProps: {
      position: 'relative',
      backgroundSize: 'cover',
      style: {
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        '@media only screen and (max-width: 1366px)': {
          backgroundAttachment: 'initial'
        }
      },
      ':before': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(rgba(30, 40, 49, .5), rgba(30, 40, 49, .5))'
      }
    }
  }
}

export const gallery = {
  props,
  attr: { id: 'gallery' },

  gridGallery
}
