'use strict'

import { Flex, Link } from 'smbls'

import { Navbar } from './Navbar'

import { opacity } from '../animations'

const props = {
  width: '90%',
  height: '46px',
  position: 'fixed',
  top: `0`,
  round: '0 0 A2 A2',
  padding: '- - - -',
  zIndex: '40',
  alignSelf: 'center',
  transition: 'height .75s ease',
  overflow: 'hidden',
  align: 'center center',
  style: {
    mixBlendMode: 'difference'
  },

  navBar: {
    overflow: 'hidden',
    gap: 'C',
    padding: 'Z2 - - -',
    align: 'center center',
    '@maxTabletS': {
      flow: 'column',
      gap: '0'
    },
    childProps: {
      textAlign: 'center',
      color: 'cream',
      fontSize: 'Z',
      fontWeight: '400',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      letterSpacing: '2.5px',
      overflow: 'hidden',
      '@minTabletS': {
        // opacity: '.7',
        ':hover': {
          transform: 'scale(1.03)',
          opacity: '1'
        }
      }
    }
  }
}

export const Menu = {
  extend: Flex,
  props,
  class: {
    show: (element, state) => state.activeMenu
      ? { height: `90%`}
      : { height: '46px' }
  },

  navBar: {
    extend: Navbar,
     class: {
      show: (element, state) => state.activeMenu
        ? {
          '@media only screen and (min-width: 1025px)': {
            width: `${700 / 16}em`,
            transition: 'width .35s ease',
            '> a': {
              transform: 'scale(1)',
              opacity: '.7',
              transition: 'transform .75s ease, opacity .75s ease'
            }
          },
          '@media only screen and (max-width: 1024px)': {
            '> a': {
              height: `${46 / 13}em`,
              opacity: '1',
              transition: 'height .75s ease, opacity .75s ease'
            }
          }
        }
        : {
          '@media only screen and (min-width: 1025px)': {
            width: `0`,
            transition: 'width .35s ease',
            '> a': {
              transform: 'scale(1.3)',
              opacity: '0',
              transition: 'transform .75s ease, opacity .75s ease'
            }
          },
          '@media only screen and (max-width: 1024px)': {
            '> a': {
              height: `0`,
              opacity: '0',
              transition: 'height .35s ease, opacity .35s ease'
            }
          }
        }
    },

    childExtend: {
      on: {
        click: (event, element, state, ctx) => {
          state.update({ activeMenu: false })
          Link.on.click(event, element, state, ctx)
        }
      }
    }
  }
}

const mobileMenuProps = {
  position: 'fixed',
  top: `47px`,
  width: '85%',
  alignSelf: 'center',
  zIndex: '52',
  align: 'center center',
  round: '0 0 G1 G1',

  style: {
    backdropFilter: 'blur(2px)',
    '@media only screen and (min-width: 769px)': { display: 'none' }
  },

  navBar: {
    minWidth: '100%',
    flow: 'column',
    margin: '- - D2 -',
    alignItems: 'center',
    childProps: {
      textTransform: 'uppercase',
      fontWeight: '400',
      color: 'cream',
      letterSpacing: `${5 / 15}em`,
      minWidth: '100%',
      align: 'flex-end center',
      padding: '- - X2 -',
      width: 'fit-content',
      textAlign: 'center',
      fontSize: 'Z',
      border: 'solid, orange .55',
      borderWidth: '0 0 .6px 0',
      // transition: 'transform 3s ease-in-out',
      'maxMobileXS': { fontSize: `${12.5 / 16}em` }
    }
  }

}

export const MenuMobile = {
  extend: Flex,
  props: mobileMenuProps,

  navBar: {
    extend: Navbar,
    childExtend: { extend: Flex}
  }
}
