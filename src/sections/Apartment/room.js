'use strict'
import { Block, Text, Link, Button, Flex, Img } from '@rackai/symbols'

import { RoomDescription, galleryBallerina, galleryRedBrick, galleryYellowCouch } from '../../components'

const Room = {
  proto: [Block, Flex],
  // props: {
  //   flexAlign: 'center space-between'
  // },
  style: {
    // position: 'relative',
    // display: 'flex'
    // border: '10px solid yellow'
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
    tag: 'nav'
  }

}

export const roomLanina = {
  proto: Room,
  gallery: {
    proto: galleryBallerina
  }
}

export const roomRedBrick = {
  proto: Room,
  gallery: {
    proto: galleryRedBrick
  }
}

export const roomYellowCouch = {
  proto: Room,
  gallery: {
    proto: galleryYellowCouch
  }
}
