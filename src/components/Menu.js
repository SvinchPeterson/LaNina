'use strict'

import { Flex } from 'smbls'

import { Navbar } from './Navbar'

const props = {
  width: '90%',
  zIndex: '200',
  position: 'fixed',
  top: `${68 / 16}em`,
  alignSelf: 'center',
  transition: 'height .8s ease',
  overflow: 'hidden',
  align: 'center center',
  round: '0 0 G G',
  style: { mixBlendMode: 'difference' },

  navBar: {
    gap: 'B',
    transition: 'opacity .5s ease',
    childProps: {
      textAlign: 'center',
      color: 'white',
      fontSize: `${12 / 16}em`,
      fontWeight: '400',
      textTransform: 'uppercase',
      letterSpacing: `${2 / 12}em`
    }
  }
}

export const Menu = {
  extend: Flex,
  props,
  class: {
    show: (element, state) => state.activeMenu
      ? { height: `${50 / 16}em` } : { height: '0' }
  },

  navBar: {
    extend: Navbar,
    class: {
      show: (element, state) => state.activeMenu
        ? { opacity: '1' } : { opacity: '0' }
    }
  }
}
