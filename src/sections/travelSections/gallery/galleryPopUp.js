'use strict'

import { Flex } from 'smbls'

import { PopUpRoomTour, PopUpModal } from '../../../components'

import { galleries } from './galleries'
import { navBar } from './navBar'
import { galleryHeader } from './galleryHeader'

import ORNAMENT_PNG from '../../../assets/images/travel/ornament.png'

const props = {
  style: { backgroundAttachment: 'fixed' },
  ':before': { background: 'radial-gradient(rgba(0, 47, 57, .35), rgba(0, 47, 57, .96), rgba(0, 47, 57, 1))' },
  // height: '0',
  backgroundColor: 'orange',
  style: { backgroundImage: 'url(' + ORNAMENT_PNG + ')', backgroundAttachment: 'fixed' },
  backgroundSize: 'cover',
  backgroundPosition: 'center center',

  close: {
    '@maxMobileM': { padding: 'A'},
    icon2: { boxSize: 'A ' }
  },

  contentContainer: {
    align: 'center center',
    boxSize: '100% 85%',
    zIndex: '3',
    flow: 'column',
    style: { boxShadow: '0px 60px 30px 15px rgba(0, 0, 0, .25)' },
    '@maxTabletS': {
      flow: 'column',
      gap: 'D',
      align: 'center flex-start',
      // padding: 'C2 - - -',
    },
    '@maxMobileM': {boxSize: '100% 90%'},
    '@maxMobileS': {boxSize: '100% 95%'},
    '@maxHeightN': {
      gap: 'A'
    },
    content: {
      position: 'relative',
      align: 'center center',
      '@maxTabletS': {
        width: '100%',
        // height: '100%'
      },
      nav: { '@maxTabletS': { display: 'none' } }
    }
  },

  logo: {
    zIndex: '20',
    '@maxMobileM': { boxSize: 'B2 ' }
  }
}

export const galleryPopUp = {
  extend: PopUpModal,
  props,

  class: {
    show: (element, state) => state.activePopUpGallery
      ? { height: '100%' }
      : { height: '0' }
  },

  close: {
    on: {
      click: (event, element, state) => {
        state.update({
          activePopUpGallery: false,
          activeGallery: false
        })
      }
    },
    class: {
      show: (element, state) => state.activePopUpGallery
        ? { opacity: '1', transform: 'rotate(90deg)' }
        : { opacity: '0' }
    }
  },

  contentContainer: {
    extend: Flex,
    header: { extend: galleryHeader },
    content: {
      extend: Flex,
      nav: { extend: navBar },
      galleries: { extend: galleries }
    }
  },

  logo: {
    class: {
      show: (element, state) => state.activePopUpGallery
        ? { opacity: '.8', transform: 'rotate3d(2, 1, 1, -0.1turn)' }
        : { opacity: '0', transform: 'rotate3d(0)' }
    }
  }
}

