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

} from '../articles'

import CLOSE_PNG from '../../../../assets/icons/closeBlack.png'
import LOGO_PNG from '../../../../assets/icons/logoBlack.png'

const props = {
  align: 'center center',
  position: 'absolute',
  boxSize: '100% 100%',
  display: 'none',
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
    boxSize: '75% 75%',
    flow: 'column',
    gap: '',
    overflow: 'hidden',
    position: 'relative',
    '@tabletS': { boxSize: '80% 90%' },
    // '@tabletS': { boxSize: '85% 90%' },
    // '@mobileS': { boxSize: '90% 95%' },
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

    logo: {
      src: LOGO_PNG,
      boxSize: 'B1 ',
      position: 'absolute',
      top: 'B',
      left: 'B',
      zIndex: '10'
    },

    close: {
      background: 'transparent',
      boxSize: 'A2 A2',
      position: 'absolute',
      top: 'B',
      right: 'B',
      zIndex: '10',
      icon: {
        src: CLOSE_PNG,
        boxSize: 'A2 A2'
      }
    },

    content: {
      alignSelf: 'center',
      padding: 'D1 B C2 B',
      '@tabletS': { padding: 'D1 B1 C2 B1' },
      style: {
        overflowY: 'auto',
        '::-webkit-scrollbar': { display: 'none' }
      },
      childProps: {
        articleContainer: {
          childProps: {
            paragraphs: {
              childProps: {
                '@mobileM': { fontSize: '15px' }
              }
            },
            list: {
              childProps: {
                '@mobileM': { fontSize: '15px' }
              }
            }
          }
        }
      }
    }
  }
}

export const articlesContainer = {
  extend: Flex,
  props,

  class: {
    show: (element, state) => state.activeArticleContainer
      ? {
        display: 'flex'
      }
      : {
        display: 'none'
      }
  },

  articles: {
    extend: Flex,
    logo: { extend: Img },
    close: {
      extend: Button,
      on: {
        click: (event, element, state) => {
          state.update({
            activeArticleContainer: false,
            activeTbilisiArticle: false,
            activeAnanuriArticle: false,
            activeGoriArticle: false,
            activeKakhetiArticle: false,
            activeCanyonArticle: false,
            activeKutaisiArticle: false,
            activeBorjomiArticle: false,
            activeRabatArticle: false,
            activeMtsketaArticle: false,
            active_3d_Article: false,
            active_4d_Article: false,
            active_5d_Article: false,
            active_8d_Article: false,
            active_10d_Article: false,
            active_Armenia_Article: false,
            activeExclusiveArticle: false,
            activeAdventureArticle: false
          })
        }
      },
      icon: { extend: Img }
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
