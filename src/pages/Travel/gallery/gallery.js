'use strict'
import { Grid } from 'smbls'

// import SVANETI_JPG from '../../../assets/images/travel/svaneti.png'
// import SVANETI_TABLET_JPG from '../../../assets/images/travel/svaneti-tablet.jpg'
// import SVANETI_MOBILE_JPG from '../../../assets/images/travel/svaneti-mobile.jpg'

import TBILISI_JPG from '../../../assets/images/travel/tbilisi.jpg'
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
  childExtend: {
    title: {}
  },
  ...[
    {
      props: {
        round: 'G1 G1 G1 0',
        backgroundImage: 'url(' + TBILISI_JPG + ')',
        // '@tabletS': { backgroundImage: 'url(' + SVANETI_TABLET_JPG + ')' },
        // '@mobileM': { backgroundImage: 'url(' + SVANETI_MOBILE_JPG + ')' },
        gridColumn: '1 / span 2',
        gridRow: '1 / span 2',
        title: {
          text: 'tbilisi'
          // right: 'B',
          // bottom: 'B'
        }
      }
    },

    {
      props: {
        round: 'G1 G1 0 0',
        gridColumn: '3 / span 4',
        backgroundImage: 'url(' + BAKHMARO_JPG + ')',
        '@tabletS': { backgroundImage: 'url(' + BAKHMARO_MOBILE_JPG + ')' },

        title: {
          text: 'bakhmaro'
          // right: 'B',
          // bottom: 'B'
        }
      }
    },

    {
      props: {
        gridColumn: '3 / span 4',
        round: '0 0 0 G',
        backgroundImage: 'url(' + MTSKETA_JPG + ')',
        '@tabletS': {
          backgroundImage: 'url(' + MTSKETA_TABLET_JPG + ')',
          round: '0 0 0 F'
        },
        '@mobileM': {
          backgroundImage: 'url(' + MTSKETA_MOBILE_JPG + ')',
          round: '0 0 0 E'
        },
        title: {
          text: 'mtsketa'
          // left: 'B',
          // top: 'B'
        }
      }
    },

    {
      props: {
        gridRow: '3',
        round: '0 G1 G1 0',
        gridColumn: '1 / span 2',
        backgroundImage: 'url(' + VARZIA_JPG + ')',
        '@tabletS': { backgroundImage: 'url(' + KVEVRI_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + KVEVRI_MOBILE_JPG + ')' },
        title: {
          text: 'varzia'
          // right: 'B',
          // bottom: 'B'
        }
      }
    },

    {
      props: {
        round: 'G1 0 0 G1',
        gridRow: '3',
        gridColumn: '3 / span 4',
        backgroundImage: 'url(' + MARTVILI_JPG + ')',
        '@tabletS': { backgroundImage: 'url(' + MARTVILI_TABLET_JPG + ')' },
        '@mobileL': { backgroundImage: 'url(' + MARTVILI_MOBILE_JPG + ')' },
        title: {
          text: 'martvili'
          // right: 'B',
          // bottom: 'B'
        }
      }
    },

    {
      props: {
        round: '0 0 I1 I1',
        backgroundImage: 'url(' + KAZBEGI_JPG + ')',
        '@tabletS': { backgroundImage: 'url(' + KAZBEGI_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + KAZBEGI_MOBILE_JPG + ')' },
        gridColumn: '1 / span 6',
        gridRow: 'span 2',
        title: {
          text: 'kazbegi'
        }
      }
    }
  ]
}

const props = {
  width: '100%',
  maxWidth: '1440px',
  padding: 'E2 E1',
  margin: 'E auto',
  style: { ':hover': { '> div > h3 > div': { width: '100px' } } },
  position: 'relative',
  '@tabletM': {
    padding: '- C1 - C1'
  },
  '@mobileL': {
    padding: '- A2'
  },
  '@mobileS': { padding: '- Z1' },

  title: {
    text: 'gallery',
    fontSize: 'C',
    textTransform: 'capitalize',
    fontWeight: '500',
    padding: '- - - -',
    display: 'flex',
    position: 'absolute',
    left: 'C1',
    top: 'G2',
    gap: 'Y',
    '@tabletM': {
      left: 'Y1'
    },
    '@mobileL': {
      top: 'D',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    style: {
      alignItems: 'center',
      letterSpacing: '.5px',
      writingMode: 'vertical-rl',
      textOrientation: 'mixed',
      transform: 'rotate(180deg)',
      '@media only screen and (max-width: 768px)': {
        writingMode: 'initial',
        textOrientation: 'initial',
        transform: 'rotate(0)'
      }
    },
    ':before': {
      content: '""',
      boxSize: `${2 / 16}em ${50 / 16}em`,
      background: 'black',
      display: 'none'
      // position: 'absolute'
    }
    // textTransform: 'uppercase',
    // style: { letterSpacing: '5px' }
  },
  gridGallery: {
    maxWidth: '1440px',
    columns: 'repeat(4, 1fr)',
    round: 'C',
    rows: 'repeat(5, 450px)',
    position: 'relative',
    overflow: 'hidden',
    gap: 'X',
    '@tabletS': { rows: 'repeat(5, 300px)' },
    '@mobileL': {
      rows: 'repeat(5, 250px)',
      gap: 'Y'
    },
    '@mobileM': { rows: 'repeat(5, 200px)' },
    '@mobileS': { rows: 'repeat(5, 150px)' },

    childProps: {
      position: 'relative',
      backgroundSize: 'cover',
      overflow: 'hidden',
      style: {
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        '@media only screen and (max-width: 1366px)': {
          backgroundAttachment: 'initial'
        }
      },
      title: {
        position: 'absolute',
        color: 'cream2',
        fontSize: 'C',
        fontWeight: '700',
        textTransform: 'uppercase',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        '@mobileL': { fontSize: 'B' },
        '@mobileS': { fontSize: 'A' }
        // bottom: 'Z',
        // right: 'A'
      },
      ':before': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(rgba(30, 40, 49, .3), rgba(30, 40, 49, 1))'
        // background: 'linear-gradient(rgba(30, 98, 123, 0), rgba(30, 98, 123, .75))'
        // background: 'radial-gradient(rgba(30, 98, 123, .8), rgba(30, 98, 123, .8), rgba(30, 98, 123, 1))',

      }
    }
  }
}

export const gallery = {
  props,
  attr: { id: 'gallery' },
  title: {
    attr: { id: 'gallery' }
  },
  gridGallery
}
