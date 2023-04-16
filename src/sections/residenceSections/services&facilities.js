'use strict'

import { Grid, Flex } from 'smbls'

import { ServiceFacilityItem, ScrollTitle, SectionTitle } from '../../components'

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

  title: {
    padding: '- - A2 D',
    '@maxTabletS': {display: 'none'}
  },

  content: {
    position: 'relative',
    backgroundImage: 'url(' + SHELF_JPG + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
    '@minTabletL': { style: { backgroundAttachment: 'fixed' } },
    style: {
      backgroundRepeat: 'no-repeat',
      boxShadow: 'inset 0px 0px 5px .3px rgba(0, 0, 0, .5)'
    },
    ':before': {
      content: '""',
      position: 'absolute',
      boxSize: '100% 100%',
      background: 'naviGreenLight .55',
      zIndex: '2'
    },

    title: {
      display: 'none',
      '@maxTabletS': { display: 'flex' },
      background: 'cream',
      position: 'absolute',
      zIndex: '10',
      top: '0',
      right: '0',
      height: '100%',
      padding: 'D -',
      ':after': { margin: '0'},
      '@maxMobileM': {
        padding: 'B2 -',
        gap: 'A',
        // letterSpacing: `${0 / 10}em`,
      },
      whiteSpace: 'nowrap',
      style: {
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
        letterSpacing: `${5 / 10}em`,
        boxShadow: '0px 0px 20px 0px black'
      }
    },

    items: {
      width: 'fit-content',
      columns: 'repeat(4, 1fr)',
      justifyItems: 'stretch',
      gap: 'Y1',
      padding: 'D1 -',
      position: 'relative',
      margin: 'auto',
      childProps: {
        style: { boxShadow: '0px 0px 2px .2px rgba(0, 0, 0, .7)' },
        '@maxTabletO': { maxWidth: 'F3' },
        '@maxTabletS': { minWidth: 'F3' }

      },
      '@maxTabletS': {
        display: 'flex',
        maxWidth: '100%',
        padding: 'D2 E2 D2 D',
        gap: 'Z',
        style: { overflowY: 'auto' }
      },

      '@maxMobileL': { padding: 'E E E B'}
    }
  },

  scroll: {
    alignSelf: 'flex-start',
    padding: 'Z - - A',
    display: 'none',
    '@maxTabletS': { display: 'flex' }
  }
}

export const servicesFacilities = {
  tag: 'section',
  extend: Flex,
  props,
  attr: { id: 'service&facilities' },

  title: { extend: SectionTitle },
  content: {
    title: {extend: SectionTitle },
    items
  },
  scroll: {extend: ScrollTitle}
}
