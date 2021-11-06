'use strict'
import { Block, Img, Text, Flex, Link } from '@rackai/symbols'

import BALLERINA_JPG from '../../assets/images/ballerina.jpg'
import RED_BRICK_JPG from '../../assets/images/redBrick.jpg'
import YELLOW_COACH_JPG from '../../assets/images/yellowCoach.jpg'

import style from './style'

const description = {
  proto: [Block, Flex],
  h1: {
    proto: Text
  },
  p: {
    proto: Text
  }
}

export default {
  tag: 'section',
  style,
  h4: {
    proto: [Block, Text],
    props: {
      text: 'Apartments',
      spacing: 'E 0 B 0'
    }
  },

  content: {
    style: {
      height: `${1000 / 16}em`,
      background: 'rgba(98, 73, 62, 1)'
    },
    apartment: {
      style: { border: '3px solid yellow' },

      description

    },
    rooms: {
      proto: [Block, Flex],
      props: { gap: 'C' },
      style: {
        border: '3px solid lightblue'
      }
    }
  }
}
