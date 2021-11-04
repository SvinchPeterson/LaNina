'use strict'
import { Block, Text, Flex } from '@rackai/symbols'

export default {
  proto: [Block, Flex],
  style: { flexFlow: 'column' },
  h4: {
    proto: Text,
    props: {
      text: 'La Nina'
    },
    style: {
      letterSpacing: '2px',
      fontWeight: '600'
    }
  },
  span: {
    proto: Text,
    props: {
      text: 'Residence',
      size: 'C'
    },
    style: { letterSpacing: '2px' }
  }
}
