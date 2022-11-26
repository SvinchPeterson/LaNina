'use strict'

import { Flex, Button, Img } from 'smbls'

import { tbilisiArticle } from './articles'

import CLOSE_PNG from '../../../assets/icons/closeBlack.png'
import LOGO_PNG from '../../../assets/icons/logoBlack.png'

const props = {
  align: 'center center',
  position: 'absolute',
  boxSize: '100% 100%',
  background: 'black .5',
  zIndex: '200',
  top: '0',
  left: '0',
  flow: 'column',
  style: {
    backdropFilter: 'blur(4px)'
  },

  articles: {
    background: 'rgba(229, 249, 252, 1)',
    padding: 'B',
    boxSize: '80% 80%',
    flow: 'column',
    gap: 'C',
    header: {
      align: 'center space-between',
      logo: {
        src: LOGO_PNG,
        boxSize: 'C '
      },

      close: {
        background: 'rgba(229, 249, 252, 1)',
        icon: {
          src: CLOSE_PNG,
          boxSize: 'A2 A2'
        }
      }
    },

    content: {
      // position: 'relative',
      zIndex: '100',
      alignSelf: 'center'
    }
  }
}

export const descriptionsContainer = {
  extend: Flex,
  props,

  class: {
    show: (element, state) => state.activeFullDescription
      ? {
        display: 'flex'
      }
      : {
        display: 'none'
      }
  },

  articles: {
    extend: Flex,
    header: {
      extend: Flex,
      logo: { extend: Img },
      close: {
        extend: Button,
        on: {
          click: (event, element, state) => {
            state.update({ activeFullDescription: false })
          }
        },
        icon: { extend: Img }
      }
    },
    content: {
      tbilisiArticle
    }
  }
}
