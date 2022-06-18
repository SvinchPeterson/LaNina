'use strict'

import { Box } from '@symbo.ls/all'

export const MenuButton = {
  proto: Box,
  style: {
    cursor: 'pointer'
  },
  props: {
    width: 'C',
    height: 'B',
    position: 'relative'
  },
  on: {
    click: (event, element, state) => {
      state.activeMenu
        ? state.update({ activeMenu: false, activeMenuItem: null })
        : state.update({ activeMenu: true })
    }
  },

  childProto: {
    proto: Box,
    props: {
      background: 'cream2',
      round: 'C',
      width: 'B1',
      position: 'absolute',
      left: '50%'
    },
    style: {
      height: '2px',
      transition: 'all .3s ease-in-out'
    }

  },
  ...[
    {
      props: { top: '3px' },
      style: {
        transform: 'translate(-50%, -50%)'
      },
      class: {
        show: (element, state) => state.activeMenu
          ? { top: '50%', transform: 'translate(-50%, -50%) rotate(-45deg)' }
          : { }
      }
    },
    {
      props: { top: '50%' },
      style: { transform: 'translate(-50%, -50%)' },
      class: {
        show: (element, state) => state.activeMenu
          ? { opacity: 0 }
          : { opacity: 1, transition: 'opacity .4s ease-in-out' }
      }
    },
    {
      props: { bottom: '1px' },
      style: {
        transform: 'translate(-50%, -50%)'
      },
      class: {
        show: (element, state) => state.activeMenu
          ? { transform: 'translate(-50%, 50%) rotate(45deg)', bottom: '50%' }
          : { }
      }
    }
  ]
}
