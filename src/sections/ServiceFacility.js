'use strict'
import { Grid, Flex } from 'smbls'

import { Feature, SectionTitle } from '../components'
import SHELF_JPG from '../assets/images/residence/sololaki/shelf.jpg'

const props = {
  minHeight: '100%',
  flow: 'column',
  justifyContent: 'center',

  title: {
    text: 'Services & Facilities',
    padding: '- - Z D',
    '@tabletL': {
      alignSelf: 'center',
      padding: '- - A 0'
    }
  },

  content: {
    columns: 'repeat(4, 270px)',
    justifyContent: 'center',
    gap: 'Y2',
    padding: 'D 0',
    position: 'relative',
    backgroundImage: 'url(' + SHELF_JPG + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    style: {
      backgroundAttachment: 'fixed',
      '> div': { zIndex: '3' }
    },
    ':before': {
      content: '""',
      position: 'absolute',
      boxSize: '100% 100%',
      background: 'black .5',
      zIndex: '2'
    },

    '@tabletL': {
      background: 'green2 .15',
      columns: 'repeat(3, 270px)',
      style: { backgroundImage: 'none' },
      ':before': { display: 'none' }
    },
    '@tabletS': { columns: 'repeat(2, 270px)' },
    '@mobileL': {
      columns: 'repeat(1, 270px)',
      maxHeight: `${450 / 16}em`,
      overflow: 'auto',
      borderTop: '1px solid silver',
      borderBottom: '1px solid silver'
    },

    childProps: {
      style: { '@media only screen and (max-height: 800px)': { padding: `${25 / 16}em 0 ${25 / 16}em ${25 / 16}em` } }
    }
  }
}

export const ServiceFacility = {
  extend: Flex,
  props,
  attr: { id: 'features' },

  title: { extend: SectionTitle },
  content: {
    extend: Grid,
    childExtend: {
      extend: Feature
    },
    ...[
      {},
      {
        props: {
          title: { text: 'PERSONAL SERVICE' },
          p: { text: 'Feel yourself at home' }
        }
      },

      {
        props: {
          title: { text: 'WE WORK ROUND THE CLOCK' },
          p: { text: 'Check-in possible 24 hours' }
        }
      },

      {
        props: {
          title: { text: 'HOUSEKEEPING' },
          p: { text: 'Weekly housekeeping' }
        }
      },

      {
        props: {
          title: { text: 'KITCHEN INSIDE' },
          p: { text: 'Cook at home' }
        }
      },

      {
        props: {
          title: { text: 'ACCOUNTING DOCUMENTS' },
          p: { text: 'Complete kit of accounting' }
        }
      },

      {
        props: {
          title: { text: 'MUTIMEDIEA' },
          p: { text: 'Vinyl player, Streaming' }
        }
      },

      {
        props: {
          title: { text: 'WITH COMPLIMENTS' },
          p: { text: 'Georgian wine, Coffee & Tea' }
        }
      }
    ]
  }
}
