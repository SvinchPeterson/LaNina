'use strict'
import { Block, Img, Text, Flex, Link } from '@rackai/symbols'

import BALLERINA_JPG from '../../assets/images/ballerina.jpg'
import RED_BRICK_JPG from '../../assets/images/redBrick.jpg'
import YELLOW_COACH_JPG from '../../assets/images/yellowCoach.jpg'

import style from './style'

export default {
  tag: 'section',
  style,
  h4: {
    proto: [Block, Text],
    props: {
      text: 'Apartments',
      spacing: 'E 0 C 0'
    }
  },
  content: {
    proto: Block,
    apartments: {
      childProto: {
        proto: Block
      },
      ...[
        {},
        {},
        {}
      ]
    }
  }

}
