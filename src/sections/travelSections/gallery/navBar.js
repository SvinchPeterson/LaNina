'use strict'

import { Navbar } from '../../../components'

const props = {
  height: 'fit-content',
  flow: 'column',
  color: 'white',
  gap: '0',
  alignSelf: 'center',
  padding: '- B - -',
  align: 'flex-end center',
  margin: '-C - - -E',
  zIndex: '30',
  position: 'absolute',
  style: { lineHeight: `${30 / 16}em` },

  childProps: {
    textAlign: 'left',
    fontWeight: '100',
    fontSize: `F`,
    textTransform: 'capitalize',
    letterSpacing: '2px',
    cursor: 'pointer',
    opacity: '.5',
    color: 'cream',
    transition: 'opacity .3s ease-in-out, transform .8s ease-in-out, padding .8s ease-in-out, letter-spacing .8s ease-in-out',
    ':hover': {
      opacity: '.8',
      transform: 'scale(1.35)',
      padding: `${20 / 40}em 0`
    }
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
          ? {
            opacity: '1',
            pointerEvents: 'none',
            transform: 'scale(1.55)',
            padding: `${25 / 40}em 0`,
            letterSpacing: '0'
          }
          : { opacity: '.5' }
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
          ? {
            opacity: '1',
            pointerEvents: 'none',
            transform: 'scale(1.55)',
            padding: `${25 / 40}em 0`,
            letterSpacing: '0'
          }
          : { opacity: '.5' }
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
          ? {
            opacity: '1',
            pointerEvents: 'none',
            transform: 'scale(1.55)',
            padding: `${25 / 40}em 0`,
            letterSpacing: '0'
          }
          : { opacity: '.5' }
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
          ? {
            opacity: '1',
            pointerEvents: 'none',
            transform: 'scale(1.55)',
            padding: `${25 / 40}em 0`,
            letterSpacing: '0'
          }
          : { opacity: '.5' }
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
          ? {
            opacity: '1',
            pointerEvents: 'none',
            transform: 'scale(1.55)',
            padding: `${25 / 40}em 0`,
            letterSpacing: '0'
          }
          : { opacity: '.5' }
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
          ? {
            opacity: '1',
            pointerEvents: 'none',
            transform: 'scale(1.55)',
            padding: `${25 / 40}em 0`,
            letterSpacing: '0'
          }
          : { opacity: '.5' }
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
          ? {
            opacity: '1',
            pointerEvents: 'none',
            transform: 'scale(1.55)',
            padding: `${25 / 40}em 0`,
            letterSpacing: '0'
          }
          : { opacity: '.5' }
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
          ? {
            opacity: '1',
            pointerEvents: 'none',
            transform: 'scale(1.55)',
            padding: `${25 / 40}em 0`,
            letterSpacing: '0'
          }
          : { opacity: '.5' }
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
