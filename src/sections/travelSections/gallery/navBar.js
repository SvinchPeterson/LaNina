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
  margin: '-C - - -H',
  zIndex: '30',
  position: 'absolute',
  '@maxMobileL': { display: 'none' },
  ':before': {
    content: '""',
    boxSize: 'D 1px',
    background: 'orange .7',
    alignSelf: 'center',
    margin: '- - A -',
    '@maxTabletL': { boxSize: 'C1 1px' }
  },
  ':after': {
    content: '""',
    boxSize: 'D 1px',
    background: 'orange',
    alignSelf: 'center',
    margin: 'A - - -',
    background: 'orange .7',
    '@maxTabletL': { boxSize: 'C1 1px' }
  },
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
    '@maxTabletS': { fontSize: 'D' },
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

  childExtend: {
    class: {
      show: (element, state) => state.activeGallery === parseInt(element.key)
        ? {
          opacity: '1 !important',
          pointerEvents: 'none',
          transform: 'scale(1.55)',
          padding: `${25 / 40}em 0`,
          letterSpacing: '0',
          color: 'white'
        }
        : { opacity: '.5' }
    },

    on: {
      click: (event, element, state) => {
        state.update({ activeGallery: parseInt(element.key)})
      }
    },
  },
  ...[
    { text: 'tbilisi' },
    { text: 'borjomi' },
    { text: 'mtsketa' },
    { text: 'kakheti' },
    { text: 'martvili' },
    { text: 'kutaisi' },
    { text: 'gori' },
    { text: 'kazbegi' }
  ]
}
