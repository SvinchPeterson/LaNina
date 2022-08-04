'use strict'

import {
  tabBallerina, tabRedBrick, tabYellowCouch, tabGreenForest, tabRetro,
  NavButtons2
} from '../../components'

const buttons = {
  proto: NavButtons2,
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
}

const tabsContainer = {
  tag: 'nav',
  ...[tabBallerina, tabRedBrick, tabYellowCouch, tabGreenForest, tabRetro]
}

const props = {
  position: 'relative',
  flexFlow: 'column',
  flexAlign: 'flex-start center',
  padding: '0 8%',
  maxWidth: `${1440 / 16}em`,
  width: `${1440 / 16}em`,
  css: {
    boxSizing: 'border-box',
    margin: '0 auto'
  },
  '@tabletL': {
    width: '100%',
    padding: '0 15%'
  },
  '@mobileM': { padding: '0 5%' },

  buttons: {
    '@mobileM': {
      bottom: `${-60 / 16}em`,
      maxWidth: `70%`
    },
    css: {
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
      '@media only screen and (max-width: 560px)': {
        '> button': {
          opacity: '.75',
          padding: '15px'
        }
      }
    }
  },

  tabsContainer: {
    flexAlign: 'center flex-start',
    gap: 'C',
    width: '100%',
    '@tabletL': { gap: 'B' },
    css: { '@media only screen and (max-width: 1366px)': { overflowY: 'auto' } }
  }
}

export const tabs = {
  props,

  buttons,
  tabsContainer
}
