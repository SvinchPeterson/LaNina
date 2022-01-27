'use strict'
import { Block } from '@rackai/symbols'

import OLDTBILISI_JEPG from '../../assets/images/cover.jpg'
import WINE_JPG from '../../assets/images/wine.jpg'

import { laninaSololaki, wine } from '../../texts'

import style, {} from './style'

const storySection = {
  tag: 'section',
  proto: Block,
  props: {
    flexFlow: 'row'
  },
  style: {
    position: 'relative',
    '&:hover > div > p': {
      opacity: 1,
      transform: 'scale(1)'
    },
    '&:hover > span': {
      transform: 'scale(1.6)'
    }
  },
  image: {
    tag: 'span',
    proto: [Block],
    style: {
      display: 'block',
      backgroundAttachment: 'fixed',
      minHeight: `${700 / 16}em`,
      backgroundRepeat: 'no-repeat',
      filter: 'grayscale(50%) brightness(40%)',
      backgroundSize: 'contain',
      transition: 'all 2s ease-in-out'
    }
  },
  tale: {
    proto: Block,

    style: {
      position: 'absolute',
      top: 0,
      background: 'transparent',
      height: '100%',
      boxSizing: 'border-box',
      width: '100%'
    },

    p: {
      proto: Block,
      // props: { size: 'E' },
      style: {
        // fontFamily: 'Avenir Next',
        fontFamily: 'Bellefair',
        lineHeight: '40px',
        transition: 'all 1s ease-in-out',
        color: 'rgba(255, 249, 235, 1)',
        mixBlendMode: 'difference',
        // opacity: 0,
        // transform: 'scale(.98)',
        fontSize: '26px'
      }
    }
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
    proto: storySection,
    style: { flex: 1 }
  },
  ...[
    {
      image: {
        style: {
          backgroundImage: 'url(' + OLDTBILISI_JEPG + ')',
          flex: 1,
          transform: 'scale(1.45)'
        }
      },
      tale: {
        props: {
          flexAlign: 'center center'
        },
        p: {
          proto: laninaSololaki,
          style: {
            maxWidth: `${700 / 16}em`
            // textAlign: 'center'
          }
        }
      }
    },
    {
      image: {
        style: {
          backgroundImage: 'url(' + WINE_JPG + ')',
          backgroundPosition: 'center center',
          flex: 2,
          transform: 'scale(1.5)'
        }
      },
      tale: {
        props: {
          flexAlign: 'center flex-end'
        },
        style: {
          paddingRight: `${100 / 16}em`
        },
        p: {
          proto: wine,
          style: { maxWidth: `${600 / 16}em` }
        }
      }
    }
  ]
}
