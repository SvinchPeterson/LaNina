'use strict'
import { Block, Text } from '@rackai/symbols'

import { Rooms, RoomDescription, Gallery } from '../../components'

import style from './style'

export default {
  tag: 'section',
  style,
  h4: {
    proto: [Block, Text],
    props: {
      text: 'Apartments',
      padding: 'E 0 C 0'
    }
  },

  content: {
    proto: Block,
    props: {
      padding: 'D 0',
      flexFlow: 'column',
      gap: 'E'

    },
    style: { background: 'radial-gradient(rgba(98, 73, 62, .8), rgba(98, 73, 62, 1) )' },
    // style: {
    //   background: 'radial-gradient(rgba(136, 108, 107, .8), rgba(97, 77, 76, 1))'
    // },
    Rooms,
    apartment: {
      proto: Block,
      props: {
        flexAlign: 'flex-start flex-start',
        gap: 'D'
      },
      RoomDescription,
      Gallery
    }
  }
}
