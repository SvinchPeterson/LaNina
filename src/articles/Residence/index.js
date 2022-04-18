'use strict'
import { Box, Text } from '@symbo.ls/symbols'

import { bbSololaki } from '../../texts'

import { styleResidence, styleEntrence } from './style'

const residence = {
  proto: Box,
  class: [styleResidence],
  props: {
    flexAlign: 'flex-start center'
  },
  p: {
    proto: [bbSololaki, Box],
    props: {
      color: 'black .35',
      background: 'cream',
      padding: 'E 0 E E'
    }
  }
}

const entrenceItem = {
  proto: Box,
  props: {
    flexFlow: 'row',
    flexAlign: 'center flex-start',
    gap: 'Z'
  },
  dot: {
    proto: Box,
    props: {
      boxSize: 'X1 X1',
      background: 'black .35'
    },
    style: {
      borderRadius: '100%',
      '@media only screen and (max-width: 1225px)': {
        background: 'rgba(0, 0, 0, .55)'
      }
    }
  },
  p: {
    proto: [Text, Box],
    props: { color: 'black .35' },
    style: { letterSpacing: '1px', fontWeight: 300 }
  },

  style: {
    '@media only screen and (max-width: 1225px)': {
      '> p': {
        color: 'rgba(0, 0, 0, .55)',
        fontWeight: 500
      }
    }
  }
}

const entrence = {
  proto: Box,
  class: [styleEntrence],
  props: {
    flexAlign: 'flex-end flex-end'
  },

  texts: {
    proto: Box,
    props: {
      flexFlow: 'column',
      background: 'cream',
      padding: 'D1 E C1 E'
    },
    entrences: {
      proto: Box,
      props: {
        flexFlow: 'column',
        gap: 'Z'
      },
      childProto: entrenceItem,
      ...[
        {
          dot: {},
          p: { props: { text: 'private entrance' } }
        },
        {
          dot: {},
          p: { props: { text: 'separate street or building entrance' } }
        },
        {
          dot: {},
          p: { props: { text: 'free parking on premises' } }
        }
      ]
    },
    luggage: {
      tag: 'p',
      proto: [Text, Box],
      props: {
        text: `Luggage dropoff allowed for guests' convenience when they have early arrival or late departure`,
        color: 'orange .75',
        padding: 'B 0 Z 0'
      },
      style: {
        maxWidth: `${400 / 16}em`,
        letterSpacing: '1px',
        lineHeight: '23px',
        fontWeight: 300,
        '@media only screen and (max-width: 1225px)': {
          color: '#EC8551'
        }
      }
    },
    stay: {
      tag: 'p',
      proto: [Text, Box],
      props: {
        text: 'Long term stays allow for 28 days or more',
        color: 'orange .75'
      },
      style: {
        fontWeight: 300,
        letterSpacing: '1px',
        '@media only screen and (max-width: 1225px)': {
          color: '#EC8551'
        }
      }
    }
  }
}

export default {
  proto: Box,
  props: {
    padding: 'F1 0',
    flexFlow: 'column',
    gap: 'G'
  },
  attr: { id: 'residence' },
  style: { background: 'rgba(244, 233, 217, 1)' },

  residence,
  entrence

}
