'use strict'
import { Text, Box, Link } from '@symbo.ls/symbols'
import { Book } from '../Book'
import { MenuButton } from '../MenuButton'

const links = {
  tag: 'nav',
  proto: Box,
  props: {
    flexAlign: 'center center',
    gap: 'B1'
  },
  childProto: {
    proto: [Link, Text, Box],
    props: {
      color: 'white',
      fontSize: 'Z'
    },
    on: {
      click: (event, element, state) => {
        state.update({ activeMenuItem: element.key, activeMenu: false })
      }
    },
    class: {
      show: (element, state) => state.activeMenuItem === element.key
        ? { opacity: 1 }
        : { }
    },
    style: {
      textDecoration: 'none',
      textTransform: 'uppercase',
      fontWeight: 900,
      opacity: '.7',
      zIndex: '30',
      '&:hover': {
        opacity: 1
      }
    }
  },
  ...[
    { props: { text: 'building', href: '#residence' } },
    { props: { text: 'apartments', href: '#apartments' } },
    { props: { text: 'wine', href: '#wine' } },
    { props: { text: 'location', href: '#location' } }
  ]
}

export const Header = {
  tag: 'header',
  proto: Box,
  props: {
    position: 'fixed',
    width: '100%',
    top: '0',
    left: '0',
    flexAlign: 'center space-between',
    padding: '0 C2 0 C2',
    margin: 'C1 0'
  },
  style: {
    zIndex: '100',
    mixBlendMode: 'difference',
    '@media only screen and (max-width: 768px)': {
      display: 'none'
    }
  },

  Book,
  links
}

export const HeaderMobile = {
  tag: 'header',
  proto: Box,
  props: {
    position: 'fixed',
    top: '0',
    flexAlign: 'center space-between',
    padding: 'C D 0 D',
    gap: 'E',
    display: 'none',
    width: '100%',
    '@mobileL': { display: 'flex' },
    '@mobileM': {
      padding: 'B B 0 B'
    }
  },
  style: {
    zIndex: 500,
    mixBlendMode: 'difference',
    '@media only screen and (max-width: 480px)': { gap: `${95 / 16}em` },
    '@media only screen and (max-width: 330px)': { gap: `${85 / 16}em` }
  },

  Book,
  MenuButton
}
