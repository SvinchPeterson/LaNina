'use strict'
import { Box, Grid } from 'smbls'

import { GRID_ITEM_DATA } from './state'

import { SectionTitle } from '../../../components'

import KAZBEGI_JPG from '../../../assets/images/travel/gazbegi.jpg'
import KVARIATI_JPG from '../../../assets/images/travel/kvariati.jpg'
import MTSKETA_JPG from '../../../assets/images/travel/mtsketa.jpg'
import TBILISI_JPG from '../../../assets/images/travel/tbilisi.jpg'
import SIKA_JPG from '../../../assets/images/travel/sika.jpg'
import SEA_JPG from '../../../assets/images/travel/sea.jpg'
import SIGNAGI_JPG from '../../../assets/images/travel/signagi.jpg'
import MEIDAN_JPG from '../../../assets/images/travel/meidan.jpg'

const title = {
  extend: SectionTitle,
  text: 'Gallery',
  props: {
    padding: '0 0 Y 0',
    fontSize: 'C',
    fontWeight: '500',
    position: 'relative',
    margin: '0 0 0 5%',
    display: 'flex',
    alignItems: 'center',
    gap: 'Y',
    ':before': {
      content: '""',
      boxSize: '2px B',
      background: 'black',
      borderRadius: '30px'
    }
  }
}
const gridGallery = {
  extend: Grid,
  props: {
    maxWidth: '1440px',
    columns: 'repeat(4, 1fr)',
    rows: 'repeat(5, 400px)',
    padding: '0 0',
    gap: 'X',
    style: {
      '> div': {
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(rgba(30, 40, 49, .5), rgba(30, 40, 49, .8))'
        }

      }
    }
  },
  // childExtend: {
  //   state: GRID_ITEM_DATA,
  //   extend: Box,
  //   props: ({ state }) => ({
  //     gridColumn: state.data.column,
  //     gridRow: state.data.row,
  //     backgroundImage: state.data.image
  //   }),
  //   $setStateCollection: ({ state }) => state.data
  // },
  // ...[
  //   {}, {}
  // ]

  // $setStateCollection: () => GRID_ITEM_DATA.map(props => ({ props }))
  // ...[{}, {}]
  // $setCollection: ({ state }) => state.data
  ...[
    {
      props: {

      },
      style: {
        background: 'red',
        gridColumn: '1 / span 2',
        gridRow: '1 / span 2',
        placeSelf: 'stretch',
        backgroundImage: 'url(' + TBILISI_JPG + ')'
      }
    },
    {
      style: {
        background: 'yellow',
        gridColumn: '3 / span 4',
        backgroundImage: 'url(' + KAZBEGI_JPG + ')'
      }
    },

    {
      style: {
        background: 'blue',
        gridColumn: '3 / span 4',
        backgroundImage: 'url(' + MTSKETA_JPG + ')'
      }
    },

    {
      style: {
        background: 'green',
        gridColumn: '1 / span 6',
        gridRow: 'span 2',
        backgroundImage: 'url(' + SEA_JPG + ')'
      }
    },
    {
      style: {
        background: 'orange',
        gridRow: '5',
        gridColumn: '1 / span 2',
        backgroundImage: 'url(' + SIGNAGI_JPG + ')'
      }

    },
    {
      style: {
        background: 'pink',
        gridRow: '5',
        gridColumn: '3 / span 4',
        backgroundImage: 'url(' + KVARIATI_JPG + ')'
      }

    }
  ]
}

const props = {
  width: '100%',
  maxWidth: '1440px',
  padding: 'E1 0 0 0',
  margin: '0 auto',
  style: { ':hover': { '> div > h3 > div': { width: '100px' } } }
}

export const gallery = {
  props,
  attr: { id: 'gallery' },

  title,
  gridGallery
}
