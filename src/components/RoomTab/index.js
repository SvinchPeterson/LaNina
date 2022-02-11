'use strict'

import { Block, Link } from '@rackai/symbols'

import { ballerina } from '../../texts'

import style from './style'

import BALLERINA_COVER_IMG from '../../assets/images/ballerina/ballerinaCovers.jpg'
import REDBRICK_COVER_IMG from '../../assets/images/redBrick/redBrickCovers.jpg'
import YELLOWCOUCH_COVER_IMG from '../../assets/images/yellowCouch/yellowCouchCovers.jpg'

const roomTab = {
  proto: [Link, Block],
  style,
  // state: {
  //   activeImage: 0
  // },

  on: {
    click: (event, element, state) => {
      state.update({ active: element.key })
      element.parent.parent.rooms.update({
        style: {
          minHeight: '700px'
          // animationName: heightGallery,
          // animationDuration: '4s',
          // animationDelay: '1s'
        }
      })
    }
  },

  class: {
    show: (element, state) => state.active === element.key ? {
      flex: '3 !important',
      transform: 'scale(1.2)',
      '> div': {
        backgroundAttachment: 'fixed !important',
        filter: 'brightness(20%) grayscale(50%)'
      },
      '> p': {
        opacity: 1
      }
    }
      : { flex: 1 }
  },
  image: {
    style: {
    }
  },
  p: {
    proto: ballerina
  }
}

export const tabBallerina = {
  proto: roomTab,
  props: {
    href: '#ballerina'
  },

  style: {
    '&::after': {
      content: '"balerina"'
    }
  },

  image: {
    style: { backgroundImage: 'url(' + BALLERINA_COVER_IMG + ')' }
  }
}

export const tabRedBrick = {
  proto: roomTab,
  props: {
    href: '#redBrick'
  },
  style: {
    '&::after': {
      content: '"Red Brick"'
    }
  },

  image: {
    style: { backgroundImage: 'url(' + REDBRICK_COVER_IMG + ')' }
  }
}

export const tabYellowCouch = {
  proto: roomTab,
  props: {
    href: '#yellowCouch'
  },
  style: {
    flex: 1,
    '&::after': {
      content: '"yellow couch"'
    }
  },

  image: {
    style: { backgroundImage: 'url(' + YELLOWCOUCH_COVER_IMG + ')' }
  }
}
