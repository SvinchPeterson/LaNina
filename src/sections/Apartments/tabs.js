'use strict'

import { Flex } from 'smbls'

import { keyframes } from '@emotion/css'

import {
  tabBallerina, tabRedBrick, tabYellowCouch, tabGreenForest, tabRetro, NavHorizontalArrowsCream
} from '../../components'

export const opacities = keyframes`
  from {
    opacity: 0;
    transform: scale(1.01);
  }
  to {
   opacity: 1;
   transform: scale(1);
  }
`

const navArrow = {
  extend: NavHorizontalArrowsCream,
  props: {
    gap: 'D',
    display: 'none',
    zIndex: '60',
    ':before': {
      background: 'radial-gradient(rgba(248, 241, 227, 1), rgba(248, 241, 227, .25))',
      height: '80%'
    },
    '@tabletL': { display: 'flex' },
    childProps: { arrow: { boxSize: ' A1' } }

    // style: { '@media only screen and (max-height: 600px)': { bottom: `${-85 / 16}em` } }
  },

  ...[
    {
      on: {
        click: (event, element, state) => {
          const { tabs } = state
          state.update({
            tabs: tabs - 1
          })
          if (tabs <= 0) {
            state.update({ tabs: 4 })
          }
          console.log(state.tabs)
        }
      }
    },

    {
      on: {
        click: (event, element, state) => {
          const { tabs } = state
          state.update({
            tabs: tabs + 1
          })
          if (tabs >= 4) {
            state.update({ tabs: 0 })
          }
          console.log(state.tabs)
        }
      }
    }
  ]
}

const tabsContainer = {
  tag: 'nav',
  extend: Flex,
  ...[tabBallerina, tabRedBrick, tabYellowCouch, tabGreenForest, tabRetro]
}

const props = {
  position: 'relative',
  padding: '0 F',
  width: `${1440 / 16}em`,
  style: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center'
  },
  '@tabletL': {
    width: '100%',
    gap: 'C'
  },

  '@mobileL': {
    padding: '0'
  },

  tabsContainer: {
    gap: 'Z',
    width: '100%',
    padding: 'A1 -',
    position: 'relative',
    boxSizing: 'content-box',
    ':before': {
      content: '"Apartments"',
      fontSize: `D`,
      position: 'absolute',
      top: '-A2',
      left: '0',
      fontWeight: '700',
      color: 'cream2',
      letterSpacing: '1px'
    },
    style: {
      '@media only screen and (max-width: 1366px)': {
        width: `${600 / 16}em`,
        height: `${350 / 16}em `
      },

      '@media only screen and (max-width: 768px)': {
        width: `85%`
      },
      '@media only screen and (max-width: 1366px) and (max-height: 750px)': {
        height: `${300 / 16}em !important`
      },
      '@media only screen and (max-width: 1366px) and (max-height: 670px)': {
        height: `${250 / 16}em !important`
      },
      '@media only screen and (max-width: 1366px) and (max-height: 550px)': {
        height: `${200 / 16}em !important`
      }
    },

    childProps: { '@tabletL': { margin: 'A - - -' } }
  }
}

export const tabs = {
  extend: Flex,
  props,

  class: {
    show: (element, state) => state.activeTab
      ? {
        width: 0,
        padding: '0',
        display: 'none'
      }
      : {
        display: 'block',
        animationName: opacities,
        animationDuration: '.5s',
        animationTimingFunction: 'cubic-bezier(.17,.67,.99,1)'
      }
  },

  tabsContainer,
  navArrow
}
