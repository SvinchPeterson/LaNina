'use strict'
import { Block, Text, Img } from '@rackai/symbols'

import ARROW_PNG from '../../assets/down-arrowBlack.png'

import style from './style'

export default {
  tag: 'aside',
  proto: Block,
  style,
  props: { padding: 'B1 B' },

  header: {
    proto: Block,
    props: {
      flexAlign: 'center center',
      gap: 'G',
      padding: '0 0 C 0'
    },
    h5: {
      proto: Text,
      props: { text: 'place offers' }
    },
    minimize: {
      tag: 'button',
      proto: Block,
      props: { padding: 'Z' },
      span: {
        proto: Block,
        props: {
          boxSize: 'B1 W'
        }
      }
    }
  },

  offer: {
    proto: Block,
    props: {
      padding: '0 0 B 0'
    },
    childProto: {
      tag: 'span',
      proto: [Block, Text],
      props: {
        size: 'A'
      }
    },
    ...[
      { props: { text: 'Wifi' } },
      { props: { text: 'Open terrace' } },
      { props: { text: 'Private entrance' } },
      { props: { text: 'Air conditioning (Portable)' } },
      { props: { text: 'Heating' } },
      { props: { text: 'Ironing facilities' } },
      { props: { text: 'Drying rack' } },
      { props: { text: 'Mosquito net' } },
      { props: { text: 'Carbon monoxide alarm' } },
      { props: { text: 'Smoke alarm' } },
      { props: { text: 'Vinyl Media Player' } },
      { props: { text: 'Smart TV' } },
      { props: { text: 'Bed linens' } },
      { props: { text: 'Clothing storage' } },
      { props: { text: 'Hangers' } },
      { props: { text: 'Extra pillows and blankets' } },
      { props: { text: 'Robes & Slippers' } },
      { props: { text: 'Books and journals' } }
    ]
  }
}
