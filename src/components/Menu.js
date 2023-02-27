'use strict'

import { Flex } from 'smbls'

import { Navbar } from './Navbar'

const props = {
  width: '90%',
  zIndex: '200',
  position: 'fixed',
  top: `${68 / 16}em`,
  alignSelf: 'center',
  transition: 'height 1s ease',
  overflow: 'hidden',
  align: 'flex-start flex-end',
  style: { mixBlendMode: 'difference' },

  navBar: {
    overflow: 'hidden',
    gap: 'B',
    padding: 'Z2 - - -',
    transition: 'width .5s ease',
    align: 'center flex-end',
    childProps: {
      textAlign: 'center',
      color: 'white',
      fontSize: `${11.5 / 16}em`,
      fontWeight: '400',
      textTransform: 'uppercase',
      letterSpacing: `${2 / 12}em`,
      whiteSpace: 'nowrap',
      transition: 'opacity .8s ease'
    }
  }
}

export const Menu = {
  extend: Flex,
  props,
  class: {
    show: (element, state) => state.activeMenu
      ? { height: `${30 / 16}em` } : { height: '0' }
  },

  navBar: {
    extend: Navbar,

    childExtend: {
      class: {
        show: (element, state) => state.activeMenu
          ? { opacity: '1' } : { opacity: '0' }
      }
    }
  }
}
