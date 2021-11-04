'use strict'
import { Block, Text, Flex } from '@rackai/symbols'

export default {
  proto: [Block, Flex],
  props: { gap: 'B2' },
  heading: {
    h4: {
      proto: Text,
      props: {
        text: 'La Nina'
      }
    },
    span: {
      proto: Text,
      props: {
        text: 'Residence',
        size: 'C'
      }
    }
  }
}
