'use strict'
import { Grid, Flex, Img } from 'smbls'

import { ServiceFeature } from '../../components'
import SHELF_JPG from '../../assets/images/residence/sololaki/shelf.jpg'

import UP_ARROW_PNG from '../../assets/icons/upArrow-black.png'
import DOWN_ARROW_PNG from '../../assets/icons/downArrow-black.png'

const props = {
  minHeight: '100%',
  flow: 'column',
  justifyContent: 'center',
  position: 'relative',
  style: {
    // '@media only screen and (max-height: 600px)': {
    //   paddingTop: `${70 / 16}em`
    // }
  },

  title: {
    text: 'Services & Facilities',
    padding: '- - A1 F',
    fontSize: 'Z',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '4px',
    alignSelf: 'flex-start'
    // '@mobileM': {
    //   fontSize: 'A',
    //   padding: '- - Z2 B'
    // }
  },

  scroll: {
    flow: 'column',
    align: 'center center',
    display: 'none',
    width: 'fit-content',
    gap: 'Z',
    position: 'absolute',
    left: 'D',
    // '@tabletS': { display: 'flex' },
    // '@mobileM': { left: 'B' },
    // '@mobileS': { left: 'A' },
    // '@mobileXS': { left: 'Z' },

    up: { boxSize: ' A' },
    span: {
      letterSpacing: '1px',
      fontWeight: '700',
      textTransform: 'uppercase',
      fontSize: 'Z',
      style: {
        writingMode: 'vertical-rl',
        transform: 'rotate(-180deg)'
      }
      // '@mobileXS': { fontSize: `${12 / 16}em` }
    },
    down: { boxSize: ' A' }
  },

  container: {
    position: 'relative',
    ':after': {
      content: '""',
      position: 'absolute',
      boxSize: 'D 100%',
      bottom: '0',
      zIndex: '3',
      background: 'linear-gradient(to top, rgba(248, 241, 227, 1) 0%,rgba(248, 241, 227, 0) 100%)',
      display: 'none'
      // '@tabletS': { display: 'block' }
    },
    content: {
      columns: 'repeat(4, 270px)',
      justifyContent: 'center',
      gap: 'Y1',
      padding: 'E -',
      position: 'relative',
      backgroundImage: 'url(' + SHELF_JPG + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      style: {
        backgroundAttachment: 'fixed',
        '> div': { zIndex: '2' }
        // '@media only screen and (max-width: 1366px) and (max-height: 1000px)': { padding: '60px 0 60px 0' },
        // '@media only screen and (max-width: 1024px) and (max-height: 1150px)': {
        //   maxHeight: `${500 / 16}em`,
        //   overflowY: 'auto',
        //   borderTop: '1px solid silver'

        // },
        // '@media only screen and (max-width: 768px)': {
        //   maxHeight: `${480 / 16}em`
        // },
        // '@media only screen and (max-width: 1024px) and (max-height: 800px)': {
        //   maxHeight: `${370 / 16}em`
        // },
        // '@media only screen and (max-width: 768px) and (max-height: 800px)': {
        //   maxHeight: `${300 / 16}em`
        // }
      },
      ':before': {
        content: '""',
        position: 'absolute',
        boxSize: '100% 100%',
        background: 'black .5',
        zIndex: '2'
      },

      // '@tabletL': {
      //   background: 'green2 .15',
      //   columns: 'repeat(3, 270px)',
      //   style: { backgroundImage: 'none' },
      //   ':before': { display: 'none' }
      // },
      // '@tabletS': { columns: 'repeat(2, 270px)' },
      // '@mobileL': {
      //   columns: 'repeat(1, 270px)',
      //   overflow: 'auto',
      //   borderTop: '1px solid silver',
      //   borderBottom: '1px solid silver'
      // },
      // '@mobileS': { columns: 'repeat(1, 230px)' },

      childProps: {
        style: {
          boxShadow: '0px 0px 3.5px 0px rgba(0, 0, 0, .15)'
          // '@media only screen and (max-height: 800px)': {
          //   padding: `${25 / 16}em 0 ${25 / 16}em ${25 / 16}em` }
        }
      }
    }
  }
}

export const servicesFacilities = {
  extend: Flex,
  props,
  attr: { id: 'service&facilities' },

  title: { tag: 'h3' },

  scroll: {
    extend: Flex,
    up: {
      extend: Img,
      props: { src: UP_ARROW_PNG }
    },
    span: { text: 'scroll' },
    down: {
      extend: Img,
      props: { src: DOWN_ARROW_PNG }
    }
  },

  container: {
    content: {
      extend: Grid,
      childExtend: {
        extend: ServiceFeature
      },
      ...[
        {
          props: {
            title: { text: 'city center' },
            p: { text: '7 min from Liberty square' }
          }
        },
        {
          props: {
            title: { text: 'Personal Service' },
            p: { text: 'Feel yourself at home' }
          }
        },

        {
          props: {
            title: { text: 'WE work round the clock' },
            p: { text: 'Check-in possible 24 hours' }
          }
        },

        {
          props: {
            title: { text: 'housekeaping' },
            p: { text: 'Weekly housekeeping' }
          }
        },

        {
          props: {
            title: { text: 'kitchen inside' },
            p: { text: 'Cook at home' }
          }
        },

        {
          props: {
            title: { text: 'accounting doccuments' },
            p: { text: 'Complete kit of accounting' }
          }
        },

        {
          props: {
            title: { text: 'multimedia' },
            p: { text: 'Vinyl player, Streaming' }
          }
        },

        {
          props: {
            title: { text: 'with compliments' },
            p: { text: 'Georgian wine, Coffee & Tea' }
          }
        }
      ]
    }
  }
}
