'use strict'
import { Block, Text, Link, Button, Flex, Img } from '@rackai/symbols'
import BALLERINA_JPG from '../../assets/images/ballerina.jpg'

import { RoomDescription, Gallery } from '../../components'

export default {
  tag: 'article',
  proto: [Block, Flex],
  props: {
    flexAlign: 'center space-between'
  },
  style: {
    position: 'relative'
    // background: 'rgba(206, 197, 177, 1)',
    // background: 'rgba(0, 0, 0, 1)',
    // border: '2px solid red'
    // height: `${800 / 16}em`,
  },
  // description: {
  //   proto: RoomDescription
  // },
  // input: {
  //   attr: {
  //     type: 'checkbox',
  //     id: 'click'
  //   }
  // },
  // label: {
  //   attr: {
  //     for: 'click'
  //   },
  //   style: {
  //     width: '100px',
  //     height: '100px',
  //     background: 'red',
  //     position: 'absolute',
  //     right: 0,
  //     top: 0,
  //     zIndex: '30',
  //     cursor: 'pointer'
  //   }
  // },
  gallery: {
    proto: Gallery
  }
}
