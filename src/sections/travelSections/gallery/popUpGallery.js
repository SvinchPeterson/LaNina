'use strict'

import { Flex } from 'smbls'

import { PopUpRoomTour, RoomsToursPopUp } from '../../../components'

import { galleries } from './galleries'
import { navBar } from './navBar'
import { galleryHeader } from './galleryHeader'

import ORNAMENT_PNG from '../../../assets/images/travel/ornament.png'

const props = {
  ':before': { background: 'radial-gradient(rgba(0, 47, 57, .35), rgba(0, 47, 57, .96), rgba(0, 47, 57, 1))' },
  height: '0',
  backgroundColor: 'orange',
  style: { backgroundImage: 'url(' + ORNAMENT_PNG + ')', backgroundAttachment: 'fixed' },
  backgroundSize: 'cover',
  backgroundPosition: 'center center',

  close: {
    '@maxMobileM': {
      padding: 'A'
    },
    icon2: { boxSize: 'A ' }
  },

  contentContainer: {
    flow: 'row',
    align: 'center center',
    style: { boxShadow: '0px 60px 30px 15px rgba(0, 0, 0, .25)' },
    '@maxMobileL': {
      flow: 'column',
      gap: 'C'
    },
    header: { '@minMobileL': { display: 'none'} },
    content: { '@minMobileL': { display: 'none'}},

    nav: { '@maxMobileL': { display: 'none' } },
    galleries: { '@maxMobileL': { display: 'none' } }
  },

  logo: { zIndex: '20'}
}

export const popUpGallery = {
  extend: RoomsToursPopUp,
  props,
  class: {
    show: (element, state) => state.activePopUpGallery
      ? { height: '100%' }
      : { height: '100%', pointerEvents: 'none' }
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
    // header: { extend: galleryHeader},
    // content: { extend: galleries },

    // nav: { extend: navBar },
    // galleries: {extend: galleries}
  },

    logo: {
    class: {
      show: (element, state) => state.activePopUpGallery
        ? { opacity: '.8', transform: 'rotate3d(2, 1, 1, -0.1turn)' }
        : { opacity: '0', transform: 'rotate3d(0)' }
    }
  }
}

