'use strict'
import { Box, Text, Link } from '@symbo.ls/symbols'

import style, { styleSectionLinks } from './style'

const sectionLinks = {
  tag: 'nav',
  proto: Box,
  class: [styleSectionLinks],

  childProto: {
    proto: [Link, Text, Box],
    props: {
      fontSize: 'Z',
      color: 'cream2 .95',
      round: 'D',
      padding: 'Z2 0',
      width: 'F'
    },
    on: {
      click: (event, element, state) => {
        // event.preventDefault()
        state.update({ activeMenuItem: element.key, activeMenu: false })
        // Link.on.click(event, element, state)
      }
    }

    // class: {
    //   show: (element, state) => state.activeMenuItem === element.key
    //     ? { background: '244, 233, 217, 1' }
    //     : { }
    // }
  },
  ...[
    { props: { text: 'residence', href: '#residence' } },
    { props: { text: 'apartments', href: '#apartments' } },
    { props: { text: 'wine', href: '#wine' } },
    { props: { text: 'location', href: '#location' } }
  ]
}
export const Menu = {
  tag: 'aside',
  proto: Box,
  style,
  class: {
    show: (element, state) => state.activeMenu
      ? { opacity: 1 }
      : { opacity: 0, pointerEvents: 'none' }
  },
  props: {
    boxSize: '100% 100%',
    position: 'fixed',
    top: '0',
    left: '0'
  },

  sectionLinks
}
