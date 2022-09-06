'use strict'
import { keyframes } from '@emotion/css'
import LEFT_ARROW_PNG from '../../assets/icons/left-arrows2.png'
import RIGHT_ARROW_PNG from '../../assets/icons/right-arrows.png'

import {
  tabBallerina, tabRedBrick, tabYellowCouch, tabGreenForest, tabRetro,
  NavigationArrows
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
  extend: NavigationArrows,
  props: {
    position: 'absolute',
    bottom: '-D2',
    gap: 'D',

    style: {
      alignSelf: 'flex-end',
      margin: '0 auto',
      display: 'none',
      '@media only screen and (max-width: 1366px)': { display: 'flex' },
      '@media only screen and (max-height: 600px)': { bottom: `${-85 / 16}em` },
      '&:before': {
        background: 'radial-gradient(rgba(248, 241, 227, 1), rgba(248, 241, 227, .25))',
        height: '100%'
      }
    }
  },
  childExtend: {
    props: { arrow: { boxSize: 'C ' } }
  },

  ...[
    {
      props: { arrow: { src: LEFT_ARROW_PNG } },
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
      },
      props: { arrow: { src: RIGHT_ARROW_PNG } }
    }
  ]
}

const tabsContainer = {
  tag: 'nav',
  childExtend: {
    props: {
    }
  },
  ...[tabBallerina, tabRedBrick, tabYellowCouch, tabGreenForest, tabRetro]
}

const props = {
  position: 'relative',
  display: 'flex',
  flexAlign: 'flex-start center',
  padding: '0 8%',
  maxWidth: `${1440 / 16}em`,
  width: `${1440 / 16}em`,
  style: {
    boxSizing: 'border-box',
    margin: '0 auto'
    // border: '3px solid red'
    // overflow: 'hidden'
  },
  '@tabletL': { width: '100%' },

  buttons: {
    '@mobileM': {
      bottom: `${-60 / 16}em`,
      maxWidth: `70%`
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
    '@tabletL': {
      gap: 'B',
      position: 'relative',
      boxSize: `${400 / 16}em ${600 / 16}em`
    },
    '@mobileL': { boxSize: `${300 / 16}em ${550 / 16}em` },
    '@mobileS': { boxSize: `${250 / 16}em ${550 / 16}em` }
  }
}

export const tabs = {
  props,

  class: {
    show: (element, state) => state.activeTab
      ? {
        width: 0,
        padding: '0',
        display: 'none'
      }
      : {
        width: `${1440 / 16}em`,
        padding: '0 8%',
        display: 'block',
        animationName: opacities,
        animationDuration: '.5s',
        animationTimingFunction: 'cubic-bezier(.17,.67,.99,1)'
      }
  },

  navArrow,
  tabsContainer
}
