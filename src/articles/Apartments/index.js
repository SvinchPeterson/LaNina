'use strict'
import { Box } from '@symbo.ls/symbols'

import {
  tabBallerina, tabRedBrick, tabYellowCouch, tabGreenForest, tabRetro,
  roomBallerina, roomRedBrick, roomYellowCouch, roomGreenForest, roomRetro,
  navButtons2
} from '../../components'

import ORNAMENT_PNG from '../../assets/images/sololaki/ornaments.png'

const roomsTabs = {
  tag: 'header',
  proto: Box,
  props: {
    position: 'relative',
    flexFlow: 'column',
    flexAlign: 'flex-start center',
    padding: '0 10%',
    miHeight: '100%'

  },

  buttons: {
    proto: navButtons2,
    props: {
      width: '95%'
    },
    ...[
      {
        on: {
          click: (event, element, state) => {
            const { tabsContainer } = element.parent.parent
            tabsContainer.node.scrollBy({
              top: 0,
              left: -tabsContainer.node.clientWidth - 16.5 * 1.618
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
              left: tabsContainer.node.clientWidth + 16.5 * 1.618,
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
      gap: 'B',
      width: '100%',
      padding: 'B2 0 0 0'
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
  props: {
    round: 'B',
    minheight: '100%'
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
  proto: Box,
  props: {
    flexFlow: 'column',
    position: 'relative',
    padding: `F2 0 G 0`,
    margin: '0 0 0 0'
  },
  style: {
    scrollBehavior: 'smooth',
    backgroundImage: 'url(' + ORNAMENT_PNG + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    boxSizing: 'border-box',
    backgroundAttachment: 'fixed',
    '&:before': {
      content: '""',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      background: 'radial-gradient(rgba(60, 84, 72, .85),rgba(60, 84, 72, .9),rgba(60, 84, 72, 1), rgba(60, 84, 72, 1), rgba(60, 84, 72, 1))',
      backgroundAttachment: 'fixed'
    }
  },
  attr: { id: 'apartments' },
  roomsTabs,
  rooms
}
