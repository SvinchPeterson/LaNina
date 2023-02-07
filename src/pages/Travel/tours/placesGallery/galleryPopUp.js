'use strict'

import { Img, Flex, Button } from 'smbls'

import CLOSE_PNG from '../../../../assets/icons/reject.png'

import { popUpGallery } from '../../../../animations'

import { tbilisi, borjomi, mtsketa, kakheti, martvili, kutaisi, gori, kazbegi } from './placesGallery'

const close = {
  extend: Button,
  icon: {
    extend: Img,
    props: { src: CLOSE_PNG }
  },

  on: {
    click: (event, element, state) => {
      state.update({
        activeGalleryPopUp: false,

        activeTbilisi: false,
        activeBorjomi: false,
        activeMtsketa: false,
        activeKakheti: false,
        activeMartvili: false,
        activeKutaisi: false,
        activeGori: false,
        activeKazbegi: false
      })
    }
  }
}

const props = {
  position: 'fixed',
  boxSize: '100% 100%',
  zIndex: '200',
  flow: 'column',
  align: 'center center',
  background: 'blue2 .95',
  display: 'flex',
  // height: '0',
  style: { backdropFilter: 'blur(1px)', transition: 'width .5s ease-in-out, opacity .5s ease-in-out' },

  content: {
    align: 'centet center',
    width: 'fit-content',
    position: 'relative',
    overflow: 'hidden',
    height: '100px',
    style: {
      '@media only screen and (min-height: 900px)': {
        height: `${700 / 16}em`
      },
      '@media only screen and (max-height: 900px)': {
        height: `70%`
      },
      '@media only screen and (max-height: 750px)': {
        height: `85%`
      },
      '@media only screen and (max-height: 650px)': {
        height: `95%`
      }
    },
    close: {
      position: 'absolute',
      right: '0',
      top: '0',
      background: 'transparent',
      icon: { boxSize: 'A2 ' }
    }
  }
}

export const galleryPopUp = {
  extend: Flex,
  props,
  // class: {
  //   show: (element, state) => state.activeGalleryPopUp
  //     ? { width: '100%', opacity: '1' }
  //     : { width: '0', opacity: '0' }
  // },

  content: {
    extend: Flex,
    class: {
      show: (element, state) => state.activeGalleryPopUp
        ? { }
        : { }
    },

    close,
    tbilisi,
    borjomi,
    mtsketa,
    kakheti,
    martvili,
    kutaisi,
    gori,
    kazbegi
  }
}
