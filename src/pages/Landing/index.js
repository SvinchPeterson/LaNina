'use strict'
import { Block, Button, Img, Text, Flex, Shape, Link } from '@rackai/symbols'

import Logo from '../../assets/logoWhite.png'

import style, { stylePages, stylePageCover, styleLaninaBanner } from './style'

const logo = {
  proto: Img,
  props: { src: Logo },
  style: {
  }
}

const pageLink = {
  proto: [Block, Text, Link],
  props: { text: 'SOLOLAKI' },
  style: {
    color: 'white',
    writingMode: 'vertical-rl',
    textOrientation: 'upright',
    cursor: 'pointer',
    fontSize: '16px',
    padding: '20px',
    marginLeft: '60px',
    background: 'rgba(255, 255, 255, .4)'
  }
}

const laninaBanner = {
  proto: [Block, Flex],
  class: [styleLaninaBanner],
  props: { gap: 'B2' },
  logo,
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
        size: 'E'
      }
    }
  }
}

export default {
  tag: 'main',
  proto: [Block, Flex],
  style,
  laninaBanner,
  pages: {
    proto: [Block, Flex],
    class: [stylePages],
    childProto: {
      proto: Block,
      class: [stylePageCover]
    },
    ...[
      {
        pageLink
      },
      {}
    ]
  }
}
