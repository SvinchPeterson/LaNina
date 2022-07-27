'use strict'
import { Grid } from 'smbls'

import { Feature } from '../../components'
import SHELF_JPG from '../../assets/images/sololaki/shelf.jpg'

const props = {
  margin: 'F2 0',
  flexAlign: 'center center',
  '@mobileL': { margin: 'E 0 F 0' },
  '@mobileM': { margin: 'E 0 E 0' },
  css: { width: '100%' },

  content: {
    columns: `repeat(4, ${270 / 16}em)`,
    gap: 'A2',
    rowGap: 'A2',
    padding: 'F E',
    position: 'relative',
    '@tabletL': { columns: `repeat(2, ${340 / 16}em)` },
    '@mobileL': {
      flexFlow: 'column',
      columns: `repeat(1, ${340 / 16}em)`,
      maxHeight: `${500 / 16}em`
    },
    '@mobileM': {
      padding: 'D 0',
      columns: `repeat(1, ${340 / 16}em)`,
      maxHeight: `${400 / 16}em`
    },
    '@mobileXS': { columns: `repeat(1, ${340 / 16}em)` },

    css: {
      width: '100%',
      backgroundAttachment: 'fixed',
      backgroundImage: 'url(' + SHELF_JPG + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      justifyContent: 'center',
      '@media only screen and (max-width: 1366px)': {
        backgroundAttachment: 'initial',
        backgroundImage: 'none'
      },
      '@media only screen and (max-width: 768px)': {
        overflowY: 'auto',
        background: 'radial-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .15))'
      },
      '&:before': {
        content: '""',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        background: 'radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .3), rgba(0, 0, 0, .3))',
        zIndex: 5,
        '@media only screen and (max-width: 1366px)': {
          background: 'radial-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .15))'
        },
        '@media only screen and (max-width: 768px)': {
          background: 'radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))'
        }
      }
    }
  }
}

export const placeFeature = {
  props,
  content: {
    proto: Grid,
    childProto: {
      proto: Feature

    },

    ...[
      {
        paragraph: {
          title: { text: 'City center' },
          p: { text: '7 min from Liberty square' }
        }
      },

      {
        paragraph: {
          title: { text: 'Personal service' },
          p: { text: 'Feel yourself at home' }
        }
      },

      {
        paragraph: {
          title: { text: 'We work round the clock' },
          p: { text: 'Check-in possible 24 hours' }
        }
      },

      {
        paragraph: {
          title: { text: 'Housekeeping' },
          p: { text: 'Weekly housekeeping' }
        }
      },

      {
        paragraph: {
          title: { text: 'Kitchen inside' },
          p: { text: 'Cook at home' }
        }
      },

      {
        paragraph: {
          title: { text: 'Accounting documents' },
          p: { text: 'Complete kit of accounting' }
        }
      },

      {
        paragraph: {
          title: { text: 'Mutimediea' },
          p: { text: 'Vinyl player, Streaming' }
        }
      },

      {
        paragraph: {
          title: { text: 'with compliments' },
          p: { text: 'Georgian wine, Coffee & Tea' }
        }
      }
    ]

  }

}
