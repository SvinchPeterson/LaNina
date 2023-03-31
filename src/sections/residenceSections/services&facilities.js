'use strict'

import { Grid, Flex } from 'smbls'

import { ServiceFacilityItem, ScrollTitle} from '../../components'

import SHELF_JPG from '../../assets/images/residence/sololaki/shelf.jpg'

const items = {
  extend: Grid,
  childExtend: ServiceFacilityItem,
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
        title: { text: 'We work round the clock' },
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

const props = {
  margin: 'G1 - - -',
  padding: 'E2 - - -',
  flow: 'column',
  justifyContent: 'center',
  position: 'relative',
  boxSizing: 'content-box',
  '@mobileL': { margin: 'D - - -' },
  '@mobileS': {margin: 'C - - -', padding: 'E1 - - -',},

  title: {
    padding: '- - A D2',
    align: 'center space-between',
    '@mobileL': { padding: '- B2 A B2' },
    '@mobileS': { align: 'center center', padding: '0 0 A 0' },
    h3: {
      fontSize: 'Z',
      fontWeight: '400',
      textTransform: 'uppercase',
      letterSpacing: `${5 / 13}em`
    },
    scroll: {
      display: 'none',
      '@mobileL': { display: 'flex'},
      '@mobileS': {display: 'none'}
    }
  },

  content: {
    position: 'relative',
    backgroundImage: 'url(' + SHELF_JPG + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    style: {
      '@media only screen and (min-width: 1281px)': { backgroundAttachment: 'fixed'},
      backgroundRepeat: 'no-repeat',
      boxShadow: 'inset 0px 0px 2px .2px rgba(0, 0, 0, .7)'
    },
    ':before': {
      content: '""',
      position: 'absolute',
      boxSize: '100% 100%',
      background: 'black .25',
      zIndex: '2'
    },
    '@mobileL': {overflow: 'hidden'},

    items: {
      width: 'fit-content',
      columns: 'repeat(4, 1fr)',
      justifyItems: 'stretch',
      gap: 'Y1',
      padding: 'E -',
      position: 'relative',
      margin: 'auto',
      '@tabletM': { columns: 'repeat(3, 1fr)',},
      '@tabletS': { columns: 'repeat(2, 1fr)'},
      '@mobileL': {
        display: 'flex',
        maxWidth: '100%',
        padding: 'E D',
        style: { overflowY: 'auto' }
      },
      '@mobileS': {padding: 'D C1'},
      '@mobileXS': {padding: 'D B2'},
      style: {
        backgroundAttachment: 'fixed',
        '> div': { zIndex: '2' }
      },
      childProps: {
       '@mobileL': {minWidth: 'F3'},
        style: { boxShadow: '0px 0px 2px .2px rgba(0, 0, 0, .7)' }
      }
    }
  },

  scroll2: {
    alignSelf: 'center',
    padding: 'A - - -',
    display: 'none',
    '@mobileS': {display: 'flex'}
  }
}

export const servicesFacilities = {
  tag: 'section',
  extend: Flex,
  props,
  attr: { id: 'service&facilities' },

  title: {
    extend: Flex,
    h3: { text: 'Services & Facilities' },
    scroll: {extend: ScrollTitle}
  },
  content: { items },
  scroll2: {extend: ScrollTitle}
}
