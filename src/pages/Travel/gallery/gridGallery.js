'use strict'

import { Grid } from 'smbls'

import TBILISI_JPG from '../../../assets/images/travel/tbilisi.jpg'
import BORJOMI_JPG from '../../../assets/images/travel/borjomi.jpeg'
import MTSKETA_JPG from '../../../assets/images/travel/mtsketa.jpg'
import KAKHETI_JPG from '../../../assets/images/travel/kakheti.jpg'
import MARTVILI_JPG from '../../../assets/images/travel/martvili.jpg'
import KUTAISI_JPG from '../../../assets/images/travel/kutaisi.jpg'
import GORI_JPG from '../../../assets/images/travel/gori.jpg'
import KAZBEGI_JPG from '../../../assets/images/travel/kazbegi.jpg'

const props = {
  maxWidth: '1440px',
  columns: 'repeat(4, 1fr)',
  round: 'C',
  rows: 'repeat(6, 550px)',
  position: 'relative',
  overflow: 'hidden',
  gap: 'Z',
  '@tabletM': {
    columns: '100%',
    rows: 'repeat(8, 450px)',
    round: 'H1'
  },
  style: {
    '@media only screen and (max-width: 768px) and (max-height: 800px)': {
      gridTemplateRows: 'repeat(8, 350px) !important'
    },
    '@media only screen and (max-width: 560px) and (max-height: 560px)': {
      gridTemplateRows: 'repeat(8, 300px) !important'
    }
  },

  childProps: {
    position: 'relative',
    backgroundSize: 'cover',
    overflow: 'hidden',
    '@tabletM': {
      round: 'Z'
    },
    style: {
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      '@media only screen and (max-width: 1366px)': {
        backgroundAttachment: 'initial'
      }
      // '@media only screen and (max-height: 1366px)': {
      //   backgroundAttachment: 'initial'
      // }
    },
    title: {
      position: 'absolute',
      color: 'cream2',
      fontSize: 'C',
      fontWeight: '700',
      textTransform: 'uppercase',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    ':before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(rgba(30, 40, 49, .3), rgba(30, 40, 49, 1))'
    }
  }
}

export const gridGallery = {
  extend: Grid,
  props,
  childExtend: { title: {} },
  ...[
    {
      props: {
        round: 'G1 G1 G 0',
        backgroundImage: 'url(' + TBILISI_JPG + ')',
        gridColumn: '1 / span 2',
        gridRow: '1 / span 2',
        title: { text: 'tbilisi' },
        '@tabletM': {
          gridColumn: '1',
          gridRow: '1'
        }
      }
    },

    {
      props: {
        round: 'G1 G1 0 0',
        gridColumn: '3 / span 4',
        backgroundImage: 'url(' + BORJOMI_JPG + ')',
        title: { text: 'borjomi' },

        '@tabletM': {
          gridColumn: '1',
          gridRow: '2'
        }
      }
    },

    {
      props: {
        gridColumn: '3 / span 4',
        round: '0 0 0 F2',
        backgroundImage: 'url(' + MTSKETA_JPG + ')',
        title: { text: 'mtsketa' },

        '@tabletM': {
          gridColumn: '1',
          gridRow: '3'
        }
      }
    },

    {
      props: {
        gridRow: '3',
        round: '0 G1 G1 0',
        gridColumn: '1 / span 2',
        backgroundImage: 'url(' + KAKHETI_JPG + ')',
        title: { text: 'kakheti' },
        '@tabletM': {
          gridColumn: '1',
          gridRow: '4'
        }
      }
    },

    {
      props: {
        round: 'G1 0 0 G1',
        gridRow: '3',
        gridColumn: '3 / span 4',
        backgroundImage: 'url(' + MARTVILI_JPG + ')',
        title: { text: 'martvili' },
        '@tabletM': {
          gridColumn: '1',
          gridRow: '5'
        }
      }
    },
    {
      props: {
        round: '0 G1 G1 0',
        gridRow: '4',
        gridColumn: '1 / span 2',
        backgroundImage: 'url(' + KUTAISI_JPG + ')',
        title: { text: 'kutaisi' },
        '@tabletM': {
          gridColumn: '1',
          gridRow: '6'
        }
      }
    },

    {
      props: {
        round: 'G1 0 0 G1',
        gridRow: '4',
        gridColumn: '3 / span 4',
        backgroundImage: 'url(' + GORI_JPG + ')',
        title: { text: 'gori' },
        '@tabletM': {
          gridColumn: '1',
          gridRow: '7'
        }
      }
    },

    {
      props: {
        round: '0 0 I1 I1',
        backgroundImage: 'url(' + KAZBEGI_JPG + ')',
        gridColumn: '1 / span 6',
        gridRow: 'span 5',
        title: { text: 'kazbegi' },
        '@tabletM': {
          gridColumn: '1',
          gridRow: '8'
        }
      }
    }
  ]

}
