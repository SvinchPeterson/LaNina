'use strict'
import { Block, Text } from '@rackai/symbols'

import style from './style'

const service = {
  proto: Block,
  attr: { id: 'services' },
  paragraph: {
    proto: Block,
    props: {
      flexFlow: 'column',
      gap: 'Z'

    },
    h4: {
      proto: Text,
      props: {
        text: 'cleaning',
        size: 'A'
      }
    },
    p: {
      proto: Text,
      props: {
        text: `Centralized reservations and preferred benefits such as negotiated rates on airfare, hotels, car rentals provide efficient cost saving opportunities..`
      }
    }
  }
}

const cleaning = {
  proto: service
}

const laundry = {
  proto: service,
  paragraph: {
    h4: {
      props: { text: 'laundry' }
    }
  }
}

const transfer = {
  proto: service,
  paragraph: {
    h4: { props: { text: 'transfer' } }
  }
}

export default {
  tag: 'section',
  proto: Block,
  props: {
    flexAlign: 'center center',
    gap: 'D',
    padding: 'E F F F'
  },
  // attr: { id: 'services' },
  style,

  cleaning,
  laundry,
  transfer
}
