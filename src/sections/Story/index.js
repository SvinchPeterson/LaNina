'use strict'
import { Block } from '@rackai/symbols'

import OLDTBILISI_JEPG from '../../assets/images/cover.jpg'
import WINE_JPG from '../../assets/images/wine.jpg'
import GREEN_LANINA_JPG from '../../assets/images/greenLanina.jpg'

import { laninaSololaki, wine } from '../../texts'

import style, {} from './style'

const storySection = {
  tag: 'section',
  proto: Block,
  props: {
    flexFlow: 'row'
  },
  image: {
    tag: 'span',
    proto: [Block]
  },

  p: {
    proto: Block
  }
}

export default {
  tag: 'article',
  proto: Block,
  props: {
    flexFlow: 'column',
    gap: 'C'
  },
  style,
  childProto: {
    proto: storySection
  },
  ...[
    {
      props: {
        padding: 'B'
      },
      image: {
        style: {
          backgroundImage: 'url(' + GREEN_LANINA_JPG + ')'
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
