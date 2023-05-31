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
  menu: {
    text: 'menu',
    on: { click: (event, element, state) => { state.update({ activeMenu: true }) } },
    class: {
      show: (element, state) => state.activeMenu
      ? { bottom: `${-40 / 10}em`, transform: 'scale(.9)' }
      : { bottom: `3.5px`, transform: 'scale(1)' }
    }
  },

  close: {
    extend: Flex,
    text: 'close',
    icon: {
      extend: Img,
      props: { src: CLOSE_PNG }
    },

    on: { click: (event, element, state) => { state.update({ activeMenu: false })}},
    class: {
      show: (element, state) => state.activeMenu
      ? { bottom: `${3.5 / 10}em`, transform: 'scale(1)' }
      : { bottom: `${-40 / 10}em`, transform: 'scale(.9)' }
    }
  }
}

const props = {
  minWidth: '95%',
  align: 'flex-end space-between',
  height: '50px',
  position: 'fixed',
  top: '0',
  alignSelf: 'center',
  zIndex: '50',
  overflow: 'hidden',
  style: {
    mixBlendMode: 'difference',
    animationName: opacity,
    animationDuration: '2s',
    animationTimingFunction: 'ease-in-out'
  },

  childProps: {
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
      padding: 'A2 B',
      icon: { boxSize: ' B1' }
    },

    logo: {
      alignSelf: 'center',
      padding: '0',
      margin: '- - Z -',
      image: { boxSize: `${24 / 16}em ` }
    },

    menu: {
      minWidth: '',
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
