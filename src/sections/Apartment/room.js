'use strict'
import { Block, Text, Link, Button, Flex, Img } from '@rackai/symbols'

import { RoomDescription, galleryBallerina, galleryRedBrick, galleryYellowCouch } from '../../components'

const Room = {
  proto: [Block, Flex],
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
  //     background: 'red',
  //     position: 'absolute',
  //     right: 0,
  //     top: 0,
  //     zIndex: '30',
  //     cursor: 'pointer'
  //   }
  // },
  gallery: {
    tag: 'nav'
  }

}

export const roomLanina = {
  proto: Room,
  gallery: {
    proto: galleryBallerina,
    description: {
      proto: RoomDescription
    }

  }
}

export const roomRedBrick = {
  proto: Room,
  gallery: {
    proto: galleryRedBrick,
    description: {
      proto: RoomDescription,
      h3: { props: { text: 'Red Brick' } }
    }
  }
}

export const roomYellowCouch = {
  proto: Room,
  gallery: {
    proto: galleryYellowCouch,
    description: {
      proto: RoomDescription,
      h3: { props: { text: 'Yellow Couch' } }
    }
  }
}
