'use strict'

import { Grid, Flex } from 'smbls'

import { ServiceFacilityItem } from '../../components'

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
  minHeight: '100%',
  flow: 'column',
  justifyContent: 'center',
  position: 'relative',
  title: {
    text: 'Services & Facilities',
    padding: '- - A1 F',
    fontSize: 'Z',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '4px',
    alignSelf: 'flex-start'
  },

  content: {
    position: 'relative',
    backgroundImage: 'url(' + SHELF_JPG + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    style: { backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat' },
    ':before': {
      content: '""',
      position: 'absolute',
      boxSize: '100% 100%',
      background: 'black .5',
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
      style: {
        backgroundAttachment: 'fixed',
        '> div': { zIndex: '2' }
      },
      childProps: { style: { boxShadow: '0px 0px 3.5px 0px rgba(0, 0, 0, .15)' } }
    }
  }
}

export const servicesFacilities = {
  extend: Flex,
  props,
  attr: { id: 'service&facilities' },

  title: { tag: 'h3' },
  content: { items }
}
