'use strict'

import { Img, Flex, Button } from 'smbls'

import LOGO_PNG from '../../../../assets/icons/logoBlack.png'

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
  // background: 'radial-gradient(rgba(229, 249, 252, .5), rgba(229, 249, 252, 1))',
  zIndex: '70',
  flow: 'column',
  align: 'center center',
  background: 'black .55',
  style: { backdropFilter: 'blur(.5px)' },

  content: {
    align: 'centet center',
    boxSize: '80% fit-content',
    background: 'rgba(229, 249, 252, 1)',
    position: 'relative',
    close: {
      position: 'absolute',
      right: 'Z',
      top: 'A',
      background: 'transparent',
      icon: { boxSize: 'B ' }
    }
    // style: { boxShadow: 'inset 0 0 100px 1px black' }
    // overflow: 'hidden
    // boxSize: '70% 70%'
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
