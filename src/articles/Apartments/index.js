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
  line: {
    style: {
      position: 'absolute',
      width: '100%',
      height: '1.5px',
      background: 'rgba(168, 98, 63, 1)',
      // opacity: 0,
      zIndex: '50px',
      top: '50%',
      transition: 'all 5s ease-in-out',
      // display: 'none',
      '@media only screen and (max-width: 1225px)': {
        background: 'none'
      }
    },
    class: {
      show: (element, state) => state.activeTab ? { top: '53%', opacity: 1 } : { opacity: 0 }
    }
  },

  title: {
    proto: [Text, Box],
    props: {
      size: 'F',
      color: 'orange'
    },
    text: 'apartments',
    style: {
      position: 'absolute',
      right: '100px',
      top: '200px',
      fontWeight: 900,
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
