'use strict'

import { Flex, Button } from 'smbls'

const props = {
  opacity: '1',
  titles: {
    childProps: {
      fontSize: `${32 / 16}em`,
      fontWeight: '700',
      textTransform: 'capitalize',
      padding: '- - - X1',
      '@maxMobileL': {
        letterSpacing: '-1px'
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
    show: (element, state) => state.activeGalleryPopUp
      ? { opacity: '1' }
      : { opacity: '0' }
  },

  titles: {
    childExtend: {
      tag: 'h2',
      class: {
        show: (element, state) => state.activeGallery === parseInt(element.key)
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
      }
    },
    ...[
      { props: { text: 'tbilisi' }},
      { props: { text: 'borjomi' } },
      { props: { text: 'mtsketa' }},
      { props: { text: 'kakheti' }},
      { props: { text: 'martvili' } },
      { props: { text: 'kutaisi' }},
      { props: { text: 'gori' }},
      { props: { text: 'kazbegi' }}
    ]
  },

  tabs: {
    extend: Flex,
    childExtend: {
      extend: Button,
      span: {},
      on: {
        click: (event, element, state) => {
          state.update({
            activeGallery: parseInt(element.key)
          })
        }
      },
      class: {
        show: (element, state) => state.activeGallery === parseInt(element.key)
          ? { opacity: '1', pointerEvents: 'none', '> span': {background: 'rgba(226, 135, 67, 1)'} }
          : { opacity: '.55' }
      },
    },
    ...[ {},{},{},{},{},{},{},{} ]
  }
}