'use strict'

import { Img, Link } from 'smbls'
import { Navbar } from './Navbar'
import { MenuButton } from './MenuButton'
import LOGO_PNG from '../assets/icons/logo-white.png'

const props = {
  position: 'fixed',
  width: '100%',
  top: '0',
  left: '0',
  flexAlign: 'center space-between',
  padding: 'C D 0 D',
  margin: '0 0 0 0',
  zIndex: '100',
  style: {
    zIndex: '100',
    mixBlendMode: 'difference',
    '@media only screen and (max-height: 800px)': {
      paddingTop: `${30 / 16}em !important`,
      paddingBottom: `0 !important`
    }
  },
  '@mobileM': { padding: 'B1 C - C' },
  '@mobileS': { padding: '- A2 A1 A2' },

  logo: {
    href: '#banner',
    ':hover': { opacity: 1 },
    icon: {
      src: LOGO_PNG,
      boxSize: 'B -',
      '@tabletS': { boxSize: 'B1 -' }
    }
  },

  navBar: {
    gap: 'B2',
    '@tabletS': { display: 'none' }
  },

  menuButton: {
    display: 'none',
    '@tabletS': { display: 'block' }
  }
}

export const Header = {
  tag: 'header',
  props: props,

  logo: { extend: Link, icon: { extend: Img } },

  navBar: {
    extend: Navbar,
    ...[
      { props: { text: 'residence', href: '#residence' } },
      { props: { text: 'servises & facilities', href: '#features' } },
      { props: { text: 'apartments', href: '#apartments' } },
      { props: { text: 'wine', href: '#wine' } },
      { props: { text: 'location', href: '#location' } }
    ]
  },
  menuButton: { extend: MenuButton }
}
