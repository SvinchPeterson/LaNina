'use strict'
import { Button } from 'smbls'

export const MenuButton = {
  proto: Button,
  props: {
    background: 'transparent',
    padding: 'Z',
    css: {
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
      boxSize: 'B1 C'
    },
    childProto: {
      props: {
        background: 'cream2',
        round: 'C',
        width: '100%',
        position: 'absolute',
        left: '50%',
        css: {
          height: '2px',
          transition: 'all .3s ease-in-out',
          transform: 'translate(-50%, -50%)'
        }
      }
    },

    ...[
      {
        props: { top: `${3 / 16}em` },
        class: {
          show: (element, state) => state.activeMenu
            ? { top: '50%', transform: 'translate(-50%, -50%) rotate(-45deg)' } : { }
        }
      },

      {
        props: { top: '50%' },
        class: {
          show: (element, state) => state.activeMenu
            ? { opacity: 0 } : { opacity: 1, transition: 'opacity .4s ease-in-out' }
        }
      },

      {
        props: { bottom: `${1 / 16}em` },
        class: {
          show: (element, state) => state.activeMenu
            ? { transform: 'translate(-50%, 50%) rotate(45deg)', bottom: '50%' }
            : { }
        }
      }
    ]
  }
}
