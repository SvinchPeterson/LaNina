'use strict'

import { Img, Link } from 'smbls'

import { opacity } from '../animations'
import { Navbar } from './Navbar'
import { MenuButton } from './MenuButton'

import LOGO_PNG from '../assets/icons/logo-white.png'

import BACK_PNG from '../assets/icons/arrowBackcream.png'

const props = {
  position: 'fixed',
  width: '100%',
  top: '0',
  left: '0',
  flexAlign: 'center space-between',
  padding: 'C D 0 D',
  margin: '0 0 0 0',
  zIndex: '7',
  style: {
    mixBlendMode: 'difference',
    animationName: opacity,
    animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)',
    animationDuration: '5s',
    '@media only screen and (max-height: 800px)': {
      paddingTop: `${30 / 16}em !important`,
      paddingBottom: `0 !important`
    }
  },
  '@mobileL': { padding: 'A B - B' },

  back: {
    position: 'absolute',
    bottom: '-A1',
    arrow: {
      boxSize: ' A1'
    }

  },

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
  back: {
    extend: Link,
    attr: { href: '../#landing' },
    arrow: {
      extend: Img,
      props: { src: BACK_PNG }
    }
  },

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
