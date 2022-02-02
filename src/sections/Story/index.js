'use strict'
import { Block, Text } from '@rackai/symbols'

import OLDTBILISI_JEPG from '../../assets/images/cover.jpg'
import WINE_JPG from '../../assets/images/wine.jpg'
import GREEN_LANINA_JPG from '../../assets/images/greenLanina.jpg'

import { laninaSololaki, wine } from '../../texts'

import style, {} from './style'

const storySection = {
  tag: 'section',
  proto: Block,
  props: {
    flexFlow: 'row',
    padding: 'G 0 F 0'
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
      image: {
        style: {
          backgroundImage: 'url(' + GREEN_LANINA_JPG + ')',
          backgroundSize: 'contain',
          backgroundPosition: 'left bottom',
          transform: 'scale(1)'
        }
      },
      p: {
        span: {
          proto: laninaSololaki

        }
      }
    }
  ]
}
