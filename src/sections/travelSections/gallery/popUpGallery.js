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
    boxSize: '100% 85%',
    zIndex: '3',
    flow: 'column',
    style: { boxShadow: '0px 60px 30px 15px rgba(0, 0, 0, .25)' },
    '@maxMobileL': { flow: 'column', gap: 'C' },
    '@maxMobileM': {boxSize: '100% 90%'},

    header: {
      '@minMobileL': { display: 'none'},
      boxSize: 'D2 100%',
      align: 'flex-end space-between',
      overflow: 'hidden',
      border: 'solid, cream .35',
      borderWidth: '0 0 .55px 0',
      '@maxMobileL': {
        flow: 'column',
        align: 'flex-start flex-end',
        border: 'none',
        padding: '0',
        boxSize: 'E1 100%',
      },

      titles: {
        position: 'relative',
        minWidth: `${200 / 16}em`,
        height:`${40 / 16}em`,
        overflow: 'hidden',
        '@maxMobileL': {
          border: 'solid, cream .35',
          borderWidth: '0 0 .55px 0',
          minWidth: '100%',
        },
        childProps: {
          position: 'absolute',
          left: '0',
          color: 'cream',
          whiteSpace: 'nowrap',
          lineHeight: `${22 / 28}em`,
          transition: 'bottom .65s ease-in-out, opacity .65s ease-in-out, transform .65s ease-in-out',
          letterSpacing: `${-1 / 28}em`,
          span: { fontWeight: '700' },
          '@maxMobileL': {left: 'X'}
        },
      },

      tabs: {
        '@maxMobileL': {
          alignSelf: 'flex-end',
          minWidth: '100%',
          align: 'center flex-end',
          padding: '- Z - -'
        },
        '@maxMobileS': {
          align: 'center space-between',
          padding: '- Z'
        },
        childProps: {
          cursor: 'pointer',
          fontSize: `${10.5 / 16}em`,
          fontWeight: '400',
          textTransform: 'uppercase',
          background: 'transparent',
          color: 'cream',
          letterSpacing: `${2 / 10.5}em`,
          transition: 'opacity .2s ease-in-out',
          ':hover': { opacity: '1' }
        }
      }
    },
    content: {
      '@minMobileL': { display: 'none'},
      width: '100%',
      flex: '1',
      position: 'relative',
      flow: 'column'
    },

    nav: { '@maxMobileL': { display: 'none' } },
    galleries: { '@maxMobileL': { display: 'none' } }
  },

  logo: {
    zIndex: '20',
    '@maxMobileM': {display: 'none'}
  }
}

export const popUpGallery = {
  extend: PopUpModal,
  props,
  class: {
    show: (element, state) => state.activeGalleryPopUp
      ? { height: '100%' }
      : { height: '0', pointerEvents: 'none' }
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
    header: {
      extend: galleryHeader
    },
    content: { extend: galleries },
    nav: { extend: navBar },
    galleries: {
      extend: galleries
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

