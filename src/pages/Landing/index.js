'use strict'
import { Block, Button, Img, Text, Flex, Shape } from '@rackai/symbols'

import Logo from '../../assets/logo.png'
import NEWYORK_JPEG from '../../assets/newyork.jpeg'
import AMSTERDAM_JPEG from '../../assets/amsterdam.jpeg'
import style, { center, styleContent, rightBorderRadius, leftBorderRadius, styleDoor } from './style'

const logo = {
  proto: Img,
  props: { src: Logo }
}

const caption = {
  tag: 'caption',
  proto: [Block, Text],
  props: {
    text: '',
    size: 'D',
    spacing: 'X A'
  },
  style: {
    textTransform: 'capitalize',
    color: 'rgba(255, 255, 255, .6)'
  }
}


const content = {
  proto: [Block, Flex, Shape],
  props: { round: 'B'},
  style: styleContent,

  childProto: {
    proto: [Block, Flex],
    style: {
      flex: '.5',
      backgroundSize: 'cover',
      filter: 'grayscale(100%)'
    },

    door: {
      proto: [Shape, Flex],
      style: styleDoor,
      logo
    }
  },
  ...[
    {
      class: [leftBorderRadius],
      style: {
        backgroundImage: 'url(' + NEWYORK_JPEG + ')'
      },

      door: {
        class: [leftBorderRadius],
        style: {
          transformOrigin: 'left',
          '&:hover': {
            transform: 'perspective(3000px) translateZ(0px) translateY(0px) rotateY(50deg)'
          },
          '> img': { marginLeft: 'auto', marginRight: `-${60 / 16}em`}
        }
      }
    },

    {
      class: [rightBorderRadius],
      style: {
        background: 'url(' + AMSTERDAM_JPEG + ')'
      },

      door: {
        class: [rightBorderRadius],
        style: {
          transformOrigin: 'right',
          '&:hover': {
            transform: 'perspective(3000px) translateZ(0px) translateY(0px) rotateY(-40deg)'
          },
          '> img': {marginLeft: `-${60 / 16}em`}
        }
      }
    }
  ]
}

export default {
  style,
  proto: [Block, Flex],
  props: {
    spacing: 'A B1'
  },

  cap: {
    proto: caption,
    props: { text: 'sololaki' },
    style: { textAlign: 'left' }
  },

  content,

  cap2: {
    proto: caption,
    props: { text: 'rustaveli' },
    style: { textAlign: 'right' }
  }
}
