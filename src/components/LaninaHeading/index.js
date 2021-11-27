'use strict'
import { Block, Text, Flex } from '@rackai/symbols'

export default {
  proto: [Block, Flex],
  style: {
    flexFlow: 'column',
    fontWeight: '400'
  },
  h4: {
    proto: Text,
    props: {
      text: 'La Nina'
    },
    style: {
      letterSpacing: '2px',
      color: 'rgba(243, 231, 219, .85)'
    }
  },
  span: {
    proto: Text,
    props: {
      text: 'Residence',
      size: 'C'
    },
    style: {
      letterSpacing: '10px',
      color: 'rgba(243, 231, 219, .65)',
      textAlign: 'center',
      paddingLeft: '9px'
    }
  }
}
