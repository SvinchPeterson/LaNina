'use strict'
import { Block, Img, Flex, Link, Text } from '@rackai/symbols'

import { movingDown, movingUp, fadeUp } from '../../animations'

import { LocationHeading, LaninaBanner } from '../../components'
import style, { stylePageLink } from './style'

import BALCONY_JPEG from '../../assets/images/redBrick/livingroom.jpg'

import Logo from '../../assets/logoCream.png'

//   //   // if: (el, s) => (el.key == s.activeGallery),
//   //   // class: {
//   //   //   isVisible: (el, s) => el.key == s.activeGallery ? ({ block }) : ({ none })
//   //   // },
//   //   // on: {
//   //   //   click: (event, el, s) => {
//   //   //     s.update({ activeGallery: s.activeGallery + 1 })
//   //   //   }
//   //   // }
//   animateOnLoad: (el, s) => !s.isLoaded ? ({ display: 'none' }) : null

export const logo = {
  proto: Img,
  props: { src: Logo },
  style: {
    width: '120px',
    height: '150px',
    opacity: '.65'
  }
}

const heading = {
  tag: 'h6',
  proto: Text,
  style: {
    // position: 'absolute',
    position: 'fixed',
    // right: 0,
    zIndex: 60,
    color: 'rgba(243, 231, 219, .65)',
    pointerEvents: 'none',
    writingMode: 'vertical-rl',
    textOrientation: 'upright',
    textTransform: 'uppercase',
    fontSize: `${12 / 16}em`,
    letterSpacing: '6px',
    fontWeight: 'normal',
    transition: 'all .7s ease-in-out'
    // background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .2))'
  },
  props: {
    text: ''
  }
}

const underConstruction = {
  tag: 'span',
  proto: Text,
  props: {
    text: 'under construction',
    size: 'B'
  }

}

export default {
  proto: Flex,
  style,
  sololaki: {
    proto: [Block, Flex, Link],
    class: [stylePageLink],
    style: {
      borderRight: '2.5px solid rgba(0, 0, 0, 0)',
      '&:hover': {
        borderRight: '2.5px solid rgba(0, 0, 0, 1)'
      }
      // '&:hover + h6': {
      //   left: '10px'
      // }
    },
    props: {
      href: '/Sololaki',
      color: 'white'
    }
    // image: {
    //   // style: { backgroundPosition: 'center left' }
    // }
  },
  headingSololaki: {
    tag: 'h6',
    proto: heading,
    props: {
      text: 'sololaki'
    },
    style: {
      left: `${100 / 16}em`,
      top: `100px`,
      animationName: movingDown,
      animationDuration: '1.5s'
    }
  },
  rustaveli: {
    // tag: 'a',
    proto: [Block, Flex, Link],
    class: [stylePageLink],
    style: {
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, .95)), url(' + BALCONY_JPEG + ')',
      borderLeft: '2.5px solid rgba(0, 0, 0, 0)',
      '&:hover ~ span': {
        opacity: '.85'
      },
      '&:hover': {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, .65)), url(' + BALCONY_JPEG + ')',
        borderLeft: '2.5px solid rgba(0, 0, 0, 1)'
        // borderRight: 'none',
        // border: '40px solid black'

      },
      '&:hover ~ div': {
        // border: '2px solid yellow',
        // left: '60%'
      }
      // '&:hover + h6': {
      //   right: '10px'
      // }
    }
    // image: { style: { backgroundPosition: 'center right' } }
  },
  headingRustaveli: {
    tag: 'h6',
    proto: heading,
    props: { text: 'rustaveli' },
    style: {
      right: `${100 / 16}em`,
      bottom: `100px`,
      animationName: movingUp,
      animationDuration: '1.5s'
    }
  },

  laninaBanner: {
    proto: LaninaBanner
  },
  span: {
    proto: underConstruction,
    style: {
      opacity: 0,
      transition: 'opacity 1.5s ease-in-out'
    }
  }
}
