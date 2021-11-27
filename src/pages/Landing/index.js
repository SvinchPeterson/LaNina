'use strict'
import { Block, Img, Flex, Link } from '@rackai/symbols'

import { movingDown, movingUp, filter, fadeUp } from '../../animations'

import { LocationHeading, LaninaBanner } from '../../components'
import style from './style'

import Logo from '../../assets/logoCream.png'
import COVER_JPG from '../../assets/images/cover.jpg'

export const logo = {
  proto: Img,
  props: { src: Logo },
  style: {
    width: '120px',
    height: '150px',
    opacity: '.65'
  }
}

export default {
  proto: Flex,
  style,
  banner: {
    proto: LaninaBanner,
    style: {
      '> img': {
        animationName: fadeUp,
        animationDuration: '2s'
      },
      '> div': {
        animationName: fadeUp,
        animationDuration: '3s'
      }
    }
  },

  // state: {
  //   activeGallery: 0
  // },

  // class: {
  //   animateOnLoad: (el, s) => !s.isLoaded ? ({ display: 'none' }) : null
  // },

  main: {
    proto: Flex,
    style: {
      flex: 1
    },
    childProto: {
      proto: [Block, Flex, Link],
      style: {
        position: 'relative',
        flex: '.5',
        overflow: 'hidden',
        transition: 'all 1s ease-in-out',
        animationName: filter,
        animationDuration: '6s',
        '&:hover': {
          flex: '2.5',
          '> div': {
            transform: 'scale(1.1)',
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .7)), url(' + COVER_JPG + ')'
          }
        },
        '> div': {
          flex: 1,
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, .95)), url(' + COVER_JPG + ')',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          transition: 'all 1s ease-out',
          transitionDelay: '.05s'
        }
      }
    },
    ...[
      {
        props: {
          href: './Sololaki',
          color: 'white'
        },
        style: { cursor: 'pointer' },
        heading: {
          proto: LocationHeading,
          style: {
            top: 0,
            left: `${60 / 14}em`,
            animationName: movingDown,
            animationDuration: '2s',
            animationTimingFunction: 'ease-in-out'
          }
        },
        image: {
          style: { backgroundPosition: 'center left' }
        }
        // if: (el, s) => (el.key == s.activeGallery),
        // class: {
        //   isVisible: (el, s) => el.key == s.activeGallery ? ({ block }) : ({ none })
        // },
        // on: {
        //   click: (event, el, s) => {
        //     s.update({ activeGallery: s.activeGallery + 1 })
        //   }
        // }
      },
      {
        heading: {
          proto: LocationHeading,
          props: {
            text: 'RUSTAVELI'
          },
          style: {
            bottom: 0,
            right: `${60 / 14}em`,
            animationName: movingUp,
            animationDuration: '2s',
            animationTimingFunction: 'ease-in-out'
          }
        },
        image: { style: { backgroundPosition: 'center right' } }
      }
    ]
  }
}
