'use strict'

import { Button, Flex, Img, Link } from 'smbls'

import { opacity } from '../animations'

import LOGO_PNG from '../assets/icons/logo.png'
import BACK_PNG from '../assets/icons/arrow-left-dots.png'
import CLOSE_PNG from '../assets/icons/close.png'

const back = {
  extend: Link,
  props: {
    href: '/#landing',
    cursor: 'pointer'
  },
  icon: {
    extend: Img,
    props: {
      src: BACK_PNG
    }
  }
}

const logo = {
  extend: Link,
  props: { href: '#banner' },
  image: { extend: Img, props: { src: LOGO_PNG } }
}

const menu = {
  extend: Button,
  menu: { text: 'menu' },

  close: {
    extend: Flex,
    text: 'close',
    icon: {
      extend: Img,
      props: { src: CLOSE_PNG }
    }
  }
}

const props = {
  minWidth: '95%',
  // '@maxMobileM': { minWidth: '95%' },
  position: 'fixed',
  top: '0',
  alignSelf: 'center',
  alignItems: 'flex-end',
  zIndex: '50',
  padding: 'Z - - -',
  // borderBottom: '1px solid red',
  // border: 'solid, cream .5',
  // borderWidth: '0 0 .5px 0',
  // round: '0 0 A2 A2',
  overflow: 'hidden',
  style: {
    mixBlendMode: 'difference',
    animationName: opacity,
    animationDuration: '2s',
    animationTimingFunction: 'ease-in-out',
    // backdropFilter: 'blur(10px)'
    // backdropFilter: 'opacity(1)'
  },

  childProps: {
    flex: '1',
    flow: 'column',
    childProps: {
      '@minTabletL': {
        opacity: '.85',
        ':hover': { opacity: '1', transform: 'scale(1.03)' },
        transition: 'opacity .3s ease-in-out, transform .3s ease-in-out'
      }
    },

    back: {
      fontSize: `${10 / 16}em`,
      alignSelf: 'flex-start',
      padding: 'Z2 B',
      icon: { boxSize: ' B1' }
    },

    logo: {
      alignSelf: 'center',
      padding: 'Y 0',
      image: { boxSize: `${24 / 16}em ` }
    },

    menu: {
      minWidth: 'D',
      position: 'relative',
      alignSelf: 'flex-end',
      background: 'transparent',
      childProps: {
        position: 'absolute',
        right: '0',
        fontSize: `${10 / 16}em`,
        letterSpacing: `${3 / 10}em`,
        fontWeight: '400',
        textTransform: 'uppercase',
        color: 'cream',
        padding: 'Z1 B',
        transition: 'bottom .75s ease, transform .75s ease'
      },
      close: {
        align: 'center center',
        gap: 'Y',
        icon: { boxSize: 'Z1 ' }
      }
    }
  }
}

export const Header = {
  tag: 'header',
  extend: Flex,
  props,
  attr: { id: 'header' },

  childExtend: Flex,
  ...[
    { back },
    { logo },
    { menu }
  ]
}
