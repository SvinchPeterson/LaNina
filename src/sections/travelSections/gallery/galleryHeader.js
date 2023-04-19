'use strict'

import { Flex, Button } from 'smbls'

const props = {
  titles: {
    childProps: {
      fontSize: `${32 / 16}em`,
      fontWeight: '100',
      textTransform: 'capitalize',
      padding: '- - - X1',
      '@maxMobileL': {
        letterSpacing: '2px'
      }
    }
  },
  tabs: {
    padding: 'A Z - -',
    gap: '',
    '@maxMobileS': {
      gap: '0',
      padding: 'A A 0 A'
    },
    '@maxMobileXS': { padding: 'A 0 0 0' },
    childProps: {
      padding: 'Z1 A1',
      style: { padding: ''},
      '@maxMobileS': {
        padding: 'Z1 Z2',
      },

      childProps: {
        display: 'block',
        boxSize: 'Y B',
        background: 'cream',
        round: 'C'
      }
    }
  }
}

export const galleryHeader = {
  props,

  class: {
    show: (element, state) => state.activePopUpGallery
      ? { opacity: '1' }
      : { opacity: '0' }
  },

  titles: {
    ...[
      {
        class: {
          show: (element, state) => state.activeTbilisi
            ? {
              bottom: `${10 / 28}em`,
              opacity: '1',
              transform: 'scale(1)'
            }
            : {
              bottom: `${-50 / 28}em`,
              opacity: '0',
              transform: 'scale(.95)'
            }
        },

        props: { text: 'tbilisi' }
      },

      {
        class: {
          show: (element, state) => state.activeBorjomi
            ? { bottom: `${10 / 28}em`, opacity: '1', transform: 'scale(1)' }
            : { bottom: `${-50 / 28}em`, opacity: '0', transform: 'scale(.95)' }
        },
        props: { text: 'borjomi' }
      },

      {
        class: {
          show: (element, state) => state.activeMtsketa
            ? { bottom: `${10 / 28}em`, opacity: '1', transform: 'scale(1)' }
            : { bottom: `${-50 / 28}em`, opacity: '0', transform: 'scale(.95)' }
        },
        props: { text: 'mtsketa' }
      },

      {
        class: {
          show: (element, state) => state.activeKakheti
            ? { bottom: `${10 / 28}em`, opacity: '1', transform: 'scale(1)' }
            : { bottom: `${-50 / 28}em`, opacity: '0', transform: 'scale(.95)' }
        },
        props: { text: 'kakheti' }
      },

      {
        class: {
          show: (element, state) => state.activeMartvili
            ? { bottom: `${10 / 28}em`, opacity: '1', transform: 'scale(1)' }
            : { bottom: `${-50 / 28}em`, opacity: '0',  transform: 'scale(.95)' }
        },
        props: { text: 'martvili' }
      },

      {
        class: {
          show: (element, state) => state.activeKutaisi
            ? { bottom: `${10 / 28}em`, opacity: '1', transform: 'scale(1)' }
            : { bottom: `${-50 / 28}em`, opacity: '0', transform: 'scale(.95)' }
        },
        props: { text: 'kutaisi' }
      },

      {
        class: {
          show: (element, state) => state.activeGori
            ? { bottom: `${10 / 28}em`, opacity: '1', transform: 'scale(1)' }
            : { bottom: `${-50 / 28}em`, opacity: '0', transform: 'scale(.95)' }
        },
        props: { text: 'gori' }
      },

      {
        class: {
          show: (element, state) => state.activeKazbegi
            ? { bottom: `${10 / 28}em`, opacity: '1', transform: 'scale(1)' }
            : { bottom: `${-50 / 28}em`, opacity: '0', transform: 'scale(.95)' }
        },
        props: { text: 'kazbegi' }
      }
    ]
  },

  tabs: {
    childExtend: {
      extend: Button,
      span: {}
    },
    ...[
      {
        on: {
          click: (event, element, state) => {
            state.update({
              activeTbilisi: true,
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
          show: (element, state) => state.activeTbilisi
            ? { opacity: '1', pointerEvents: 'none', '> span': {background: 'rgba(226, 135, 67, 1)'} } : { opacity: '.55' }
        },
        text: null,
      },

      {
        on: {
          click: (event, element, state) => {
            state.update({
              activeBorjomi: true,
              activeTbilisi: false,
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
          show: (element, state) => state.activeBorjomi
            ? { opacity: '1', pointerEvents: 'none', '> span': { background: 'rgba(226, 135, 67, 1)'} }
            : { opacity: '.55' }
        },
        text: null
      },

      {
        on: {
          click: (event, element, state) => {
            state.update({
              activeMtsketa: true,
              activeTbilisi: false,
              activeBorjomi: false,
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
          show: (element, state) => state.activeMtsketa
            ? { opacity: '1', pointerEvents: 'none', '> span': { background: 'rgba(226, 135, 67, 1)'} }
            : { opacity: '.55' }
        },
        text: null
      },

      {
        on: {
          click: (event, element, state) => {
            state.update({
              activeKakheti: true,
              activeMtsketa: false,
              activeTbilisi: false,
              activeBorjomi: false,
              activeMartvili: false,
              activeKutaisi: false,
              activeGori: false,
              activeKazbegi: false,
              activeImage: 0
            })
          }
        },
        class: {
          show: (element, state) => state.activeKakheti
            ? { opacity: '1', pointerEvents: 'none', '> span': { background: 'rgba(226, 135, 67, 1)'} }
            : { opacity: '.55' }
        },
        text: null
      },

      {
        on: {
          click: (event, element, state) => {
            state.update({
              activeMartvili: true,
              activeKakheti: false,
              activeMtsketa: false,
              activeTbilisi: false,
              activeBorjomi: false,
              activeKutaisi: false,
              activeGori: false,
              activeKazbegi: false,
              activeImage: 0
            })
          }
        },
        class: {
          show: (element, state) => state.activeMartvili
            ? { opacity: '1', pointerEvents: 'none', '> span': { background: 'rgba(226, 135, 67, 1)'} }
            : { opacity: '.55' }
        },
        text: null
      },

      {
        on: {
          click: (event, element, state) => {
            state.update({
              activeKutaisi: true,
              activeMartvili: false,
              activeKakheti: false,
              activeMtsketa: false,
              activeTbilisi: false,
              activeBorjomi: false,
              activeGori: false,
              activeKazbegi: false,
              activeImage: 0
            })
          }
        },
        class: {
          show: (element, state) => state.activeKutaisi
            ? { opacity: '1', pointerEvents: 'none', '> span': { background: 'rgba(226, 135, 67, 1)'} }
            : { opacity: '.55' }
        },
        text: null
      },

      {
        on: {
          click: (event, element, state) => {
            state.update({
              activeGori: true,
              activeKutaisi: false,
              activeMartvili: false,
              activeKakheti: false,
              activeMtsketa: false,
              activeTbilisi: false,
              activeBorjomi: false,
              activeKazbegi: false,
              activeImage: 0
            })
          }
        },
        class: {
          show: (element, state) => state.activeGori
            ? { opacity: '1', pointerEvents: 'none', '> span': { background: 'rgba(226, 135, 67, 1)'} }
            : { opacity: '.55' }
        },
        text: null
      },

      {
        on: {
          click: (event, element, state) => {
            state.update({
              activeKazbegi: true,
              activeGori: false,
              activeKutaisi: false,
              activeMartvili: false,
              activeKakheti: false,
              activeMtsketa: false,
              activeTbilisi: false,
              activeBorjomi: false,
              activeImage: 0
            })
          }
        },
        class: {
          show: (element, state) => state.activeKazbegi
            ? { opacity: '1', pointerEvents: 'none', '> span': { background: 'rgba(226, 135, 67, 1)'} }
            : { opacity: '.55' }
        },
        text: null
      }
    ]
  }
}