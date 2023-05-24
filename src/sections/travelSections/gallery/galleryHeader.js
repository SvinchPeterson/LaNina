'use strict'

import { Flex, Button } from 'smbls'

const props = {
  '@minTabletS': { display: 'none'},
  flow: 'column',
  opacity: '1',
  boxSize: '- 100%',
  align: 'flex-end center',
  overflow: 'hidden',
  minHeight: 'E1',
  padding: 'C - - -',
  '@maxHeightN': {
    minHeight: 'E',
    padding: 'A1 - - -'
  },

  titles: {
    position: 'relative',
    alignSelf: 'flex-start',
    height:`${40 / 16}em`,
    overflow: 'hidden',
    minWidth: '100%',
    border: 'solid, cream .35',
    borderWidth: '0 0 .55px 0',
    padding: '- - - A',
    '@maxMobileM': {  padding: '- - - Y1' },

    childProps: {
      fontSize: `${32 / 16}em`,
      fontWeight: '700',
      textTransform: 'capitalize',
      position: 'absolute',
      // left: 'X',
      color: 'cream',
      whiteSpace: 'nowrap',
      lineHeight: `${22 / 32}em`,
      transition: 'bottom .65s ease-in-out, opacity .65s ease-in-out, transform .65s ease-in-out',
      letterSpacing: `${-1 / 32}em`,
      span: { fontWeight: '700' }
    }
  },

  tabs: {
    padding: 'A Z - -',
    minWidth: '100%',
    align: 'center flex-end',
    '@maxMobileL': {
      align: 'center space-between',
      padding: 'A 0 - -',
    },
    childProps: {
      background: 'transparent',
      padding: 'Z1 A',
      '@maxMobileL': { padding: 'Z1 Z1' },
      '@maxMobileS': { padding: 'Z Y2' },
      childProps: {
        display: 'block',
        boxSize: 'Y B',
        background: 'cream',
        round: 'C',
        '@maxMobileL': { boxSize: 'X1 B1' },
        '@maxMobileS': { boxSize: 'X A1' }
      }
    }
  }
}

export const galleryHeader = {
  extend: Flex,
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