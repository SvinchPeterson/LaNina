'use strict'
import { Grid } from 'smbls'

import SVANETI_JPG from '../../../assets/images/travel/svaneti.png'
// import SVANETI_TABLET_JPG from '../../../assets/images/travel/svaneti-tablet.jpg'
// import SVANETI_MOBILE_JPG from '../../../assets/images/travel/svaneti-mobile.jpg'

import BAKHMARO_JPG from '../../../assets/images/travel/bakhmaro.jpg'
import BAKHMARO_MOBILE_JPG from '../../../assets/images/travel/bakhmaro-mobile.jpg'

import MTSKETA_JPG from '../../../assets/images/travel/mtsketa.jpg'
import MTSKETA_TABLET_JPG from '../../../assets/images/travel/mtsketa-tablet.jpg'
import MTSKETA_MOBILE_JPG from '../../../assets/images/travel/mtsketa-mobile.jpg'

import KAZBEGI_JPG from '../../../assets/images/travel/gerget.jpg'
import KAZBEGI_TABLET_JPG from '../../../assets/images/travel/gerget-tablet.jpg'
import KAZBEGI_MOBILE_JPG from '../../../assets/images/travel/gerget-mobile.jpg'

import VARZIA_JPG from '../../../assets/images/travel/varzia.jpg'
import KVEVRI_TABLET_JPG from '../../../assets/images/travel/varzia-tablet.jpg'
import KVEVRI_MOBILE_JPG from '../../../assets/images/travel/varzia-mobile.jpg'

import MARTVILI_JPG from '../../../assets/images/travel/martvili.jpg'
import MARTVILI_TABLET_JPG from '../../../assets/images/travel/martvili-tablet.jpg'
import MARTVILI_MOBILE_JPG from '../../../assets/images/travel/martvili-mobile.jpg'

const gridGallery = {
  extend: Grid,
  ...[
    {
      props: {
        backgroundImage: 'url(' + SVANETI_JPG + ')',
        // '@tabletS': { backgroundImage: 'url(' + SVANETI_TABLET_JPG + ')' },
        // '@mobileM': { backgroundImage: 'url(' + SVANETI_MOBILE_JPG + ')' },
        gridColumn: '1 / span 2',
        gridRow: '1 / span 2'
      }
    },

    {
      props: {
        gridColumn: '3 / span 4',
        backgroundImage: 'url(' + BAKHMARO_JPG + ')',
        '@tabletS': { backgroundImage: 'url(' + BAKHMARO_MOBILE_JPG + ')' }
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
        backgroundImage: 'url(' + KAZBEGI_JPG + ')',
        '@tabletS': { backgroundImage: 'url(' + KAZBEGI_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + KAZBEGI_MOBILE_JPG + ')' },
        gridColumn: '1 / span 6',
        gridRow: 'span 2'
      }
    },

    {
      props: {
        gridRow: '5',
        gridColumn: '1 / span 2',
        backgroundImage: 'url(' + VARZIA_JPG + ')',
        '@tabletS': { backgroundImage: 'url(' + KVEVRI_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + KVEVRI_MOBILE_JPG + ')' }
      }
    },

    {
      props: {
        gridRow: '5',
        gridColumn: '3 / span 4',
        backgroundImage: 'url(' + MARTVILI_JPG + ')',
        '@tabletS': { backgroundImage: 'url(' + MARTVILI_TABLET_JPG + ')' },
        '@mobileL': { backgroundImage: 'url(' + MARTVILI_MOBILE_JPG + ')' }
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
  title: {
    text: 'gallery',
    fontSize: 'C',
    textTransform: 'capitalize',
    fontWeight: '500',
    padding: 'F2 - A D',
    position: 'relative',
    display: 'flex',
    gap: 'Y',
    style: { alignItems: 'center' },
    ':before': {
      content: '""',
      boxSize: '2px 50px',
      background: 'black'
      // position: 'absolute'

    }
    // textTransform: 'uppercase',
    // style: { letterSpacing: '5px' }
  },
  gridGallery: {
    maxWidth: '1440px',
    columns: 'repeat(4, 1fr)',
    rows: 'repeat(5, 450px)',
    padding: '0 0',
    position: 'relative',
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
        background: 'rgba(30, 98, 123, .5)'
        // background: 'linear-gradient(rgba(30, 98, 123, 0), rgba(30, 98, 123, .75))'
        // background: 'radial-gradient(rgba(30, 98, 123, .8), rgba(30, 98, 123, .8), rgba(30, 98, 123, 1))',

      }
    }
  }
}

export const gallery = {
  props,
  attr: { id: 'gallery' },
  title: {},
  gridGallery
}
