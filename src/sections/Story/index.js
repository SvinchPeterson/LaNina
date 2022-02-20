'use strict'
import { Block } from '@rackai/symbols'
import WINE_JPG from '../../assets/images/wine.jpg'
import GREEN_LANINA_JPG from '../../assets/images/greenLanina.jpg'

import { laninaSololaki, wine } from '../../texts'

import style, {} from './style'

const storySection = {
  tag: 'section',
  proto: Block,
  props: {
    flexFlow: 'row',
    padding: 'F 0 G 0'
  },
  image: {
    tag: 'span',
    proto: [Block]
  },

  p: {
    proto: Block,
    span: {}
  }
}

export default {
  tag: 'article',
  proto: Block,
  props: {
    flexFlow: 'column',
    gap: '0'
  },
  style,
  childProto: {
    proto: storySection
  },
  ...[
    {
      attr: { id: 'hotel' },
      image: {
        style: {
          backgroundImage: 'url(' + GREEN_LANINA_JPG + ')',
          backgroundSize: 'contain',
          backgroundPosition: 'left bottom',
          transform: 'scale(.95)'
        }
      },
      p: {
        style: {
          position: 'relative'
        },
        span: {
          proto: laninaSololaki,
          style: {
            position: 'absolute',
            top: 0,
            left: '-400px',
            padding: '100px'
          }
        }
      }
    },

    {
      attr: { id: 'wine' },
      image: {
        style: {
          backgroundImage: 'url(' + WINE_JPG + ')',
          backgroundPosition: 'center center',
          transform: 'scale(1.4)'
        }
      },
      p: {
        style: {
          position: 'absolute',
          width: '100%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '100px',
          boxShadow: '0px 0px 100px 20px rgba(243, 231, 219, .2)',
          background: 'linear-gradient(rgba(243, 231, 219, 1), rgba(243, 231, 219, 1))'
        },
        span: {
          proto: wine,
          style: {
            display: 'block',
            maxWidth: '650px',
            margin: '0 auto'
          }
        }
      }
    }
  ]
}
