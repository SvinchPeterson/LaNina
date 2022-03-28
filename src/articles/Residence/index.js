'use strict'
import { Block, Img, Text } from '@rackai/symbols'

import { bbSololaki, stayText } from '../../texts'

import LUGGAGE_PNG from '../../assets/icons/luggage.PNG'

import style, { styleResidenceOrigin, styleEntrence } from './style'

const residenceOrigin = {
  tag: 'section',
  proto: Block,
  style: styleResidenceOrigin,
  props: {
    flexAlign: '0 center'
  },
  p: {
    proto: [bbSololaki, Block],
    props: { padding: 'E 0 F E' }
  }
}

const entrence = {
  tag: 'section',
  proto: Block,
  style: styleEntrence,
  props: { flexAlign: 'flex-end flex-end' },
  p: {
    proto: [Block, Text],
    props: { padding: 'D' },
    entrences: {
      proto: Block,
      props: {
        flexFlow: 'column',
        gap: 'Y',
        padding: '0 0 B 0'
      },
      childProto: {
        proto: Block,
        props: {
          flexAlign: 'center flex-start',
          gap: 'Z'
        },
        style: {
          // opacity: '.45',
          color: 'rgba(168, 98, 63, 1)',
          fontWeight: 700,
          fontSize: `${13 / 15}em`
        },
        dot: {
          style: {
            width: '4px',
            height: '4px',
            borderRadius: '100%',
            background: 'rgba(168, 98, 63, 1)'
            // background: 'rgba(0, 0, 0, 1)'
          }
        },
        span: { proto: Text }
      },
      ...[
        {
          dot: {},
          span: { props: { text: 'private entrance' } }
        },
        {
          dot: {},
          span: { props: { text: 'separate street or building entrance' } }
        },
        {
          dot: {},
          span: { props: { text: 'free parking on premises' } }
        }
      ]
    },
    luggage: {
      proto: Block,
      props: {
        flexAlign: 'flex-start center',
        gap: 'Z'
      },
      style: {
        maxWidth: `${500 / 15}em`,
        opacity: '.5'
      },
      icon: {
        proto: Img,
        props: { src: LUGGAGE_PNG }
      },
      text: `Luggage dropoff allowed
      for guests' convenience when they have early arrival or late departure`
    },
    stay: {
      proto: [stayText, Block],
      props: { padding: 'Z 0 0 B1' }
    }
  }
}

export default {
  tag: 'article',
  proto: Block,
  attr: { id: 'residence' },
  style,
  props: {
    padding: 'F 0 F 0',
    flexFlow: 'column',
    gap: 'G'
  },

  residenceOrigin,
  entrence
}
