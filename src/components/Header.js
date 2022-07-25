'use strict'
import { keyframes } from '@emotion/css'

import { Navbar } from './Navbar'

import { Book } from './Book'
import { MenuButton } from './MenuButton'

export const opacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const navBar = {
  proto: Navbar,
  props: { gap: 'C1' },

  ...[
    { props: { text: 'story', href: '#residence' } },
    { props: { text: 'apartment', href: '#apartments' } },
    { props: { text: 'wine', href: '#wine' } },
    { props: { text: 'location', href: '#location' } }
  ]
}

export const Header = {
  tag: 'header',
  props: {
    position: 'fixed',
    width: '100%',
    top: '0',
    left: '0',
    flexAlign: 'center space-between',
    padding: '0 D2 0 D2',
    margin: 'C1 0',
    '@mobileL': { display: 'none' },
    css: {
      zIndex: '100',
      mixBlendMode: 'difference',
      animationName: opacity,
      animationDuration: '3s',
      animationTimingFunction: 'ease-in-out'
    }
  },

  Book,
  navBar
}

export const HeaderMobile = {
  tag: 'header',
  props: {
    position: 'fixed',
    top: '0',
    flexAlign: 'center space-between',
    padding: 'C D 0 D',
    gap: 'E',
    display: 'none',
    width: '100%',
    css: {
      zIndex: 500,
      mixBlendMode: 'difference'
    },
    '@mobileL': { display: 'flex' },
    '@mobileM': { padding: 'B2 C 0 C' },
    '@mobileS': { padding: 'B A1 0 A1' }
  },

  Book,
  MenuButton
}
