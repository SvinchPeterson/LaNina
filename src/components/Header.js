'use strict'

import { Flex, Img, Link } from 'smbls'

import { opacity } from '../animations'
import { Navbar } from './Navbar'
import { MenuButton } from './MenuButton'
import { BBHeading } from './BBHeading'

import BACK_PNG from '../assets/icons/arrowBack-white.png'

const props = {
  position: 'fixed',
  minWidth: '80%',
  align: 'flex-start space-between',
  flow: 'column',
  gap: 'Z',
  margin: 'auto',
  alignSelf: 'center',
  zIndex: '50',
  padding: 'B - - -',
  '@mobileL': { minWidth: '90%' },
  style: {
    mixBlendMode: 'difference',
    animationName: opacity,
    animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)',
    animationDuration: '5s',
    '@media only screen and (max-height: 450px)': { height: `${80 / 16}em` }
  },
  logo: {
    padding: '- Y'
  },
  navBar: {
    align: 'center space-between',
    minWidth: '100%',
    border: 'solid, white .65',
    borderWidth: '.5px 0 0 0',
    padding: '- Y',
    back: {
      opacity: '.75',
      transition: 'opacity .15s ease-in-out',
      ':hover': { opacity: '1' },
      icon: { boxSize: ' A2' }
    },
    nav: {
      padding: ' - - -',
      gap: 'B',
      '@tabletS': { display: 'none' },
      childProps: {
        textTransform: 'uppercase',
        fontSize: `${13 / 16}em`,
        letterSpacing: '.5px',
        opacity: '.75',
        transition: 'opacity .15s ease-in-out',
        ':hover': { opacity: '1' }
      }
    },

    menuButton: {
      display: 'none',
      '@tabletS': { display: 'block' }
    }
  }
}

export const Header = {
  tag: 'header',
  props: props,
  extend: Flex,

  logo: {
    extend: [Link, BBHeading],
    attr: { href: '#banner' }
  },

  navBar: {
    extend: Flex,
    back: {
      extend: Link,
      props: {
        href: '../#landing',
        cursor: 'pointer'
      },
      icon: {
        extend: Img,
        props: { src: BACK_PNG }
      }

    },

    nav: {
      extend: Navbar,
      ...[
        { props: { text: 'residence', href: '#residence' } },
        { props: { text: 'servises & facilities', href: '#features' } },
        { props: { text: 'apartments', href: '#apartments' } },
        { props: { text: 'location', href: '#location' } }
      ]
    },

    menuButton: { extend: MenuButton }
  }
}
