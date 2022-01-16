'use strict'
import { Block, Text, Flex, Link, Img } from '@rackai/symbols'
import { opacity } from '../../animations'

import OLDTBILISI_JEPG from '../../assets/images/cover.jpg'
import WINE_JPG from '../../assets/images/wine.jpg'

import { laninaSololaki, wine } from '../../texts'

import style, {} from './style'

const storySection = {
  tag: 'section',
  proto: Block,
  props: {
    flexFlow: 'row'
    // padding: '0 D'
  },
  style: {
    position: 'relative',
    zIndex: 100,
    '&:hover > div > p': {
      opacity: 1

    },
    '&:hover > span': {
      // backgroundPosition: 'bottom left',
      transform: 'scale(1.7)'
    },
    '&:hover > div': {
      width: '50%',
      // transition: 'all 3s ease-in-out',
      opacity: 1
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
      filter: 'grayscale(50%) brightness(30%)',
      backgroundSize: 'contain',
      transition: 'all 2s ease-in-out',
      '&:hover ~ div > p': {
        opacity: 1

      }
    }
  },
  tale: {
    proto: Block,
    style: {
      position: 'absolute',
      right: 0,
      background: 'linear-gradient(rgba(255, 249, 235, 1), rgba(255, 249, 235, 1))',
      height: '100%',
      width: 0,
      opacity: 0,
      transition: 'all .8s ease-in-out'
      // border: '4px solid red'
    },

    props: {
      flexAlign: 'center center'

    },
    p: {
      style: {
        // fontFamily: 'Avenir Next',
        fontFamily: 'Avenir Next',
        lineHeight: '30px',
        opacity: 0,
        transition: 'all .3s ease-in-out',
        transitionDelay: '.8s'
        // background: 'red'
      }
    }
  }
}

export default {
  tag: 'article',
  proto: Block,
  props: {
    flexFlow: 'column',
    // padding: 'J 0 J 0',
    gap: 'C'
  },
  style,
  childProto: {
    proto: storySection,
    style: { flex: 1 }
  },
  ...[
    {
      // style: {
      //   paddingRight: '100px'
      // },
      image: {
        style: {
          backgroundImage: 'url(' + OLDTBILISI_JEPG + ')',
          flex: 1,
          transform: 'scale(1.5)'
        }
      },
      tale: {
        props: {
          flexAlign: 'center flex-end',
          padding: '0 E'
        },
        style: {
          flex: 1,
          boxSizing: 'border-box'
        },
        p: {
          proto: laninaSololaki,
          style: {
            // maxWidth: `${500 / 16}em`
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
        style: { flex: 1.5 },
        props: {
          flexAlign: 'center flex-start',
          padding: '0 E'
        },
        p: {
          proto: wine
        }
      }
    }
  ]
}
