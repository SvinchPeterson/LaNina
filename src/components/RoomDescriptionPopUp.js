'use strict'

import { Flex } from 'smbls'

import { PopUpModal } from './PopUpModal'

import { RoomDescription } from './RoomDescription'

const props = {
  boxSize: '100% 100%',
  background: 'black .55',
  style: { backdropFilter: 'blur(1.5px)'},

  contentContainer: {
    position: 'relative',
    boxSize: '100% 100%',
    padding: '0',
    childProps: {
      padding: 'C',
      width: 'G3',
      position: 'absolute',
      top: '50%',
      left: '50%',
      fontSize: `${19 / 16}em`,
      border: 'solid, cream .35',
      borderWidth: '.5px',
      background: 'black .05',
      boxSizing: 'content-box',
      style: { backdropFilter: 'blur(3px)'},

      '@maxMobileL': { width: 'G1' },
      '@maxMobileM': { width: 'F3' },
      '@maxMobileS': { padding: 'C B' },

    }
  },
}

export const RoomDescriptionPopUp = {
  extend: PopUpModal,
  props,

  close: {},

  contentContainer: {
    childExtend: RoomDescription
  },

  logo: {}
}