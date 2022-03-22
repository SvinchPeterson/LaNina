'use strict'
import { Block, Img } from '@rackai/symbols'

import { bbSololaki } from '../../texts'

import LUGGAGE_PNG from '../../assets/luggage.PNG'

import style, { styleBBresidence, styleEntrence } from './style'

const bbResidence = {
  tag: 'section',
  proto: Block,
  props: { flexAlign: 'flex-start center' },
  style: styleBBresidence,
  image: {},

  p: {
    proto: [Block, bbSololaki],
    props: {
      padding: 'E 0 E E'
    }
  }
}

const entrence = {
  tag: 'section',
  proto: Block,
  props: {
    flexAlign: 'flex-end flex-end'
  },
  style: styleEntrence,

  p: {
    proto: Block,
    props: {
      padding: 'D E',
      flexFlow: 'column',
      gap: 'A'
    },
    entrences: {
      tag: 'ul',
      proto: Block,

      childProto: {
        tag: 'li',
        proto: Block,
        props: {
          flexAlign: 'center flex-start',
          gap: 'Y2'
        },
        dot: {
          tag: 'span',
          proto: Block,
          props: { boxSize: 'X X' }
        }
      },
      ...[
        {
          dot: {},
          text: 'Private entrance'
        },
        {
          dot: {},
          text: 'Separate street or building entrance'
        },
        {
          dot: {},
          text: 'Free parking on premises'
        }
      ]
    },

    luggage: {
      proto: [Block],
      props: {
        flexAlign: 'flex-start center',
        gap: 'Y2'
      },
      icon: {
        proto: Img,
        props: { src: LUGGAGE_PNG }
      },
      text: 'Luggage dropoff allowed for guests convenience when they have early arrival or late departure'

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

  bbResidence,
  entrence
}
