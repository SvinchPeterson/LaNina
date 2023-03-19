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
  '@mobileL': { display: 'none' },
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

const mobileMenuProps = {
  background: 'naviGreen .95',
  position: 'fixed',
  top: `D`,
  width: '90%',
  alignSelf: 'center',
  zIndex: '52',
  transition: 'height .75s ease',
  align: 'center center',
  style: {
    backdropFilter: 'blur(1px)',
    '@media only screen and (min-width: 769px)': { display: 'none' }
  },

  navBar: {
    flow: 'column',
    childProps: {
      textTransform: 'uppercase',
      fontWeight: '400',
      transition: 'height .75s ease',
      fontSize: `${15 / 16}em`,
      textAlign: 'center',
      color: 'cream2',
      letterSpacing: `${5 / 15}em`,
      align: 'flex-end flex-start',
      padding: '- - X -',
      width: 'fit-content',
      border: 'solid, cream2 .5',
      borderWidth: '0 0 .5px 0',
      '@mobileS': { fontSize: `Z` }
    }
  }

}

export const MenuMobile = {
  extend: Flex,
  props: mobileMenuProps,
  class: {
    show: (element, state) => state.activeMobileMenu
      ? { height: 'calc(100% - 68px)' } : { height: '0', pointerEvents: 'none' }
  },

  navBar: {
    extend: Navbar,
    class: {
      show: (element, state) => state.activeMobileMenu
        ? { opacity: '1', transition: 'opacity .75s ease' }
        : { opacity: '0', transition: 'opacity .35s ease' }
    },

    childExtend: {
      extend: Flex,
      class: {
        show: (element, state) => state.activeMobileMenu
          ? { height: `${46 / 13}em` }
          : { height: '0' }
      }
    }
  }
}
