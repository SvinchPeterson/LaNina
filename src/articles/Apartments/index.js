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
    padding: 'F D1 B D1'
  },
  attr: { id: 'apartments' },
  class: {
    show: (element, state) => state.activeTab
      ? { }
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
  props: { round: 'B' },
  style: {
    '@media only screen and (max-width: 768px)': {
    }
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
    padding: 'E 0 G1 0',
    flexFlow: 'column'
  },

  roomsTabs,
  rooms

}
