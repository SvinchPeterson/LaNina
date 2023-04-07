'use strict'

import { Flex } from 'smbls'

import { PopUpModal } from "./PopUpModal"
import { Navbar } from './Navbar'

const props = {
  contentContainer: {
    boxSize: '100% 80%',
    zIndex: '3',
    flow: 'column',

    header: {
      boxSize: 'D2 100%',
      align: 'flex-end space-between',
      overflow: 'hidden',
      border: 'solid, cream .5',
      borderWidth: '0 0 .6px 0',

      titles: {
        position: 'relative',
        margin: '- - Z -',
        childProps: {
          position: 'absolute',
          left: '0',
          color: 'cream',
          whiteSpace: 'nowrap',
          lineHeight: `${22 / 28}em`,
          fontSize: 'D',
          transition: 'bottom .65s ease-in-out, opacity .65s ease-in-out',
          letterSpacing: `${-1 / 28}em`,
          span: { fontWeight: '700' }
        }
      },

      tabs: {
        gap: 'A',
        margin: '- - Y -',
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
      tabs: { extend: Navbar }
    },
    content: { extend: Flex }
  },

  logo: {}
}