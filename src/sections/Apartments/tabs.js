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
    ':before': {
      background: 'radial-gradient(rgba(248, 241, 227, 1), rgba(248, 241, 227, .25))',
      height: '80%'
    },
    '@tabletL': { display: 'flex' },
    style: { '@media only screen and (max-height: 600px)': { bottom: `${-85 / 16}em` } }
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
  flow: 'column',
  align: 'center flex-start',
  position: 'relative',
  padding: '0 F',
  width: `${1440 / 16}em`,
  style: {
    margin: '0 auto'
  },
  '@tabletL': {
    width: '100%',
    gap: 'C2'
  },

  tabsContainer: {
    gap: 'Z',
    width: '100%',
    padding: 'A1 -',
    position: 'relative',
    boxSizing: 'content-box',
    ':before': {
      content: '"Apartments"',
      fontSize: `${17 / 16}em`,
      position: 'absolute',
      top: '-B2',
      left: '0',
      color: 'rgba(248, 241, 227, 1)',
      style: { letterSpacing: '2px' }
    },
    style: { borderTop: '1.5px solid rgba(248, 241, 227, .5)' },

    '@tabletL': { boxSize: 'G3 H2' },
    '@mobileL': { boxSize: 'G H' },
    '@mobileM': { boxSize: 'F1 G2' },
    '@mobileS': { boxSize: 'F G' },
    childProps: { '@tabletL': { margin: 'A - - -' } }
    // '@tabletL': {
    //   gap: 'B',
    //   position: 'relative',
    //   boxSize: `${400 / 16}em ${600 / 16}em`
    // },
    // '@mobileL': { boxSize: `${300 / 16}em ${550 / 16}em` },
    // '@mobileS': { boxSize: `${250 / 16}em ${550 / 16}em` }
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
