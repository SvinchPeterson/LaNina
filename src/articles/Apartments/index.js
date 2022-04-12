'use strict'
import { Box } from '@symbo.ls/symbols'

import {
  tabBallerina, tabRedBrick, tabYellowCouch, tabGreenForest, tabRetro,
  roomBallerina, roomRedBrick, roomYellowCouch, roomGreenForest, roomRetro
} from '../../components'

import style, { styleHeader, styleRooms } from './style'

const roomsTabs = {
  tag: 'header',
  proto: Box,
  class: [styleHeader],
  props: {
    flexFlow: 'column',
    flexAlign: 'center center',
    // gap: 'B',
    padding: 'D 0 E 0'
  },
  tabsContainer: {
    proto: Box,
    props: {
      flexAlign: 'flex-start flex-start',
      gap: 'Z'
    },
    childProto: {
      proto: Box
    },
    ...[tabBallerina, tabRedBrick, tabYellowCouch, tabGreenForest, tabRetro]
  }
}

const rooms = {
  tag: 'section',
  proto: Box,
  style: styleRooms,
  ...[
    roomBallerina,
    roomRedBrick,
    roomYellowCouch,
    roomGreenForest,
    roomRetro
  ]
}

export default {
  style,
  proto: Box,
  props: {
    padding: 'E 0',
    flexFlow: 'column',
    gap: '0'
  },
  attr: { id: 'apartments' },

  roomsTabs,
  rooms

}
