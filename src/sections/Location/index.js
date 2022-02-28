'use strict'
import { Block, Flex, Text, Img } from '@rackai/symbols'
import MAP_PNG from '../../assets/images/sololaki/map.png'

import { locationText, distanceText, transferText } from '../../texts'

import style from './style'

const paragraph = {
  tag: 'p',
  proto: [locationText, Block]

}

const map = {
  tag: 'span',
  proto: Block
}

const airPort = {
  proto: Block,
  props: {
    flexFlow: 'column',
    flexAlign: 'center center',
    gap: 'C'
  },

  childProto: {
    tag: 'p',
    proto: [Block, Text]
  },
  ...[
    { proto: distanceText },

    {
      proto: transferText,
      props: {
        flexFlow: 'column',
        flexAlign: 'flex-start flex-start',
        gap: 'W2'
      },

      caption: {
        proto: Text,
        props: {
          text: 'transfer'
        }
      }
    }
  ]
}

export default {
  tag: 'article',
  proto: Block,
  props: {
    flexFlow: 'column',
    gap: 'B',
    padding: 'F 0 0 0'
  },
  style,

  paragraph,

  location: {
    tag: 'section',
    proto: Block,
    props: {
      flexAlign: 'center center',
      gap: 'B'
    },

    map,
    airPort
  }
}
