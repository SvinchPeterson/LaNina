'use strict'
import { Box, Text } from '@symbo.ls/symbols'
import ENTRENCE_JPG from '../../assets/images/sololaki/entrance.jpg'
import STREET_JPG from '../../assets/images/sololaki/street.jpg'

const yardEntrence = {
  proto: Box,
  props: {
    position: 'absolute'
  },
  style: {
    height: `${500 / 16}em`,
    backgroundImage: 'url(' + ENTRENCE_JPG + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: 2,
    '@media only screen and (min-width: 1366px)': {
      backgroundAttachment: 'fixed',
      width: `${850 / 16}em`,
      marginRight: `${300 / 16}em`
    },
    '@media only screen and (max-width: 1366px)': {
      width: '80%'
    },
    '@media only screen and (max-width: 768px)': {
      width: '90%',
      height: `${400 / 16}em`
    },
    '@media only screen and (max-width: 560px)': { width: '100%' },
    '@media only screen and (max-width: 350px)': { height: `${300 / 16}em` },
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
    position: 'absolute'
  },
  style: {
    backgroundImage: 'linear-gradient(rgba(60,84, 72, .2), rgba(60,84, 72, .35)),url(' + STREET_JPG + ')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    zIndex: 2,
    '@media only screen and (min-width: 1366px)': {
      width: `${500 / 16}em`,
      height: `${750 / 16}em`,
      backgroundAttachment: 'fixed',
      backgroundPosition: 'right 180px bottom 200px',
      marginLeft: `${550 / 16}em`,
      marginTop: `${300 / 16}em`
    },
    '@media only screen and (max-width: 1366px)': {
      width: `${400 / 16}em`,
      height: `${600 / 16}em`,
      right: `${120 / 16}em`,
      top: '70%',
      display: 'none'
    }
  }
}

const texts = {
  proto: Box,
  props: {
    position: 'absolute',
    bottom: '-50px',
    '@tabletL': {
      left: '0',
      bottom: '40px',
      padding: 'D',
      background: 'cream2'
    },
    '@mobileL': {
      bottom: '100px'
    },
    '@mobileM': {
      padding: 'D B2',
      bottom: '0'
    },
    '@mobileS': { minWidth: '100%' },
    '@mobileXS': {
      padding: 'D A2'

    }
  },
  style: {
    '@media only screen and (min-width: 1366px)': { marginRight: `${550 / 16}em` },
    zIndex: 3
    // background: 'radial-gradient(rgba(60,84, 72, .55), rgba(60,84, 72, .65))'
  },
  entrences: {
    proto: Box,
    props: {
      flexFlow: 'column',
      gap: 'Z'
    },
    childProto: {
      proto: [Text, Box],
      props: { color: 'black .45' },
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
          lineHeight: '10px'
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
      // '@mobileS': { width: '' }
    },
    style: {
      fontSize: `${13.5 / 16}em`,
      maxWidth: `${400 / 13.5}em`,
      letterSpacing: '1px',
      lineHeight: `${20 / 13.5}em`,
      '@media only screen and (max-width: 480px)': {
        width: '280px',
        paddingBottom: '10px'
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
      '@media only screen and (max-width: 480px)': {
        width: '250px'
      }
    }
  }
}

export default {
  proto: Box,
  props: {
    position: 'relative',
    flexAlign: 'flex-start center',
    boxSize: '100% 100%',
    maxHeight: `${750 / 16}em`
  },
  style: {
    marginBottom: `${600 / 16}em`,
    '@media only screen and (max-width: 1366px)': {
      marginBottom: `${150 / 16}em`
    }
    // border: '5px solid red',
    // width: '100%',
    // height: '100%'
    // minHeight: '100%'
  },

  yardEntrence,
  streetEntrence,
  texts
}
