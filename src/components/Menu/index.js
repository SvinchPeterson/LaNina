'use strict'
import { Box, Flex, Link } from 'smbls'

const sectionLinks = {
  tag: 'nav',
  extend: Flex,
  props: {
    flow: 'column',
    align: 'flex-start center',
    gap: '0'
  },
  style: { width: 'fit-content' },

  childExtend: {
    extend: [Link, Box],
    props: {
      fontSize: 'C',
      color: 'cream2 .95',
      round: 'Z',
      padding: 'Z2 0'
    },
    style: {
      textTransform: 'uppercase',
      cursor: 'pointer',
      textDecoration: 'none'
    },
    on: {
      click: (event, element, state) => {
        state.update({ activeMenuItem: element.key, activeMenu: false })
      }
    }
  },

  ...[
    { props: { text: 'residence', href: '#residence' } },
    { props: { text: 'SERVICES & FACILITIES', href: '#features' } },
    { props: { text: 'apartments', href: '#apartments' } },
    { props: { text: 'wine', href: '#wine' } },
    { props: { text: 'location', href: '#location' } }
  ]
}

export const Menu = {
  tag: 'aside',
  extend: Box,
  props: {
    boxSize: '100% 100%',
    position: 'fixed',
    top: '0',
    left: '0',
    flexAlign: 'center center',
    background: 'black .75'
  },
  style: {
    boxSizing: 'border-box',
    backdropFilter: 'blur(1px)',
    transition: 'opacity .5s ease-in-out',
    zIndex: '400'
  },
  class: {
    show: (element, state) => state.activeMenu
      ? { opacity: 1 }
      : { opacity: 0, pointerEvents: 'none', zIndex: '-1' }
  },

  sectionLinks
}
