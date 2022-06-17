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
    width: `${850 / 16}em`,
    height: `${500 / 16}em`,
    backgroundImage: 'url(' + ENTRENCE_JPG + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    marginRight: `${300 / 16}em`,
    zIndex: 2,
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
    width: `${500 / 16}em`,
    height: `${750 / 16}em`,
    backgroundImage: 'linear-gradient(rgba(60,84, 72, .2), rgba(60,84, 72, .35)),url(' + STREET_JPG + ')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'right 180px bottom 200px',
    marginLeft: `${550 / 16}em`,
    marginTop: `${300 / 16}em`,
    zIndex: 2
  }
}

const texts = {
  proto: Box,
  props: {
    position: 'absolute',
    bottom: '-50px'
    // padding: 'F D2 E D2'
  },
  style: {
    marginRight: `${550 / 16}em`,
    zIndex: 1
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
        fontSize: `${13 / 16}em`
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
    },
    style: {
      fontSize: `${13.5 / 16}em`,
      maxWidth: `${400 / 13.5}em`,
      letterSpacing: '1px',
      lineHeight: `${20 / 13.5}em`
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
      // fontWeight: 500,
      letterSpacing: '1px'
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
    marginBottom: `${600 / 16}em`
    // border: '5px solid red',
    // width: '100%',
    // height: '100%'
    // minHeight: '100%'
  },

  yardEntrence,
  streetEntrence,
  texts
}
