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
    padding: '0 7%',
    maxWidth: `${1440 / 16}em`,
    width: `${1440 / 16}em`,
    '@tabletL': {
      width: '100%',
      padding: '0 15%'
    },
    '@mobileM': {
      padding: '0 0%'
    }
  },
  style: { boxSizing: 'border-box', margin: '0 auto' },

  buttons: {
    proto: navButtons2,
    props: {
      '@mobileM': {
        bottom: `${-70 / 16}em`,
        maxWidth: `${120 / 16}em`

      }
    },

    style: {
      display: 'none',
      '@media only screen and (max-width: 1366px)': {
        display: 'flex',
        zIndex: '50',
        width: '88%'
      },
      '@media only screen and (max-height: 650px)': {
        bottom: `${-50 / 16}em`
      },
      '@media only screen and (max-width: 768px)': {
        width: '90%'
      },
      '@media only screen and (max-width: 560px)': { '> button': { opacity: '.75' } }
    },

    ...[
      {
        props: { '@mobileM': { padding: '0' } },
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
        props: { '@mobileM': { padding: '0 0 0 0' } },
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
      gap: 'C',
      width: '100%',
      '@tabletL': {
        gap: 'B'
      }
    },
    style: { '@media only screen and (max-width: 1366px)': { overflowY: 'auto' } },

    childProto: {
      proto: Box,
      props: {
      }
    },
    ...[tabBallerina, tabRedBrick, tabYellowCouch, tabGreenForest, tabRetro]
  }
}

const rooms = {
  tag: 'section',
  proto: Box,
  props: {
    round: 'B',
    minheight: '100%',
    maxWidth: `${1440 / 16}em`
  },
  style: {
    border: '2px solid red',
    alignSelf: 'center',
    margin: '0 auto'
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
    padding: `G 0`,
    margin: '0 0 G 0',
    '@tabletL': { padding: 'F1 0 G 0' },
    '@mobileM': {
      padding: `F 0 G 0`,
      margin: '0 0 E 0'
    }
  },
  style: {
    scrollBehavior: 'smooth',
    backgroundImage: 'url(' + ORNAMENT_PNG + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    boxSizing: 'border-box',
    backgroundAttachment: 'fixed',
    '@media only screen and (max-width: 1366px)': { backgroundImage: 'none' },
    '@media only screen and (max-height: 670px)': { paddingTop: `${130 / 16}em` },
    '&:before': {
      content: '""',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      background: 'radial-gradient(rgba(60, 84, 72, .85),rgba(60, 84, 72, .9),rgba(60, 84, 72, 1), rgba(60, 84, 72, 1), rgba(60, 84, 72, 1))',
      backgroundAttachment: 'fixed',
      '@media only screen and (max-width: 1366px)': {
        backgroundAttachment: 'initial',
        background: 'rgba(60, 84, 72, 1)'
      }
    }
  },
  attr: { id: 'apartments' },
  roomsTabs,
  rooms
}
