'use strict'
import { Box, Text } from '@symbo.ls/symbols'
import ENTRENCE_JPG from '../../assets/images/sololaki/entrance.jpg'
import STREET_JPG from '../../assets/images/sololaki/street.jpg'

const yardEntrence = {
  proto: Box,
  props: {
    boxSize: `${650 / 16}em ${400 / 16}em`,
    position: 'absolute',
    margin: '0 G 0 0',
    '@tabletL': {
      boxSize: `80% ${450 / 16}em`,
      margin: '0'
    },
    '@mobileL': { boxSize: `90% G3` },
    '@mobileM': { width: '100%' },
    '@mobileXS': { height: 'G' }
  },
  style: {
    // border: '4px solid red',
    // border: '5px solid rgba(248, 241, 227, 1)',
    boxShadow: 'inset 0 0 35px 1px rgba(0, 0, 0, .8)',
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
      background: 'linear-gradient(rgba(60,84, 72, .2), rgba(60,84, 72, .45))'
    }
  }
}

const streetEntrence = {
  proto: Box,
  props: {
    position: 'absolute',
    boxSize: `${400 / 16}em ${500 / 16}em`,
    margin: 'H 0 0 H1',
    '@tabletL': { display: 'none' }
  },
  style: {
    backgroundImage: 'linear-gradient(rgba(60,84, 72, .2), rgba(60,84, 72, .35)),url(' + STREET_JPG + ')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    zIndex: 2,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'right 170px bottom 200px'
  }
}

const texts = {
  proto: Box,
  props: {
    position: 'absolute',
    margin: 'I1 H -D 0',
    padding: '',
    '@tabletL': {
      margin: '0 0 0 0',
      background: 'cream2',
      padding: '0 C C2 F',
      left: '0'
    },
    '@mobileL': {
      left: '0'
      // padding: 'D 0 0 D'
    }
  },
  style: {
    zIndex: 3,
    alignSelf: 'flex-end',
    boxSizing: 'border-box'
    // border: '5px solid blue'
  },

  entrences: {
    proto: Box,
    props: {
      flexFlow: 'column',
      gap: 'Z',
      '@tabletL': {
        padding: 'D 0 0 0'
      }
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
    flexAlign: 'center center',
    boxSize: `100% ${800 / 16}em`,
    maxHeight: 'I',
    margin: '0 0 H 0',
    '@tabletL': {
      margin: '0 0 E2 0',
      flexAlign: 'flex-start center',
      boxSize: `100% ${670 / 16}em`
    }
  },
  // style: { border: '7px solid green' },

  yardEntrence,
  streetEntrence,
  texts
}
