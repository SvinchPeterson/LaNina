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
      '@maxMobileXS': { padding: 'B1'},
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
        }
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