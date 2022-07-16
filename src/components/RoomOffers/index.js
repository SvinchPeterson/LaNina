'use strict'
import { Box, Text, Button, Grid } from '@symbo.ls/symbols'

const header = {
  tag: 'header',
  proto: Box,
  props: {
    flexAlign: 'center space-between',
    padding: 'A B A B',
    position: 'relative',
    '@mobileS': {
      padding: 'A A A A'
    }
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
      fontWeight: '900',
      '@mobileS': {
        fontSize: 'Y'
      }
    },
    style: {
      letterSpacing: '1px',
      cursor: 'pointer'
    },

    on: {
      click: (event, element, state) => {
        state.offers
          ? state.update({ offers: false })
          : state.update({ offers: true })
      }
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
  proto: Box,
  style: {
    // border: '5px solid red',
    position: 'relative',
    transition: 'all .5s ease-in-out',
    '&:before': {
      content: '""',
      width: '100%',
      height: '0px',
      boxShadow: '0px 0px 40px 15px rgba(60,84, 72, 0)',
      position: 'absolute',
      top: '0px',
      left: 0,
      zIndex: 100
    },
    '&:after': {
      content: '""',
      width: '100%',
      height: '0px',
      boxShadow: '0px 0px 40px 40px rgba(60,84, 72, 0)',
      position: 'absolute',
      bottom: '-1px',
      left: 0,
      zIndex: 100
    }
  },

  class: {
    show: (element, state) => state.offers

      ? {
        '&:before': { boxShadow: '0px 0px 40px 15px rgba(60,84, 72, .85)' },
        '&:after': { boxShadow: '0px 0px 40px 40px rgba(60,84, 72, 1)' }
      }

      : {

      }
  },

  content: {
    proto: [Grid, Box],
    props: {
      padding: 'A C2 A C2',
      columns: 'repeat(2, 1fr)',
      columnGap: 'C',
      // rowGap: 'Z',
      height: '0',
      '@tabletL': {
        columns: 'repeat(1, 1fr)',
        columnGap: '0'
        // rowGap: '10px'
      },
      '@mobileS': {
        padding: 'A B1 A B1'
      }
    },
    style: {
      // border: '4px solid red',
      letterSpacing: '1px',
      transition: 'min-height .6s ease-in-out, padding-bottom .6s ease-in-out',
      overflowY: 'auto',
      position: 'relative',
      scrollbarWidth: 'none'
      // '@media only screen and (max-width: 1366px)': { overflowY: 'hidden' }
    },
    class: {
      show: (element, state) => state.offers

        ? {
          minHeight: `${150 / 16}em`,
          maxHeight: `${180 / 16}em`,
          // rowGap: '10px',
          '> span': {
            height: '30px',
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
        flexAlign: 'center flex-start',
        '@tabletL': { fontSize: 'Z' },
        '@mobileS': { fontSize: 'Y' }
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
      bottom: '-F1',
      left: '-E'
    },
    '@mobileS': {
      left: '-D1',
      minWidth: 'F2'
    },
    '@mobileXS': { left: '-D2' }
  },
  style: {
    transition: 'all 1s ease-in-out',
    // backdropFilter: 'blur(5px)',
    zIndex: '70',
    transform: 'translate(50%, 50%)',
    overflow: 'hidden'
    // '&:before': {
    //   content: '""',
    //   position: 'absolute',
    //   width: '100%',
    //   height: '0',
    //   bottom: 'D',
    //   left: '0',
    //   boxShadow: '0px -10px 70px 20px red',
    //   zIndex: '30'
    // }
  },

  class: {
    show: (element, state) => state.offers
      ? {
        paddingBottom: `${40 / 16}em`,
        marginBottom: '100px',
        background: 'rgba(60,84, 72, 1)',
        '@media only screen and (max-width: 480px)': { marginBottom: '0' }
      }
      : {}
  },
  header,
  offers
}
