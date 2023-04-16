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
      border: 'solid, orange .35',
      borderWidth: '.3px',
      background: 'black .05',
      style: { backdropFilter: 'blur(3px)'},
      '@maxMobileXS': { padding: 'B1'},
      '@maxHeightS': {
        maxHeight: `${450 / 19}em`,
        overflow: 'hidden',
        padding: '0 B1',
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
          padding: 'B1 - B1 -',
          style: {
            overflowY: 'auto',
            maxHeight: `${450 / 19}em`
          }
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