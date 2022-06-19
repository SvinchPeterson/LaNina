'use strict'
import { Box, Text, Button, Grid } from '@symbo.ls/symbols'

const header = {
  tag: 'header',
  proto: Box,
  props: {
    height: 'C1',
    flexAlign: 'center space-between',
    padding: '0 A2 0 B'
  },
  style: {
    textTransform: 'uppercase',
    transition: 'height .3s linear',
    fontWeight: 900
  },

  h5: {
    proto: [Text, Box],
    props: {
      text: 'amenities',
      color: 'cream2 .65',
      fontSize: 'Z'
    }
  },

  minimize: {
    proto: [Button, Box],
    props: { padding: 'Z1' },
    style: { background: 'transparent' },
    span: {
      proto: [Button, Box],
      props: {
        boxSize: 'B X',
        background: 'cream2 .8',
        round: 'Z'
      }
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
  proto: [Grid, Box],
  props: {
    height: '0',
    padding: '0 C2 0 C2',
    columns: 'repeat(2, 1fr)',
    columnGap: 'C',
    rowGap: 'X1',
    '@tabletL': { columns: '100%' }
  },
  style: {
    letterSpacing: '1px',
    transition: 'min-height .6s ease-in-out, padding-bottom .6s ease-in-out',
    '@media only screen and (max-width: 1225px)': {
      overflowY: 'auto',
      transition: 'min-height .4s ease-in-out, padding-bottom .4s ease-in-out'
    }
  },
  class: {
    show: (element, state) => state.offers

      ? {
        minHeight: `${230 / 16}em`,
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
          opacity: '0'
        }
      }
  },

  childProto: {
    tag: 'span',
    proto: [Box, Text],
    props: {
      color: 'cream .85',
      fontSize: 'Z'
    },
    style: {
      fontWeight: 500,
      textTransform: 'uppercase'
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
  props: {
    miWidth: 'G1',
    background: 'green2 .65',
    position: 'absolute',
    left: '50px',
    bottom: '-50px',
    flexFlow: 'column',
    round: 'C',
    '@tabletL': {
      maxHeight: 'G3',
      left: '50%',
      bottom: '-F'
    },
    '@mobileS': {
      maxWidth: 'G',
      bottom: 'E2'
    }
  },
  style: {
    transition: 'all 1s ease-in-out',
    backdropFilter: 'blur(5px)',
    zIndex: '70',
    '@media only screen and (max-width: 1225px)': {
      overflow: 'hidden',
      transform: 'translate(-50%, 50%)'
    }
  },

  class: {
    show: (element, state) => state.offers
      ? {
        '@media only screen and (min-width: 1225px)': { paddingBottom: `${30 / 16}em` },
        '@media only screen and (max-width: 1225px)': { paddingBottom: `${16 / 16}em` }
      }
      : {}
  },
  header,
  offers
}
