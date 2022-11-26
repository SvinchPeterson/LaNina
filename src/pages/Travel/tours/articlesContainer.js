'use strict'

import { Flex, Button, Img } from 'smbls'

import {
  tbilisiArticle,
  ananuriArticle,
  goriArticle,
  borjomiArticle,
  qutaisiArticle,
  kakhetiArticle,
  mtsketaArticle,
  rabatiArticle,
  canyonArticle,
  caucasusArticle,
  $2n3dArticle,
  $4n5dArticle,
  $3n4dArticle,
  $7n18dArticle,
  $9n10dArticle,
  exclusiveArticle,
  adventureArticle

} from './articles'

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
    boxSize: '85% 70%',
    flow: 'column',
    gap: '',
    overflow: 'hidden',
    position: 'relative',
    '@tabletM': { boxSize: '85% 85%' },
    '@tabletS': { boxSize: '85% 90%' },
    '@mobileS': { boxSize: '90% 95%' },
    ':before': {
      content: '""',
      position: 'absolute',
      boxSize: 'E 100%',
      background: 'linear-gradient(to bottom,  rgba(229, 249, 252, 1) 0%,rgba(229, 249, 252, 0)100%)',
      top: '0',
      left: '0',
      zIndex: '2'
    },
    ':after': {
      content: '""',
      position: 'absolute',
      boxSize: 'E 100%',
      background: 'linear-gradient(to bottom, rgba(229, 249, 252, 0) 0%,rgba(229, 249, 252, 1) 100%)',
      bottom: '0',
      left: '0'
    },

    header: {
      align: 'center space-between',
      zIndex: '3',
      position: 'absolute',
      padding: 'B B',
      width: '100%',
      top: '0',
      left: '0',
      style: { backdropFilter: 'blur(1px)' },
      logo: {
        src: LOGO_PNG,
        boxSize: 'B1 '
      },

      close: {
        background: 'rgba(229, 249, 252, 1)',
        boxSize: 'A2 A2',
        icon: {
          src: CLOSE_PNG,
          boxSize: 'A2 A2'
        }
      }
    },

    content: {
      alignSelf: 'center',
      padding: 'D1 C C2 C',
      '@mobileS': { padding: 'D1 A - A' },
      style: {
        overflowY: 'auto',
        '::-webkit-scrollbar': { display: 'none' }
      }
    }
  }
}

export const articlesContainer = {
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
            state.update({
              activeFullDescription: false,
              activeTbilisiDescripion: false,
              activeAnanuriDescripion: false,
              activeGoriDescripion: false,
              activeKakhetiDescripion: false,
              activeCanyonDescripion: false,
              activeKutaisiDescripion: false,
              activeBorjomiDescripion: false,
              activeRabatDescription: false,
              activeMtsketaDescription: false,
              active_3d_Description: false,
              active_4d_Description: false,
              active_5d_Description: false,
              active_8d_Description: false,
              active_10d_Description: false,
              active_Armenia_Description: false,
              activeExclusiveDescription: false,
              activeAdventureDescription: false
            })
          }
        },
        icon: { extend: Img }
      }
    },
    content: {
      tbilisiArticle,
      ananuriArticle,
      goriArticle,
      borjomiArticle,
      qutaisiArticle,
      kakhetiArticle,
      mtsketaArticle,
      rabatiArticle,
      canyonArticle,
      caucasusArticle,
      $2n3dArticle,
      $4n5dArticle,
      $3n4dArticle,
      $7n18dArticle,
      $9n10dArticle,
      exclusiveArticle,
      adventureArticle
    }
  }
}
