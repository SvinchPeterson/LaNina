'use strict'
import { roomBallerina, roomRedBrick, roomYellowCouch, roomGreenForest, roomRetro } from '../../components'

const props = {
  width: '100%',
  height: `100%`,
  position: 'relative',
  maxWidth: `${1440 / 16}em`,
  margin: 'auto',

  // background: 'cream2',
  style: {
    transformOrigin: 'left',
    zIndex: '20',
    // border: '7px solid blue',
    transition: 'all 1s ease-in-out !important'
  },

  roomsContainer: {
    boxSize: 'fit-content fit-content',
    margin: '0 D 0 auto',
    style: { alignSelf: 'center' }
  }
}

export const rooms = {
  props,

  class: {
    show: (element, state) => state.activeTab
      ? {
        display: 'block'
      }
      : {
        display: 'none !important'
      }
  },
  // description: { extend: RoomDescription },
  ...[
    roomBallerina,
    roomRedBrick,
    roomYellowCouch,
    roomGreenForest,
    roomRetro
  ]
}
