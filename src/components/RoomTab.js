'use strict'

import { Link, Img, Flex } from 'smbls'

export const props = {
  height: '',
  width: 'G',
  position: 'relative',
  overflow: 'hidden',
  flow: 'column',
  align: 'center center',
  padding: 'E -',
  gap: 'B1',
  round: 'F',
  flex: 1,
  cursor: 'pointer',
  boxSizing: 'border-box',
  color: 'cream',
  '@minTabletL': {
    transition: 'flex 1s ease',
    ':hover': { flex: '3'},
    ':hover > p': {
        opacity: '1',
        letterSpacing: '.5px',
        transition: 'opacity .55s ease-in-out'
    },
    ':hover > h2': {
      opacity: '1',
      letterSpacing: '-2px',
      transition: 'opacity .8s ease-in-out, letter-spacing .85s ease-in-out, transform .85s ease-in-out',
      transform: 'scale(1)'
    },
  },
  '@maxTabletL': {
    minHeight: 'H',
    padding: 'D -',
    align: 'center space-between'
  },
  '@maxMobileL': {
    minHeight: 'fit-content',
    width: '90%'
  },

  imageContainer: {
    boxSize: '100% 100%',
    position: 'absolute',
    overflow: 'hidden',
    zIndex: '1',
    top: '0',
    left: '0',
    style: { backgroundRepeat: 'no-repeat' },
    image: {
      minWidth: '100%',
      minHeight: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      round: 'F',
      '@minTabletL': { style: { backgroundAttachment: 'fixed' } }
    }
  },

  icon: {
    zIndex: '2',
    boxSize: 'A2 A2'
  },
  p: {
    fontSize: `${15 / 16}em`,
    zIndex: '2',
    textAlign: 'center',
    width: 'F1',
    fontWeight: '400',
    opacity: '0',
    letterSpacing: `${0.5 / 15}em`,
    style: {fontStyle: 'italic'},
    '@maxTabletL': {display: 'none'}
  },
  title: {
    zIndex: '2',
    fontSize: 'D',
    textTransform: 'capitalize',
    whiteSpace: 'nowrap',
    opacity: '0',
    transform: 'scale(.9)',
    '@maxTabletL': {
      opacity: '1',
      letterSpacing: '-2px',
      fontSize: 'E'
    //  display: 'none'
    }
  }
}

export const RoomTab = {
  extend: [Link, Flex],
  props,

  on: {
    click: (event, element, state) => {
      state.update({ activeTab: element.key, back: true })
    }
  },

  imageContainer: {
    extend: Flex,
    image: {}
  },
  icon: { extend: Img },
  p: {},
  title: { tag: 'h2' }
}
