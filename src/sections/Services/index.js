'use strict'
import { Block, Img, Text, Flex, Grid, Link } from '@rackai/symbols'

import LAUNDRY_PNG from '../../assets/laundry.png'
import CLEAN_PNG from '../../assets/cleaning.png'
import TRANSFER_PNG from '../../assets/transfer.png'

import style from './style'

const service = {
  proto: Block,
  paragraph: {
    proto: Block,
    props: {
      flexFlow: 'column',
      gap: 'A'
    },
    h4: {
      proto: Text,
      props: {
        text: 'cleaning',
        size: 'B'
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
    padding: 'G E'
  },
  // attr: { id: 'services' },
  style,

  cleaning,
  laundry,
  transfer
}
