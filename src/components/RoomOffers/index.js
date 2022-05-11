'use strict'
import { Box, Text, Button, Img } from '@symbo.ls/symbols'

import style, { styleHeader, styleOffers } from './style'
import MINUS_ICON from '../../assets/icons/minusCream.png'

const header = {
  tag: 'header',
  proto: Box,
  style: styleHeader,
  props: {
    flexAlign: 'center space-between',
    padding: '0 A 0 B'
  },
  // class: {
  //   show: (element, state) => state.offers
  //     ? { '@media only screen and (max-width: 1225px)': { height: '100px' } }
  //     : {}
  // },
  h5: {
    proto: [Text, Box],
    props: {
      text: 'offers',
      color: 'cream 1'
    },
    style: { fontWeight: 700, fontSize: `${12.7 / 16}em` }
  },
  minimize: {
    proto: [Button, Box],
    props: {
      padding: 'Y2'
    },
    span: {
      proto: [Button, Box],
      props: {
        boxSize: 'B W2',
        background: 'cream 1',
        round: 'Z'
      },
      style: {
        '@media only screen and (max-width: 1225px)': { width: `${30 / 16}em`, height: '3px' }

      }
    },

    style: {
      background: 'transparent'
    },

    on: {
      click: (event, element, state) => {
        state.offers
          ? state.update({ offers: false })
          : state.update({ offers: true })
      }
    }
  }
}

const offers = {
  proto: Box,
  style: styleOffers,
  props: {
    padding: '0 C2 0 C2'
  },
  class: {
    show: (element, state) => state.offers
      ? {
        minHeight: `${180 / 16}em`,
        '@media only screen and (max-height: 600px)': {
          minHeight: `${100 / 16}em`
        },
        '> span': {
          opacity: 1,
          transition: 'height .4s linear, opacity .5s linear .4s'
        }
      }
      : {
        minHeight: `${0 / 16}em`,
        paddingBottom: `${0 / 16}em`,
        '> span': {
          height: 0,
          opacity: '0',

        }
      }
  },
  childProto: {
    tag: 'span',
    proto: [Box, Text],
    props: {
      color: 'cream .85'
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

export const RoomOffers = {
  tag: 'aside',
  proto: Box,
  style,
  props: {
    position: 'absolute',
    left: '50px',
    bottom: '-50px',
    flexFlow: 'column'
  },
  class: {
    show: (element, state) => state.offers
      ? {
        '@media only screen and (min-width: 1225px)': { paddingBottom: '30px', zIndex: 300 },
        '@media only screen and (max-width: 1225px)': { paddingBottom: '16px' }
      }
      : {}
  },
  header,
  offers
}
