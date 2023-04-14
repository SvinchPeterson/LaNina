'use strict'

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
      border: 'solid, cream .35',
      borderWidth: '.5px',
      background: 'black .05',
      style: { backdropFilter: 'blur(3px)'},
      '@maxMobileXS': { padding: 'B1'},
      '@maxHeightXS': {
        maxHeight: `${450 / 19}em`,
        overflow: 'hidden',
        padding: 'B1',
      },
      list: {
        gap: 'B',
        '@maxMobileM': {
          flow: 'column',
          gap: '0',
          textAlign: 'center',
          padding: '- - - Y2'
        },
        '@maxHeightXS': {
          boxSizing: 'border-box',
          padding: '- - C -',
          maxHeight: `${450 / 19}em`,
          style: { overflowY: 'auto' }
        },
      }
    }
  },

  logo: {opacity: '.7'}
}

export const AmenitiesPopUp = {
  extend: PopUpModal,
  props,

  close: {},

  contentContainer: {
    amenities: {extend: Amenities, title: null }
  },

  logo: {}
}