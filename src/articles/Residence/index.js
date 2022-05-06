'use strict'
import { Box, Text } from '@symbo.ls/symbols'

import { bbSololaki } from '../../texts'

import { styleResidence, styleEntrence } from './style'

const residence = {
  proto: Box,
  class: [styleResidence],
  p: {
    span: {
      proto: [bbSololaki, Box]
    }
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
      fontSize: `${14 / 16}em`,
      fontWeight: 400,
      '@media only screen and (max-width: 768px)': {
        fontWeight: 500
        // fontSize: `${13 / 14}em`
      }
    },
    entrences: {
      proto: Box,
      props: {
        flexFlow: 'column',
        gap: 'Y1'
      },
      childProto: {
        proto: [Text, Box],
        props: { color: 'cream' },
        style: {
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          '@media only screen and (max-width: 768px)': {
            letterSpacing: 0,
            fontWeight: 700
          }
        }
      },
      ...[
        { props: { text: 'private entrance' } },
        {
          proto: Box,
          props: {
            flexAlign: 'center flex-start',
            gap: '8px'
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
        color: 'orange2 1',
        padding: 'B 0 Z 0'
      },
      style: {
        maxWidth: `${450 / 16}em`,
        letterSpacing: '1px',
        lineHeight: `${20 / 16}em`
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
    // padding: '0 0',
    flexFlow: 'column',
    gap: 'G',
    minMax: '100% 100%'
  },
  attr: { id: 'residence' },
  style: {
    background: 'rgba(244, 233, 217, 1)',
    borderBottom: '1px solid rgba(42, 81, 61, 1)',
    paddingTop: `${100 / 16}em`,
    '@media only screen and (max-width: 768px)': {
      gap: `${100 / 16}em`,
      paddingTop: 0
      // padding: '100px 0'
    }
  },

  residence,
  entrance

}
