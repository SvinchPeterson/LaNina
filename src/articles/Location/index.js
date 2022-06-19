'use strict'
import { Box } from '@symbo.ls/symbols'

import { locationText, distanceText, transferText } from '../../texts'

import style from './style'

const paragraph = {
  tag: 'p',
  proto: [locationText, Box],

  props: {
    maxWidth: 'H1',
    padding: '0 D D D',
    color: 'black .35',
    '@mobileM': { padding: '0 B D B' }
  },
  style: {
    textAlign: 'center',
    alignSelf: 'center'
  }
}

const map = {
  tag: 'iframe',
  proto: Box,
  attr: {
    src: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAtj5iaocoLdNMIS2JBIymMUQTmds8_nlI&q=BB+Residence',
    allowfullscreen: true
  },

  props: {
    display: 'block',
    maxWidth: 'H3',
    minHeight: 'H',
    '@tabletL': { minWidth: '80%' },
    '@mobileL': { minWidth: '100%' }
  },
  style: {
    flex: 1,
    border: 'none'
  }
}

const airPort = {
  proto: Box,
  props: {
    flexFlow: 'column',
    flexAlign: 'center center',
    gap: 'C',
    '@mobileS': { padding: '0 B' }
  },

  childProto: {
    tag: 'p',
    proto: Box,
    props: {
      fontSize: 'Z',
      maxWidth: 'G3',
      color: 'black .35'
    }
  },
  ...[
    { proto: distanceText },

    {
      proto: transferText,
      props: {
        flexFlow: 'column',
        flexAlign: 'flex-start flex-start',
        gap: 'Y'
      },

      caption: {
        proto: Box,
        props: {
          text: 'transfer',
          color: 'black .55'
        },
        style: {
          fontWeight: 900,
          textTransform: 'uppercase'
        }
      }
    }
  ]
}

export default {
  tag: 'article',
  proto: Box,
  props: {
    flexFlow: 'column',
    gap: '0',
    padding: 'D 0 0 0'
  },
  attr: { id: 'location' },
  style,

  paragraph,
  location: {
    tag: 'section',
    proto: Box,
    props: {
      flexAlign: 'center center',
      gap: 'D'
    },

    map,
    airPort
  }
}
