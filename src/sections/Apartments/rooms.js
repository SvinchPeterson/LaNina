'use strict'
import { roomBallerina, roomRedBrick, roomYellowCouch, roomGreenForest, roomRetro } from '../../components'

const props = {
  height: `100%`,
  position: 'relative',
  maxWidth: `${1440 / 16}em`,
  margin: '0 auto',
  // background: 'cream2',
  css: {
    zIndex: '20',
    // border: '7px solid blue',
    transition: 'all 3s ease-in-out !important'
  },

  roomsContainer: {
    boxSize: 'fit-content fit-content',
    margin: '0 D 0 auto',
    css: { alignSelf: 'center' }
  }
}

export const rooms = {
  props,

  class: {
    show: (element, state) => state.activeTab
      ? {
        transition: 'all 3s ease-in-out',
        width: '100%'
      }
      : {
        display: 'none !important'
      }
  },
  // description: { proto: RoomDescription },
  ...[
    roomBallerina,
    roomRedBrick,
    roomYellowCouch,
    roomGreenForest,
    roomRetro
  ]
}
