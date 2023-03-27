'use strict'

import { Box, Text, Button, Grid } from 'smbls'

const header = {
  tag: 'header',
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
    transition: 'height .3s linear'
  },

  h5: {
    props: {
      text: 'amenities',
      color: 'cream2 .75',
      fontSize: 'Z',
      '@tabletL': { color: 'cream2' }
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
    extend: Button,
    props: { padding: 'Z1' },
    style: {
      background: 'transparent',
      '> button': { opacity: '.7' },
      '&:hover > button': { opacity: '1' }
    },
    span: {
      props: {
        boxSize: 'V1 B',
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
  style: {
    position: 'relative',
    transition: 'height .5s ease-in-out'
  },

  class: {
    show: (element, state) => state.offers
      ? { height: '120px' }
      : { height: '0' }
  },

  props: {
    overflow: 'hidden',
    ':after': {
      content: '""',
      width: '100%',
      height: '30px',
      background: 'linear-gradient(to top, rgba(25, 63, 55, 1) 0%, rgba(25, 63, 55, 0) 100%)',
      position: 'absolute',
      bottom: '0',
      left: 0,
      zIndex: 100,
      transition: 'boxShadow 1s ease-in-out'
    }
  },

  content: {
    extend: [Grid, Box],
    props: {
      padding: '0 C2 C C2',
      columns: 'repeat(2, 1fr)',
      columnGap: 'C',
      height: '0',
      '@tabletL': {
        columns: 'repeat(1, 1fr)',
        columnGap: '0'
      },
      '@mobileS': {
        padding: 'Y B1 Z B1'
      }
    },
    style: {
      height: '0',
      letterSpacing: '1px',
      transition: 'min-height .6s ease-in-out, padding-bottom .6s ease-in-out',
      overflowY: 'auto',
      position: 'relative',
      scrollbarWidth: 'none'
    },
    class: {
      show: (element, state) => state.offers

        ? {
          minHeight: `${150 / 16}em`,
          maxHeight: `${180 / 16}em`,
          '> span': {
            height: `${35 / 16}em`,
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

    childExtend: {
      tag: 'span',
      extend: [Box, Text],
      props: {
        color: 'cream 1',
        fontSize: 'Y',
        flexAlign: 'center flex-start',
        '@tabletL': { fontSize: 'Z' }
        // '@mobileS': { fontSize: 'Y' }
      },
      style: {
        // fontWeight: 500,
        textTransform: 'uppercase'
      }
    },
    ...[
      { props: { text: 'Wifi' } },
      { props: { text: 'Open terrace' } },
      { props: { text: 'Private entrance' } },
      { props: { text: 'Air conditioning' } },
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

export const AmenitiesResponsive = {
  tag: 'aside',
  props: {
    minWidth: 'G1',
    position: 'absolute',
    flexFlow: 'column',
    background: 'rgba(25, 63, 55, 1)',
    round: 'Z',
    bottom: '-D',
    // '&:before': {
    //   content: '""',
    //   width: '100%',
    //   height: '30px',
    //   position: 'absolute',
    //   background: 'red',
    //   top: '0',
    //   left: 0,
    //   zIndex: 100,
    //   transition: 'boxShadow 1s ease-in-out'
    // },
    '@mobileM': {
      top: '-D',
      height: 'fit-content',
      round: 'A'
    },
    '@mobileS': {
      minWidth: 'G'
    },
    '@mobileXS': { right: 'B' }
  },

  style: {
    // borderBottomLeftRadius: 0,
    // borderBottomRightRadius: 0,
    // transition: 'all .8s ease-in-out',
    zIndex: '70',
    overflow: 'hidden'
  },

  class: {
    show: (element, state) => state.offers
      ? {
        padding: ` 0 0 ${40 / 16}em 0`,
        margin: ` 0 0 ${20 / 16}em 0`,
        background: 'rgba(25, 63, 55, 1)',
        transition: 'padding .5s ease-in-out, margin .5s ease-in-out background .5s ease-in-out'
        // '@media only screen and (max-width: 480px)': { marginBottom: '0' }
      }
      : {}
  },
  header,
  offers
}
