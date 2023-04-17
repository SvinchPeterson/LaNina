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
  gap: 'Y',

  childProps: {
    position: 'relative',
    backgroundSize: 'cover',
    overflow: 'hidden',
    cursor: 'pointer',
    border: '1px solid transparent',
    '@minTabletM': { style:{ backgroundAttachment: 'fixed' } },
    ':before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(rgba(0, 47, 57, .45), rgba(0, 47, 57, 1))'
    },
    '&:hover > h4': {
      color: 'rgba(189, 216, 246, 1)',
      letterSpacing: '.5px'
    },

    title: {
      position: 'absolute',
      color: 'cream',
      fontSize: 'H',
      fontWeight: '100',
      textTransform: 'capitalize',
      letterSpacing: '-1px',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      style: { transition: 'color .5s ease-in-out, letter-spacing .5s ease-in-out' }
    }
  }
}

export const gridGalleries = {
  extend: Grid,
  props,

  childExtend: { title: { tag: 'h4' } },
  ...[
    {
      props: {
        round: 'G1 G1 G 0',
        backgroundImage: 'url(' + TBILISI_JPG + ')',
        gridColumn: '1 / span 2',
        gridRow: '1 / span 2',
        title: { text: 'tbilisi' }
      },

      on: {
        click: (event, element, state) => {
          state.update({ activePopUpModal: true, activeTbilisi: true, activePopUpGallery: true })
        }
      }
    },

    {
      props: {
        round: 'G1 G1 0 0',
        gridColumn: '3 / span 4',
        backgroundImage: 'url(' + BORJOMI_JPG + ')',
        title: { text: 'borjomi' }
      },

      on: {
        click: (event, element, state) => {
          state.update({ activePopUpModal: true, activeBorjomi: true, activePopUpGallery: true })
        }
      }
    },

    {
      props: {
        gridColumn: '3 / span 4',
        round: '0 0 0 G',
        backgroundImage: 'url(' + MTSKETA_JPG + ')',
        title: { text: 'mtsketa' }
      },

      on: {
        click: (event, element, state) => {
          state.update({ activePopUpModal: true, activeMtsketa: true, activePopUpGallery: true })
        }
      }
    },

    {
      props: {
        gridRow: '3',
        round: '0 G1 G1 0',
        gridColumn: '1 / span 2',
        backgroundImage: 'url(' + KAKHETI_JPG + ')',
        title: { text: 'kakheti' }
      },

      on: {
        click: (event, element, state) => {
          state.update({ activePopUpModal: true, activeKakheti: true, activePopUpGallery: true })
        }
      }
    },

    {
      props: {
        round: 'G1 0 0 G1',
        gridRow: '3',
        gridColumn: '3 / span 4',
        backgroundImage: 'url(' + MARTVILI_JPG + ')',
        title: { text: 'martvili' }
      },

      on: {
        click: (event, element, state) => {
          state.update({ activePopUpModal: true, activeMartvili: true, activePopUpGallery: true })
        }
      }
    },

    {
      props: {
        round: '0 G1 G1 0',
        gridRow: '4',
        gridColumn: '1 / span 2',
        backgroundImage: 'url(' + KUTAISI_JPG + ')',
        title: { text: 'kutaisi' }
      },

      on: {
        click: (event, element, state) => {
          state.update({ activePopUpModal: true, activeKutaisi: true, activePopUpGallery: true })
        }
      }
    },

    {
      props: {
        round: 'G1 0 0 G1',
        gridRow: '4',
        gridColumn: '3 / span 4',
        backgroundImage: 'url(' + GORI_JPG + ')',
        title: { text: 'gori' }
      },

      on: {
        click: (event, element, state) => {
          state.update({ activePopUpModal: true, activeGori: true, activePopUpGallery: true })
        }
      }
    },

    {
      props: {
        round: '0 0 I1 I1',
        backgroundImage: 'url(' + KAZBEGI_JPG + ')',
        gridColumn: '1 / span 6',
        gridRow: 'span 5',
        title: { text: 'kazbegi' }
      },

      on: {
        click: (event, element, state) => {
          state.update({ activePopUpModal: true, activeKazbegi: true, activePopUpGallery: true })
        }
      }
    }
  ]
}
