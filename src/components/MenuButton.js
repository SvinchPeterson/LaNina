'use strict'
import { Button } from 'smbls'

export const MenuButton = {
  extend: Button,
  props: {
    background: 'transparent',
    padding: '0',
    style: {
      cursor: 'pointer',
      '> svg': { display: 'none' }
    }
  },

  on: {
    click: (event, element, state) => {
      state.activeMenu
        ? state.update({ activeMenu: false, activeMenuItem: null })
        : state.update({ activeMenu: true })
    }
  },

  content: {
    props: {
      position: 'relative',
      boxSize: 'B B2',
      opacity: '.75'
    },
    childExtend: {
      props: {
        background: 'white',
        round: 'C',
        width: '100%',
        position: 'absolute',
        left: '50%',
        style: {
          height: '2px',
          transform: 'translate(-50%, -50%)'
        }
      }
    },

    ...[
      {
        props: {
          top: `${3 / 16}em`,
          style: { transition: 'top .2s ease-in-out, transform .2s ease-in-out' }
        },
        class: {
          show: (element, state) => state.activeMenu
            ? { top: '50%', transform: 'translate(-50%, -50%) rotate(-45deg)' } : { }
        }
      },

      {
        props: { top: '50%' },
        class: {
          show: (element, state) => state.activeMenu
            ? { opacity: 0 } : { opacity: 1, transition: 'opacity .2s ease-in-out' }
        }
      },

      {
        props: {
          bottom: `${1 / 16}em`,
          style: { transition: 'bottom .2s ease-in-out, transform .2s ease-in-out' }
        },
        class: {
          show: (element, state) => state.activeMenu
            ? { transform: 'translate(-50%, 50%) rotate(45deg)', bottom: '50%' }
            : { }
        }
      }
    ]
  }
}
