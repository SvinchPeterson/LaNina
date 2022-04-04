'use strict'
import { Block, Text, Button, Img } from '@rackai/symbols'

import { roomOffers, roomOffers2 } from '../../animations'
import MINUS_ICON from '../../assets/icons/minus.png'

import style from './style'

export default {
  tag: 'aside',
  proto: Block,
  style,
  props: {
    padding: 'Y B 0 B',
    flexFlow: 'column'
    // gap: 'B'
  },

  header: {
    proto: Block,
    props: {
      flexAlign: 'center center',
      gap: 'G',
      padding: 'B B2 A B'
    },

    h5: {
      proto: Text,
      props: {
        text: 'apartment offers'
      }
    },

    minimize: {
      proto: [Block, Button],
      props: { padding: 'Z' },
      minus: {
        proto: Img,
        props: { src: MINUS_ICON }
      },

      on: {
        click: (event, element, state) => {
          state.offers ? state.update({ offers: false }) : state.update({ offers: true })
        }
      }
    }
  },

  offer: {
    proto: Block,
    props: {
      padding: 'A D D C',
      flexAlign: 'center center'
    },
    class: {
      show: (element, state) => state.offers ? {
        height: '300px',
        animationName: roomOffers2,
        animationDuration: '.55s',
        animationTimingFunction: 'ease-in-out',

        '> span': { opacity: '1' }
      } : {
        animationName: roomOffers,
        animationDuration: '.55s',
        animationTimingFunction: 'ease-in-out',
        paddingTop: 0,
        paddingBottom: 0,
        height: 0,
        '> span': { opacity: '0' }
      }
    },

    childProto: {
      tag: 'span',
      proto: [Block, Text],
      props: {
        // size: 'A'
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
