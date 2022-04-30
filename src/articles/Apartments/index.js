'use strict'
import { Box } from '@symbo.ls/symbols'

import {
  tabBallerina, tabRedBrick, tabYellowCouch, tabGreenForest, tabRetro,
  roomBallerina, roomRedBrick, roomYellowCouch, roomGreenForest, roomRetro,
  navButtons2
} from '../../components'

import style, { styleHeader, styleRooms } from './style'

const roomsTabs = {
  tag: 'header',
  proto: Box,
  class: [styleHeader],
  props: {
    position: 'relative',
    flexFlow: 'column',
    flexAlign: 'flex-start center'
  },
  buttons: {
    proto: navButtons2
  },
  tabsContainer: {
    tag: 'nav',
    proto: Box,
    props: {
      flexAlign: 'center center',
      gap: 'B'
    },
    childProto: {
      proto: Box,
      style: { boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, .35)' }
    },
    ...[tabBallerina, tabRedBrick, tabYellowCouch, tabGreenForest, tabRetro]
  }
}

const rooms = {
  tag: 'section',
  proto: Box,
  props: { padding: '0 D1 0 D1' },
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
    padding: 'A 0',
    flexFlow: 'column',
    gap: '0'
  },
  attr: { id: 'apartments' },

  roomsTabs,
  rooms

}
