'use strict'
import { Box, Text } from '@symbo.ls/symbols'

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
    padding: '0 6%',
    '@tabletL': { padding: '0' }
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
              left: -tabsContainer.node.clientWidth - 16.5 * 1.618,
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
    style: { '@media only screen and (max-width: 1366px)': { overflowX: 'auto' } },
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
    padding: `F 0 G 0`,
    '@tabletL': { padding: 'F3 0' },
    '@mobileL': { padding: 'F 0' },
    '@mobileS': { padding: 'E1 0' }
  },
  style: {
    scrollBehavior: 'smooth',
    backgroundImage: 'url(' + ORNAMENT_PNG + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    boxSizing: 'border-box',
    '&:before': {
      content: '""',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      background: 'radial-gradient(rgba(248, 241, 227, .1), rgba(60, 84, 72, .85), rgba(42, 81, 61, .85))',
      backgroundAttachment: 'fixed'
    }
  },
  attr: { id: 'apartments' },

  title: {
    proto: [Text, Box],
    props: {
      text: 'Apartments',
      fontSize: 'F',
      color: 'gold .85',
      position: 'absolute',
      top: 'C',
      right: 'B',
      '@tabletL': { top: 'C1' },
      '@mobileL': { display: 'none' }
    },
    style: { fontWeight: 200 }
  },
  roomsTabs,
  rooms
}
