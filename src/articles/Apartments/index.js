'use strict'
import { Box, Text } from '@symbo.ls/symbols'

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
    proto: navButtons2,
    ...[
      {
        on: {
          click: (event, element, state) => {
            const { tabsContainer } = element.parent.parent
            tabsContainer.node.scrollBy({
              top: 0,
              left: -tabsContainer.node.clientWidth - 16 * 1.618,
              behavior: 'smooth'
            })
          }
        }
      },
      {
        on: {
          click: (event, element, state) => {
            const { tabsContainer } = element.parent.parent
            tabsContainer.node.scrollBy({
              top: 0,
              left: tabsContainer.node.clientWidth + 16 * 1.618,
              behavior: 'smooth'
            })
          }
        }
      }
    ]
  },
  tabsContainer: {
    tag: 'nav',
    proto: Box,
    props: {
      flexAlign: 'center flex-start',
      gap: 'B'
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
    padding: '0 0 D 0',
    flexFlow: 'column'
  },

  title: {
    proto: [Text, Box],
    props: {
      size: 'G',
      color: 'gold .75'
    },
    text: 'apartments',
    style: {
      position: 'absolute',
      right: '100px',
      top: '200px',
      fontWeight: 200,
      // display: 'none',
      '@media only screen and (max-width: 1225px)': { top: '150px' },
      '@media only screen and (max-width: 768px)': {
        display: 'none',
        fontSize: '22px',
        top: '100px',
        right: '50px'
      }
      // textTransform: 'uppercase'
    }
  },

  roomsTabs,
  rooms

}
