'use strict'
import { Box, Text } from '@symbo.ls/symbols'
import ENTRENCE_JPG from '../../assets/images/sololaki/entrance.jpg'
import STREET_JPG from '../../assets/images/sololaki/street.jpg'

const yardEntrence = {
  proto: Box,
  props: {
    boxSize: `${850 / 16}em ${500 / 16}em`,
    position: 'absolute',
    margin: '0 G 0 0',
    '@tabletL': {
      width: '80%',
      margin: '0'
    },
    '@mobileL': { boxSize: `90% G3` },
    '@mobileM': { width: '100%' },
    '@mobileXS': { height: 'G' }
  },
  style: {
    backgroundAttachment: 'fixed',
    backgroundImage: 'url(' + ENTRENCE_JPG + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: 2,
    '@media only screen and (max-width: 1366px)': { backgroundAttachment: 'initial' },
    '&:before': {
      content: '""',
      width: '100%',
      height: '100%',
      display: 'block',
      background: 'linear-gradient(rgba(60,84, 72, .2), rgba(60,84, 72, .65))'
    }
  }
}

const streetEntrence = {
  proto: Box,
  props: {
    position: 'absolute',
    boxSize: `${500 / 16}em ${750 / 16}em`,
    margin: 'G 0 0 H1',
    '@tabletL': { display: 'none' }
  },
  style: {
    backgroundImage: 'linear-gradient(rgba(60,84, 72, .2), rgba(60,84, 72, .35)),url(' + STREET_JPG + ')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    zIndex: 2,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'right 180px bottom 200px'
  }
}

const texts = {
  proto: Box,
  props: {
    position: 'absolute',
    bottom: '0',
    margin: '0 H1 0 0',
    '@tabletL': {
      margin: '0',
      left: '0',
      bottom: 'D2',
      padding: 'D',
      background: 'cream2'
    },
    '@mobileL': {
      bottom: 'D2',
      minWidth: '100%'
    },
    '@mobileM': {
      padding: 'D B',
      bottom: '0'
    },
    '@mobileXS': { padding: 'D A2' }
  },
  style: { zIndex: 3 },

  entrences: {
    proto: Box,
    props: {
      flexFlow: 'column',
      gap: 'Z'
    },
    childProto: {
      proto: [Text, Box],
      props: {
        color: 'black .45'
      },
      style: {
        textTransform: 'uppercase',
        fontWeight: 900,
        fontSize: `${13 / 16}em`,
        '@media only screen and (max-width: 350px)': { fontSize: `${12 / 16}em` }
      }
    },
    ...[
      { props: { text: 'private entrance' } },
      {
        proto: Box,
        props: {
          flexAlign: 'center flex-start',
          gap: '12px'
        },
        style: {
          flexWrap: 'wrap',
          lineHeight: `${10 / 13}em`
        },
        ...[
          { text: 'separate street' },
          { text: 'or', style: { textTransform: 'initial' } },
          { text: 'building entrance' }
        ]
      },
      { props: { text: 'free parking on premises' } }
    ]
  },

  luggage: {
    tag: 'p',
    proto: [Text, Box],
    props: {
      text: `Luggage dropoff allowed for guests' convenience when they have early arrival or late departure`,
      color: 'black .35',
      padding: 'B 0 Y 0'
    },
    style: {
      fontSize: `${13.5 / 16}em`,
      maxWidth: `${400 / 13.5}em`,
      letterSpacing: '1px',
      lineHeight: `${20 / 13.5}em`,
      '@media only screen and (max-width: 480px)': {
        width: `${280 / 13.5}em`,
        paddingBottom: `${10 / 13.5}em`
      }
    }
  },

  stay: {
    tag: 'p',
    proto: [Text, Box],
    props: {
      text: 'Long term stays allow for 28 days or more',
      color: 'black .35'
    },
    style: {
      fontSize: `${13.5 / 16}em`,
      letterSpacing: '1px',
      '@media only screen and (max-width: 480px)': { width: `${250 / 13.5}em` }
    }
  }
}

export default {
  proto: Box,
  props: {
    position: 'relative',
    flexAlign: 'flex-start center',
    boxSize: '100% 100%',
    maxHeight: 'I',
    margin: '0 0 H2 0',
    '@tabletL': { margin: '0 0 E2 0' }
  },

  yardEntrence,
  streetEntrence,
  texts
}
