'use strict'
import { Block, Text, Flex, Link, Img } from '@rackai/symbols'

import OLDTBILISI_JEPG from '../../assets/images/cover.jpg'
import WINE_JPG from '../../assets/images/wine.jpg'

import { laninaSololaki, wine } from '../../texts'

import style, {} from './style'

const storySection = {
  tag: 'section',
  proto: Block,
  props: {
    flexFlow: 'row',
    padding: '0 D'
  },
  image: {
    tag: 'span',
    proto: [Block],
    style: {
      display: 'block',
      backgroundAttachment: 'fixed',
      minHeight: `${700 / 16}em`,
      backgroundRepeat: 'no-repeat',
      filter: 'grayscale(40%)'
    }
    // class: [styleStoryImage]
  },
  tale: {
    proto: Block,
    props: {
      flexFlow: 'column',
      flexAlign: 'center center'
    },
    h6: {
      proto: Text
    },
    p: {}
  }
}

export default {
  tag: 'article',
  proto: Block,
  props: {
    flexFlow: 'column',
    padding: 'G 0 0 0',
    gap: 'F'
  },
  style,
  childProto: {
    proto: storySection,
    style: { flex: 1 }
  },
  ...[
    {
      image: {
        style: {
          flex: 2,
          backgroundImage: 'url(' + OLDTBILISI_JEPG + ')',
          backgroundSize: 'cover',
          boxShadow: 'inset -75px 0px 75px 0px rgba(0, 0, 0, .55)'
        }
      },
      tale: {
        props: {
          padding: '0 0 0 D'
        },
        style: {
          flex: 1
        },
        h6: { text: 'hotel' },
        p: {
          proto: laninaSololaki
        }
      }
    },

    {
      tale: {
        props: {
          padding: '0 D 0 0'
        },
        style: { flex: 2 },
        h6: { text: 'wine' },
        p: {
          proto: wine
        }
      },
      // props: { flexFlow: 'row-reverse' },
      image: {
        style: {
          flex: 1,
          backgroundImage: 'url(' + WINE_JPG + ')',
          backgroundSize: 'contain',
          backgroundPosition: 'right center',
          boxShadow: 'inset 75px 0px 75px 0px rgba(0, 0, 0, .55)'
          // boxShadow: 'inset 10px 0em 70px rgba(0, 0, 0, 2)'
          // boxShadow: 'inset 0px -2px 70px 0px rgba(0, 0, 0, .65)'
        }
      }
    }
  ]
}
