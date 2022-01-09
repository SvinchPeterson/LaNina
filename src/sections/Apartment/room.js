'use strict'
import { Block, Text, Link, Button, Flex, Img } from '@rackai/symbols'

import { RoomDescription, galleryBallerina, galleryRedBrick, galleryYellowCouch } from '../../components'

const Room = {
  proto: Block,
  gallery: {
    tag: 'nav',
    style: {
      position: 'relative',
      overflow: 'hidden'
    },
    description: {
      proto: RoomDescription,
      style: {
        transition: 'all 2s ease-in-out',
        transitionDelay: '1s'
      },
      class: {
        show: (element, state) => state.active === element.parent.parent.key ? { height: '100%', opacity: 1, left: 0 } : { height: 0, opacity: 0, left: '-100%' }
      }
    }
  }
}

export const roomBallerina = {
  proto: Room,
  gallery: {
    proto: galleryBallerina
    // description: {
    //   proto: RoomDescription
    // }
  }
}

export const roomRedBrick = {
  proto: Room,
  gallery: {
    proto: galleryRedBrick
    // description: {
    //   proto: RoomDescription,
    //   h3: { props: { text: 'Red Brick' } }
    // }
  }
}

export const roomYellowCouch = {
  proto: Room,
  gallery: {
    proto: galleryYellowCouch
    // description: {
    //   proto: RoomDescription,
    //   h3: { props: { text: 'Yellow Couch' } }
    // }
  }
}
