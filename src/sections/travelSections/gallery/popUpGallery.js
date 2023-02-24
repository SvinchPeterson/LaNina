'use strict'

import { Flex } from 'smbls'

import { PopUpModal } from '../../../components'

import { galleries } from './galleries'
import { navBar } from './navBar'

export const popUpGallery = {
  extend: PopUpModal,
  props: {
    background: 'naviBlue',
    content: { position: 'relative' }
  },
  class: {
    show: (element, state) => state.activePopUpGallery
      ? {
        height: '100%'
      }
      : {
        height: '0',
        pointerEvents: 'none',
        zIndex: '-1'
      }
  },

  close: {
    on: {
      click: (event, element, state) => {
        state.update({
          activeClose: false,
          activePopUpGallery: false,
          activeTbilisi: false,
          activeBorjomi: false,
          activeMtsketa: false,
          activeKakheti: false,
          activeMartvili: false,
          activeKutaisi: false,
          activeGori: false,
          activeKazbegi: false,
          activeImage: 0
        })
      }
    },
    class: {
      show: (element, state) => state.activePopUpGallery
        ? { opacity: '1', transform: 'rotate(90deg)' }
        : { opacity: '0' }
    }
  },

  content: {
    extend: Flex,
    navBar,
    galleries: { extend: galleries }
  },

  logo: {
    class: {
      show: (element, state) => state.activePopUpGallery
        ? { opacity: '.8', transform: 'rotate3d(2, 1, 1, -0.1turn)' }
        : { opacity: '0', transform: 'rotate3d(0)' }
    }
  }
}
