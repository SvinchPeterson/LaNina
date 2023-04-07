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
  padding: 'E2 - - -',
  flow: 'column',
  justifyContent: 'center',
  position: 'relative',
  boxSizing: 'content-box',
  '@maxTabletM': { fontSize: `${15 / 16}em` },
  '@maxMobileM': {
    padding: 'E - - -'
  },

  header: {
    padding: '- - A D2',
    align: 'center space-between',
    '@maxTabletS': { padding: '- D Z1 D' },
    '@maxMobileL': { padding: '- B1 Z1 B1'},
    title: {
      fontSize: `${12 / 16}em`,
      fontWeight: '400',
      textTransform: 'uppercase',
      letterSpacing: `${5 / 12}em`
    },
    scroll: {
      display: 'none',
      '@maxTabletS': {
        display: 'flex'
      },
      '@maxMobileS': { display: 'none' }
    }
  },

  content: {
    position: 'relative',
    backgroundImage: 'url(' + SHELF_JPG + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    '@minTabletM': { style: { backgroundAttachment: 'fixed' } },
    style: {
      backgroundRepeat: 'no-repeat',
      boxShadow: 'inset 0px 0px 2px .2px rgba(0, 0, 0, .7)'
    },
    ':before': {
      content: '""',
      position: 'absolute',
      boxSize: '100% 100%',
      background: 'naviGreenLight .55',
      zIndex: '2'
    },
    items: {
      width: 'fit-content',
      columns: 'repeat(4, 1fr)',
      justifyItems: 'stretch',
      gap: 'Y1',
      padding: 'E -',
      position: 'relative',
      margin: 'auto',
      childProps: {
        style: { boxShadow: '0px 0px 2px .2px rgba(0, 0, 0, .7)' }
      },

      '@maxTabletM': { columns: 'repeat(3, 1fr)' },
      '@maxTabletS': {
        display: 'flex',
        maxWidth: '100%',
        padding: 'E D',
        gap: 'Z',
        style: { overflowY: 'auto' }
      },

      '@maxMobileL': { padding: 'D2 B1'}
    }
  },

  scroll2: {
    alignSelf: 'center',
    padding: 'A - - -',
    display: 'none',
    '@maxMobileS': { display: 'flex' }
  }
}

export const servicesFacilities = {
  tag: 'section',
  extend: Flex,
  props,
  attr: { id: 'service&facilities' },

  header: {
    extend: Flex,
    title: { tag: 'h5', text: 'Services & Facilities' },
    scroll: {extend: ScrollTitle}
  },
  content: { items },
  scroll2: {extend: ScrollTitle}
}
