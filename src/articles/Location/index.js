'use strict'
import { Box } from '@symbo.ls/symbols'

import { locationText, distanceText, transferText } from '../../texts'

const paragraph = {
  tag: 'p',
  proto: [locationText, Box],

  props: {
    maxWidth: 'H1',
    padding: 'D D D2 D',
    color: 'black .55',
    fontSize: 'Z',
    '@mobileM': {
      padding: '0 C D C',
      color: 'black .55'
    }
  },
  style: {
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: '700',
    '@media only screen and (max-width: 560px)': {
      fontWeight: '700'
    }
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
      color: 'black .4'
    },
    style: {
      letterSpacing: '1px',
      fontWeight: 400
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
    padding: 'E 0 0 0',
    '@tabletL': { padding: 'E2 0 0 0' },
    '@tabletM': { padding: 'E 0 0 0' }
  },
  attr: { id: 'location' },

  paragraph,
  location: {
    tag: 'section',
    proto: Box,
    props: {
      flexAlign: 'center center',
      gap: 'D',
      '@tabletL': {
        flexFlow: 'column',
        gap: 'D2'
      }
    },

    map,
    airPort
  }
}
