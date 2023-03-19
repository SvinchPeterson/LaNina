'use strict'
import { roomBallerina, roomRedBrick, roomYellowCouch, roomGreenForest, roomRetro } from './rooms'

const props = {
  width: '100%',
  height: `100%`,
  position: 'relative',
  maxWidth: `${1440 / 16}em`,
  margin: 'auto'
  // border: '10px solid purple'
}

export const rooms = {
  props,

  class: {
    show: (element, state) => state.activeTab
      ? { display: 'block' } : { display: 'none' }
  },

  ...[
    roomBallerina,
    roomRedBrick,
    roomYellowCouch,
    roomGreenForest,
    roomRetro
  ]
}
