'use strict'
import { Box, IconText, Text } from '@symbo.ls/symbols'

import { bbSololaki } from '../../texts'

import { styleResidence, styleEntrence } from './style'

const residence = {
  proto: Box,
  class: [styleResidence],
  p: {
    proto: [bbSololaki, Box]
  }
}

const entrance = {
  proto: Box,
  class: [styleEntrence],

  texts: {
    proto: Box,
    props: {
      flexFlow: 'column'
    },
    style: {
      fontSize: `${15 / 16}em`,
      fontWeight: 400
    },
    entrences: {
      proto: Box,
      props: {
        flexFlow: 'column',
        gap: 'Y2'
      },
      childProto: {
        proto: [Text, Box],
        props: { color: 'cream' },
        style: {
          letterSpacing: '1.5px',
          textTransform: 'uppercase'
        }
      },
      ...[
        { props: { text: 'private entrance' } },
        { props: { text: 'separate street or building entrance' } },
        { props: { text: 'free parking on premises' } }
      ]
    },
    luggage: {
      tag: 'p',
      proto: [Text, Box],
      props: {
        text: `Luggage dropoff allowed for guests' convenience when they have early arrival or late departure`,
        color: 'orange2 1',
        padding: 'B 0 Z 0'
      },
      style: {
        maxWidth: `${450 / 16}em`,
        letterSpacing: '1px',
        lineHeight: '20px'
      }
    },
    stay: {
      tag: 'p',
      proto: [Text, Box],
      props: {
        text: 'Long term stays allow for 28 days or more',
        color: 'orange2 1'
      },
      style: {
        fontWeight: 400,
        letterSpacing: '1px'
      }
    }
  },

  image: {
    tag: 'span'
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
  entrance

}
