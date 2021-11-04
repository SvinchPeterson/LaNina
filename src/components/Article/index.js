'use strict'
import { Block, Img, Text, Flex, Link } from '@rackai/symbols'

import style from './style'

export default {
  tag: 'section',
  style,
  h3: {
    proto: [Block, Text],
    props: {
      text: 'Story'
    }
  }
}
