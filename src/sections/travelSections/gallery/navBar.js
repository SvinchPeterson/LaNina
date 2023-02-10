'use strict'

import { Navbar } from '../../../components'

const props = {
  height: '100%',
  flow: 'column',
  color: 'white',
  gap: 'Z',
  alignSelf: 'center',
  padding: '- B - -',
  align: 'flex-end center',
  border: 'solid, white .35',
  borderWidth: '0 .5px 0 0',
  zIndex: '30',
  style: { },
  childProps: {
    textAlign: 'right',
    fontWeight: '400',
    fontSize: `${12 / 16}em`,
    textTransform: 'uppercase',
    letterSpacing: '2px',
    cursor: 'pointer',
    opacity: '.85',
    ':hover': { opacity: '1' }
  }
}

export const navBar = {
  extend: Navbar,
  props,
  class: {
    show: (element, state) => state.activePopUpGallery
      ? { opacity: '1', transition: 'opacity 1s ease-in-out' }
      : { opacity: '0', transition: 'opacity .5s ease-in-out' }
  },
  ...[
    {
      text: 'tbilisi',
      class: {
        show: (element, state) => state.activeTbilisi
          ? { opacity: '.5', pointerEvents: 'none' }
          : { opacity: '.85' }
      },
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
      }
    },

    {
      text: 'borjomi',
      class: {
        show: (element, state) => state.activeBorjomi
          ? { opacity: '.5', pointerEvents: 'none' }
          : { opacity: '.85' }
      },
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
      }
    },

    {
      text: 'mtsketa',
      class: {
        show: (element, state) => state.activeMtsketa
          ? { opacity: '.5', pointerEvents: 'none' }
          : { opacity: '.85' }
      },
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
      }
    },

    {
      text: 'kakheti',
      class: {
        show: (element, state) => state.activeKakheti
          ? { opacity: '.5', pointerEvents: 'none' }
          : { opacity: '.85' }
      },
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
      }
    },

    {
      text: 'martvili',
      class: {
        show: (element, state) => state.activeMartvili
          ? { opacity: '.5', pointerEvents: 'none' }
          : { opacity: '.85' }
      },
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
      }
    },

    {
      text: 'kutaisi',
      class: {
        show: (element, state) => state.activeKutaisi
          ? { opacity: '.5', pointerEvents: 'none' }
          : { opacity: '.85' }
      },
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
      }
    },

    {
      text: 'gori',
      class: {
        show: (element, state) => state.activeGori
          ? { opacity: '.5', pointerEvents: 'none' }
          : { opacity: '.85' }
      },
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
      }
    },

    {
      text: 'kazbegi',
      class: {
        show: (element, state) => state.activeKazbegi
          ? { opacity: '.5', pointerEvents: 'none' }
          : { opacity: '.85' }
      },
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
      }
    }
  ]
}
