'use strict'

import { Navbar } from '../Navbar'

const props = {
  boxSize: '100% 100%',
  position: 'fixed',
  top: '0',
  left: '0',
  flexAlign: 'center center',
  background: 'black',
  style: {
    boxSizing: 'border-box',
    backdropFilter: 'blur(1px)',
    transition: 'opacity .5s ease-in-out',
    zIndex: '4'
  },

  nav: {
    flow: 'column',
    gap: 'A2',
    childProps: {
      fontSize: 'B',
      fontWeight: '500',
      style: { letterSpacing: '3px' }
      // '@mobileS': { fontSize: 'A' },
      // '@mobileXS': { fontSize: 'Z' }
    }
  }
}

export const Menu = {
  tag: 'aside',
  props,
  class: {
    show: (element, state) => state.activeMenu
      ? { opacity: 1 }
      : { opacity: 0, pointerEvents: 'none', zIndex: '-1' }
  },

  nav: {
    extend: Navbar,
    childExtend: {
      on: {
        click: (event, element, state) => {
          state.update({ activeMenuItem: element.key, activeMenu: false })
        }
      }
    },
    ...[
      { props: { text: 'residence', href: '#residence' } },
      { props: { text: 'services & facilities', href: '#features' } },
      { props: { text: 'apartments', href: '#apartments' } },
      { props: { text: 'wine', href: '#wine' } },
      { props: { text: 'location', href: '#location' } }
    ]
  }
}
