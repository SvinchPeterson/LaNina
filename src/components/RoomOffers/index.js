'use strict'
import { Box, Text, Button, Grid } from '@symbo.ls/symbols'

const header = {
  tag: 'header',
  proto: Box,
  props: {
    flexAlign: 'center space-between',
    padding: 'B B B B'
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
      color: 'cream2 .75',
      fontSize: 'Z',
      fontWeight: '900'
    },
    style: { letterSpacing: '1px' }
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
    columnGap: 'C',
    rowGap: '0',
    '@tabletL': {
      columns: 'repeat(1, 1fr)',
      rowGap: '10px'
    }
  },
  style: {
    letterSpacing: '1px',
    transition: 'min-height .6s ease-in-out, padding-bottom .6s ease-in-out'
    // '@media only screen and (max-width: 1366px)': { overflowY: 'hidden' }
  },
  class: {
    show: (element, state) => state.offers

      ? {
        minHeight: `${200 / 16}em`,
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
          transition: 'height .4s linear, opacity .3s linear 0s'
        }
      }
  },

  childProto: {
    tag: 'span',
    proto: [Box, Text],
    props: {
      color: 'cream 1',
      fontSize: 'Y',
      flexAlign: 'center flex-start'
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
    minWidth: 'G1',
    position: 'absolute',
    // left: '8%',
    bottom: '-F',
    flexFlow: 'column',
    round: 'Z',
    '@tabletL': {
      // bottom: '-F',
      left: '-E'
    }
  },
  style: {
    transition: 'all 1s ease-in-out',
    backdropFilter: 'blur(5px)',
    zIndex: '70',
    transform: 'translate(50%, 50%)',
    overflow: 'hidden'
  },

  class: {
    show: (element, state) => state.offers
      ? {
        paddingBottom: `${40 / 16}em`,
        marginBottom: '100px',
        background: 'rgba(60,84, 72, .7)'
      }
      : {}
  },
  header,
  offers
}
