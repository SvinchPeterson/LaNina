'use strict'
import { Box } from '@symbo.ls/symbols'

import {
  tabBallerina, tabRedBrick, tabYellowCouch, tabGreenForest, tabRetro,
  roomBallerina, roomRedBrick, roomYellowCouch, roomGreenForest, roomRetro,
  navButtons2
} from '../../components'

import style, { styleHeader } from './style'

const roomsTabs = {
  tag: 'header',
  proto: Box,
  style: styleHeader,
  props: {
    position: 'relative',
    flexFlow: 'column',
    flexAlign: 'flex-start center',
    padding: '0 D1'
  },
  attr: { id: 'apartments' },
  class: {
    show: (element, state) => state.activeTab
      ? { borderBottom: '3px solid rgba(168, 98, 63, 1)' }
      : {}
  },
  buttons: {
    proto: navButtons2
  },
  tabsContainer: {
    tag: 'nav',
    proto: Box,
    props: {
      flexAlign: 'center flex-start',
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
  props: { padding: '0 D1' },
  style: {
    border: '5px solid red'
  },
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
    padding: 'F 0',
    flexFlow: 'column'
  },

  roomsTabs,
  rooms

}
