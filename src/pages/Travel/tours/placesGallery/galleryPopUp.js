'use strict'

import { Img, Flex, Button } from 'smbls'

import CLOSE_PNG from '../../../../assets/icons/close.png'

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
  background: 'blue3 .9',
  display: 'none',
  style: { backdropFilter: 'blur(2px)' },

  content: {
    align: 'centet center',
    boxSize: '80% fit-content',
    // background: 'rgba(229, 249, 252, 1)',
    position: 'relative',
    // round: '0 0 G2 G2',
    overflow: 'hidden',
    // border: '2px solid black',
    // border: '3px solid red',

    style: {
      mixBlendMode: 'difference',
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
      icon: { boxSize: 'A2 ' },
      style: { mixBlendMode: 'difference' }
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
