'use strict'

import { Flex } from 'smbls'
import { Navbar } from '../../../../components'

const props = {
  boxSize: 'D2 100%',
  align: 'flex-end space-between',
  color: 'cream2',
  border: 'solid, cream2 .5',
  borderWidth: '0 0 .5px 0',
  padding: '- V2',
  transition: 'opacity .5s ease-in-out',
  zIndex: '10',
  overflow: 'hidden',
  titles: {
    position: 'relative',
    margin: '- - Z -',
    childProps: {
      position: 'absolute',
      left: '0',
      bottom: '0',
      whiteSpace: 'nowrap',
      lineHeight: `${22 / 28}em`,
      fontSize: 'D',
      textTransform: 'uppercase',
      fontWeight: '100',
      transition: 'bottom .45s ease-in-out, opacity .45s ease-in-out, transform .45s ease-in-out',
      span: { fontWeight: '700' }
    }
  },

  tabs: {
    gap: 'A',
    margin: '- - Y -',
    childProps: {
      cursor: 'pointer',
      fontSize: `${10.5 / 16}em`,
      fontWeight: '400',
      textTransform: 'uppercase',
      padding: '0',
      background: 'transparent',
      color: 'cream2',
      letterSpacing: `${2 / 10.5}em`,
      transition: 'opacity .2s ease-in-out',
      ':hover': { opacity: '1' }
    }
  }

}

export const header = {
  tag: 'header',
  extend: Flex,
  props,

  class: {
    show: (element, state) => state.activeToursContainer
      ? { opacity: '1' }
      : { opacity: '0' }
  },

  titles: {
    extend: Flex,
    childExtend: {
      tag: 'h2',
      text: ' tour',
      span: {}
    },
    ...[
      {
        class: { show: (element, state) => state.activeDaily ? { bottom: '0', opacity: '1' } : { bottom: '-50px', opacity: '0' } },
        span: { text: 'daily ' }
      },

      {
        class: { show: (element, state) => state.activeStandard ? { bottom: '0', opacity: '1' } : { bottom: '-50px', opacity: '0' } },
        span: { text: 'standard ' }
      },

      {
        class: { show: (element, state) => state.activeCaucasus ? { bottom: '0', opacity: '1' } : { bottom: '-50px', opacity: '0' } },
        span: { text: 'caucasus ' }
      },

      {
        class: { show: (element, state) => state.activeExclusive ? { bottom: '0', opacity: '1' } : { bottom: '-50px', opacity: '0' } },
        span: { text: 'exclusive ' }
      },

      {
        class: { show: (element, state) => state.activeWineGastronomy ? { opacity: '1', bottom: '0' } : { bottom: '-50px', opacity: '0' } },
        span: { text: 'wine & gastronomy ' }
      },

      {
        class: { show: (element, state) => state.activeAdventure ? { bottom: '0', opacity: '1' } : { bottom: '-50px' } },
        span: { text: 'adventure ' }
      }
    ]
  },

  tabs: {
    extend: Navbar,
    ...[
      {
        props: { href: '#daily' },
        class: { show: (element, state) => state.activeDaily
          ? { opacity: '1', pointerEvents: 'none' } : { opacity: '.55' } },
        on: {
          click: (event, element, state) => {
            state.update({
              activeDaily: true,
              activeStandard: false,
              activeCaucasus: false,
              activeExclusive: false,
              activeAdventure: false,
              activeWineGastronomy: false
            })
          }
        },
        text: 'daily'
      },
      {
        class: { show: (element, state) => state.activeStandard
          ? { opacity: '1', pointerEvents: 'none' } : { opacity: '.55' } },
        on: {
          click: (event, element, state) => {
            state.update({
              activeStandard: true,
              activeDaily: false,
              activeCaucasus: false,
              activeExclusive: false,
              activeAdventure: false,
              activeWineGastronomy: false
            })
          }
        },
        text: 'standard'
      },

      {
        class: { show: (element, state) => state.activeCaucasus
          ? { opacity: '1', pointerEvents: 'none' } : { opacity: '.55' } },
        on: {
          click: (event, element, state) => {
            state.update({
              activeCaucasus: true,
              activeDaily: false,
              activeStandard: false,
              activeExclusive: false,
              activeAdventure: false,
              activeWineGastronomy: false
            })
          }
        },
        text: 'caucasus'
      },

      {
        class: { show: (element, state) => state.activeExclusive
          ? { opacity: '1', pointerEvents: 'none' } : { opacity: '.55' } },
        on: {
          click: (event, element, state) => {
            state.update({
              activeExclusive: true,
              activeDaily: false,
              activeStandard: false,
              activeCaucasus: false,
              activeAdventure: false,
              activeWineGastronomy: false
            })
          }
        },
        text: 'exclusive'
      },

      {
        class: { show: (element, state) => state.activeWineGastronomy
          ? { opacity: '1', pointerEvents: 'none' } : { opacity: '.55' } },
        on: {
          click: (event, element, state) => {
            state.update({
              activeWineGastronomy: true,
              activeDaily: false,
              activeStandard: false,
              activeCaucasus: false,
              activeExclusive: false,
              activeAdventure: false
            })
          }
        },
        text: 'wine & gastronomy'
      },

      {
        class: { show: (element, state) => state.activeAdventure
          ? { opacity: '1', pointerEvents: 'none' } : { opacity: '.55' } },
        on: {
          click: (event, element, state) => {
            state.update({
              activeAdventure: true,
              activeDaily: false,
              activeStandard: false,
              activeCaucasus: false,
              activeExclusive: false,
              activeWineGastronomy: false
            })
          }
        },
        text: 'adventure'
      }
    ]
  }
}
