'use strict'

import { PopUpModal, GalleryContainer } from '../../../components'

const props = {
  content: {
    alignSelf: 'center'
  }
}

export const popUpGallery = {
  extend: PopUpModal,
  props,

  class: {
    show: (element, state) => state.activePopUpGallery
      ? { height: '100%' }
      : { height: '0', pointerEvents: 'none', zIndex: '-1' }
  },

  close: {
    on: {
      click: (event, element, state) => {
        state.update({
          activePopUpGallery: false
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
    props: { border: '3px solid red' },
    extend: GalleryContainer
  },

  logo: {
    class: {
      show: (element, state) => state.activePopUpGallery
        ? { opacity: '.8', transform: 'rotate3d(2, 1, 1, -0.1turn)' }
        : { opacity: '0', transform: 'rotate3d(0)' }
    }
  }
}
