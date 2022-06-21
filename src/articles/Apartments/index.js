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
    '@screenL': { padding: '0 16%' },
    '@screenD': { padding: '0 15%' },
    '@screenS': { padding: '0 10%' },
    '@tabletL': { padding: '0 15%' },
    '@tabletS': { padding: '0 0' },
    '@mobileL': { padding: '0 0' },
    '@mobileM': { padding: '0 0' }

  },

  buttons: {
    proto: navButtons2,
    props: {
      width: '95%',
      '@tabletS': {
        width: '100.5%'
      }
    },
    ...[
      {
        props: {
          // '@mobileM': { padding: 'C B C Z1' }
        },
        on: {
          click: (event, element, state) => {
            const { tabsContainer } = element.parent.parent
            tabsContainer.node.scrollBy({
              top: 0,
              left: -tabsContainer.node.clientWidth - 16.5 * 1.618
              // behavior: 'smooth'
            })
          }
        }
        // image: { props: { '@mobileM': { boxSize: 'A B' } } }
      },
      {
        props: {
          // '@mobileM': { padding: 'C Z1 C B' }
        },
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
        // image: { props: { '@mobileM': { boxSize: 'A B' } } }
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
    padding: `F2 0 G 0`,
    '@tabletL': { padding: 'F 0 G 0' },
    '@mobileM': { padding: 'E2 0' }
    // '@mobileL': { padding: 'F 0' },
    // '@mobileS': { padding: 'E1 0' }
  },
  style: {
    scrollBehavior: 'smooth',
    backgroundImage: 'url(' + ORNAMENT_PNG + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    boxSizing: 'border-box',
    backgroundAttachment: 'fixed',
    '@media only screen and (max-width: 1366px)': { backgroundAttachment: 'initial' },
    '&:before': {
      content: '""',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      background: 'radial-gradient(rgba(60, 84, 72, .85),rgba(60, 84, 72, .9),rgba(60, 84, 72, 1), rgba(60, 84, 72, 1), rgba(60, 84, 72, 1))',
      backgroundAttachment: 'fixed',
      '@media only screen and (max-width: 1366px)': { backgroundAttachment: 'initial' }
    }
  },
  attr: { id: 'apartments' },
  roomsTabs,
  rooms
}
