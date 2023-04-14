'use strict'

import { Flex } from 'smbls'

import { PopUpModal } from './PopUpModal'
import { Amenities } from './Amenities'

const props = {
  boxSize: '100% 100%',
  background: 'black .55',
  style: { backdropFilter: 'blur(1.5px)'},

  contentContainer: {
    amenities: {
      padding: 'C',
      fontSize: `${19 / 16}em`,
      border: 'solid, cream .5',
      borderWidth: '.5px',
      background: 'black .05',
      style: { backdropFilter: 'blur(.5px)'},
      '@maxMobileXS': { padding: 'B1'},
      '@maxHeightS': {
        maxHeight: `${400 / 19}em`,
        overflow: 'hidden',
        padding: 'B1',
      },
      title: {
        letterSpacing: '10px',
        width: '100%',
        '@maxMobileM': {
          padding: '- - - Y2'
        }
      },
      list: {
        gap: 'B',
        '@maxMobileM': {
          flow: 'column',
          gap: '0',
          textAlign: 'center',
          padding: '- - - Y2'
        },
        '@maxHeightS': {
          boxSizing: 'border-box',
          padding: '- - B1 -',
          style: {
            overflowY: 'auto',
            maxHeight: `${350 / 19}em`
          }
        },
      }
    }
  }
}

export const AmenitiesPopUp = {
  extend: PopUpModal,
  props,

  close: {},

  contentContainer: {
    amenities: {extend: Amenities }
  },

  logo: null
}