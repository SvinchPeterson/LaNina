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
    padding: '0 B1'
  },
  // class: {
  //   show: (element, state) => state.offers
  //     ? { '@media only screen and (max-width: 1225px)': { height: '100px' } }
  //     : {}
  // },
  h5: {
    proto: [Text, Box],
    props: {
      text: 'room offers',
      size: 'Z',
      color: 'cream 1'
    },
    style: { fontWeight: '700' }
  },
  minimize: {
    proto: [Button, Box],
    props: {
      padding: 'Y2'
    },
    span: {
      proto: [Button, Box],
      props: {
        boxSize: 'B1 X',
        background: 'cream .65',
        round: 'Z'
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
        minHeight: `${200 / 16}em`,
        paddingBottom: `${30 / 16}em`,
        '> span': {
          height: '23px',
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
          transition: 'height .2s linear, opacity 0s linear 0s'
        }
      }
  },
  childProto: {
    tag: 'span',
    proto: [Box, Text],
    props: {
      color: 'cream 1'
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
    bottom: '-80px',
    flexFlow: 'column'
  },
  class: {
    show: (element, state) => state.offers
      ? {
        '@media only screen and (min-width: 1225px)': { paddingBottom: '30px' },
        '@media only screen and (max-width: 1225px)': { paddingBottom: '16px' }
      }
      : {}
  },
  header,
  offers
}
