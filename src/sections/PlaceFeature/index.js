'use strict'
import { Box, Grid } from 'smbls'
import SHELF_JPG from '../../assets/images/sololaki/shelf.jpg'

export const placeFeature = {
  proto: [Box],
  props: {
    margin: 'F2 0',
    flexAlign: 'center center',
    '@mobileL': { margin: 'E 0 F 0' },
    '@mobileM': { margin: 'E 0 E 0' }
  },
  style: { width: '100%' },
  content: {
    proto: [Grid, Box],
    props: {
      columns: 'repeat(4, 270px)',
      gap: 'A2',
      rowGap: 'A2',
      padding: 'F 0',
      position: 'relative',
      '@tabletL': { columns: 'repeat(2, 340px)' },
      '@mobileL': {
        flexFlow: 'column',
        columns: 'repeat(1, 340px)',
        maxHeight: `${500 / 16}em`
      },
      '@mobileM': {
        padding: 'D 0',
        columns: 'repeat(1, 300px)',
        maxHeight: `${400 / 16}em`
      },
      '@mobileXS': { columns: 'repeat(1, 270px)' }
    },
    style: {
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
    },
    childProto: {
      proto: Box,
      props: {
        flexAlign: 'center flex-start',
        padding: 'C B1',
        round: 'Y'
      },
      style: {
        boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, .15)',
        zIndex: 10,
        backdropFilter: 'blur(5px)',
        background: 'radial-gradient(rgba(248, 241, 227, .55), rgba(248, 241, 227, .65))',
        '@media only screen and (max-width: 1366px)': {
          boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, .05)'
        }
      },
      paragraph: {
        proto: Box,
        props: {
          flexFlow: 'column',
          gap: 'W',
          flexAlign: 'flex-start flex-start'
        },
        title: {
          tag: 'caption',
          proto: Box,
          props: {
            fontWeight: '900',
            color: 'black .85'
          },
          style: {
            whiteSpace: 'nowrap',
            textTransform: 'uppercase',
            fontSize: `${12.3 / 16}em`,
            letterSpacing: '.3px'
          }
        },
        p: {
          proto: Box,
          props: {
            padding: '0 0 0 U',
            color: 'black .6'
          },
          style: {
            letterSpacing: '.1px',
            fontSize: `${14.4 / 16}em`
          }
        }
      }
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
