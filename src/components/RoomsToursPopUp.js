'use strict'

import { Flex, Button } from 'smbls'

import { PopUpModal } from "./PopUpModal"
import { Navbar } from './Navbar'

const props = {
  contentContainer: {
    boxSize: '100% 85%',
    zIndex: '3',
    flow: 'column',
    '@maxMobileM': {boxSize: '100% 90%'},

    header: {
      boxSize: 'E 100%',
      align: 'flex-end space-between',
      overflow: 'hidden',
      border: 'solid, cream .35',
      borderWidth: '0 0 .55px 0',
      padding: '- A',
      '@maxMobileL': {
        flow: 'column',
        align: 'flex-start flex-end',
        border: 'none',
        padding: '0',
        boxSize: 'E1 100%',
      },

      titles: {
        position: 'relative',
        minWidth: `${200 / 16}em`,
        height:`${40 / 16}em`,
        overflow: 'hidden',
        '@maxMobileL': {
          border: 'solid, cream .35',
          borderWidth: '0 0 .55px 0',
          minWidth: '100%',
        },
        childProps: {
          position: 'absolute',
          left: '0',
          color: 'cream',
          whiteSpace: 'nowrap',
          lineHeight: `${22 / 28}em`,
          transition: 'bottom .65s ease-in-out, opacity .65s ease-in-out, transform .65s ease-in-out',
          letterSpacing: `${-1 / 28}em`,
          span: { fontWeight: '700' },
          '@maxMobileL': {left: 'X'}
        },
      },

      tabs: {
        // margin: '- - X2 -',
        '@maxMobileL': {
          alignSelf: 'flex-end',
          minWidth: '100%',
          align: 'center center'
        },
        childProps: {
          cursor: 'pointer',
          fontSize: `${10.5 / 16}em`,
          fontWeight: '400',
          textTransform: 'uppercase',
          padding: '0',
          background: 'transparent',
          color: 'cream',
          letterSpacing: `${2 / 10.5}em`,
          transition: 'opacity .2s ease-in-out',
          ':hover': { opacity: '1' }
        }
      }
    },

    content: {
      width: '100%',
      height: 'calc(100% - 94px)',
      position: 'relative',
      flow: 'column'
    }
  },

  logo: {
    '@maxMobileM': {display: 'none'}
  }
}

export const RoomsToursPopUp = {
  extend: PopUpModal,
  props,

  close: {},

  contentContainer: {
    extend: Flex,
    header: {
      extend: Flex,
      titles: { childExtend: { tag: 'h2' } },
      tabs: {
        extend: Flex,
        childExtend: { extend: Button }
      }
    },
    content: { extend: Flex }
  },

  logo: {}
}