'use strict'
import { Box, Text, Button, Grid } from '@symbo.ls/symbols'

const header = {
  tag: 'header',
  proto: Box,
  props: {
    // height: 'D',
    flexAlign: 'center space-between',
    padding: 'Z2 A2 Z2 B'
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
    style: {
      background: 'transparent',
      '> button': { opacity: '.7' },
      '&:hover > button': { opacity: '1' }

    },
    span: {
      proto: [Button, Box],
      props: {
        boxSize: 'B V2',
        background: 'cream2',
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
    columnGap: '0',
    rowGap: '0',
    // alignContent: 'center',
    '@tabletL': {
      columns: '100%',
      rowGap: 'Y2',
      padding: '0 C2 A1 C2'
    }
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
        minHeight: `${200 / 16}em`,
        '@media only screen and (max-width: 1366px)': {
          minHeight: `${150 / 16}em`
        },
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
      fontSize: 'Y',
      flexAlign: 'center flex-start'
    },
    style: {
      fontWeight: 500,
      textTransform: 'uppercase'
      // border: '2px solid red'
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
    minWidth: 'G1',
    background: 'green2 .65',
    position: 'absolute',
    left: '8%',
    bottom: '-F',
    flexFlow: 'column',
    round: 'B',
    '@tabletL': {
      maxHeight: 'H',
      left: '50%',
      bottom: '-F'
    },
    '@mobileS': {
      minWidth: 'G',
      left: '55%'
    },
    '@mobileXS': { minWidth: 'F2' }
  },
  style: {
    transition: 'all 1s ease-in-out',
    backdropFilter: 'blur(5px)',
    zIndex: '70',
    // background: 'linear-gradient(rgba(60,84, 72, 1), rgba(60,84, 72, 1))',
    // border: '.5px solid rgba(245, 245, 245, .25)',
    transform: 'translate(50%, 50%)',
    '@media only screen and (max-width: 1225px)': {
      overflow: 'hidden',
      transform: 'translate(-50%, 50%)'
    }
  },

  class: {
    show: (element, state) => state.offers
      ? {
        '@media only screen and (min-width: 1225px)': { paddingBottom: `${40 / 16}em`, marginBottom: '100px' },
        '@media only screen and (max-width: 1225px)': { paddingBottom: `${16 / 16}em` }
      }
      : {}
  },
  header,
  offers
}
