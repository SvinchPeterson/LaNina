'use strict'
import { Block, Img, Flex, Link } from '@rackai/symbols'

import { movingDown, movingUp, filter, fadeUp } from '../../animations'

import { LocationHeading, LaninaBanner } from '../../components'
import style, { stylePageLink } from './style'

import Logo from '../../assets/logoCream.png'

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
      style: stylePageLink
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
