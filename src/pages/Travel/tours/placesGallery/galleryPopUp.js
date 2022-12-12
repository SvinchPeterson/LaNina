'use strict'

import { Img, Flex, Button } from 'smbls'

import CLOSE_PNG from '../../../../assets/icons/closeBlack.png'

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
  background: 'black .55',
  display: 'none',
  style: { backdropFilter: 'blur(.5px)' },

  content: {
    align: 'centet center',
    boxSize: '80% fit-content',
    background: 'rgba(229, 249, 252, 1)',
    position: 'relative',
    style: {
      '@media only screen and (min-height: 850px)': {
        height: `${600 / 16}em`
      },
      '@media only screen and (max-height: 720px)': {
        height: `85%`
      },
      '@media only screen and (max-height: 570px)': {
        height: `100%`
      }
    },
    close: {
      position: 'absolute',
      right: 'Z',
      top: 'A',
      background: 'transparent',
      icon: { boxSize: 'B ' }
    }
  }
}

export const galleryPopUp = {
  extend: Flex,
  props,
  class: {
    show: (element, state) => state.activeGalleryPopUp
      ? { display: 'flex' }
      : { display: 'none' }
  },

  content: {
    extend: Flex,
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
