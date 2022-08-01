'use strict'
import { Grid } from 'smbls'

import { Feature, SectionTitle } from '../../components'
import SHELF_JPG from '../../assets/images/sololaki/shelf.jpg'

const title = {
  proto: SectionTitle,
  props: {
    text: 'Features',
    padding: '0 0 0 D2',
    css: { alignSelf: 'flex-start' }
  }
}

const props = {
  margin: 'B 0 E 0',
  flexAlign: 'center center',
  flexFlow: 'column',
  position: 'relative',
  gap: 'B',
  // '@mobileL': { margin: 'E 0 F 0' },
  // '@mobileM': { margin: 'E 0 E 0' },
  css: {
    width: '100%',
    '&:after': {
      content: '"scroll"',
      position: 'absolute',
      left: '60px',
      writingMode: 'vertical-rl',
      textOrientation: 'upright',
      fontWeight: '900',
      textTransform: 'uppercase',
      fontSize: `${12 / 16}em`,
      display: 'none',
      top: '45%',
      '@media only screen and (max-width: 768px)': {
        display: 'block'
      },
      '@media only screen and (max-width: 560px)': {
        display: 'block',
        left: '20px'
      },
      '@media only screen and (max-width: 350px)': {
        left: '10px'
      }
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '0px',
      bottom: '0',
      zIndex: '100',
      '@media only screen and (max-width: 768px)': {
        boxShadow: '0px 0px 50px 30px rgba(248, 241, 227, 1)'

      }
    }
  },

  content: {
    columns: `repeat(4, ${270 / 16}em)`,
    gap: 'A2',
    rowGap: 'A2',
    padding: 'G E',
    position: 'relative',
    '@tabletL': { columns: `repeat(2, ${340 / 16}em)` },
    '@mobileL': {
      flexFlow: 'column',
      maxHeight: `${500 / 16}em`,
      padding: 'D1 E1'
    },
    '@mobileM': {
      maxHeight: `${400 / 16}em`,
      padding: 'D1 C2'
    },
    '@mobileXS': { padding: 'D1 C' },
    // '@mobileXS': { columns: `repeat(1, ${340 / 16}em)` },

    css: {
      boxSizing: 'border-box',
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
        justifyContent: 'flex-start',
        background: 'radial-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .15))',
        borderTop: '1px solid rgba(248, 241, 227, .3)'
        // '> div': { border: '2px solid red' }
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

const more = {
  props: {
    text: 'more'
  }
}

export const placeFeature = {
  props,

  title,
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
  // more

}
