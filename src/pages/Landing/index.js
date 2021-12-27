'use strict'
import { Block, Img, Flex, Link, Text } from '@rackai/symbols'

import { movingDown, movingUp } from '../../animations'

import { LaninaBanner } from '../../components'
import style, { stylePageLink } from './style'

import BALCONY_JPEG from '../../assets/images/redBrick/livingroom.jpg'
import COVER_JPG from '../../assets/images/cover.jpg'

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
  proto: Text
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
  proto: Block,
  props: {
    flexAlign: 'center space-betwenn'
  },
  class: [style],
  style: {
    '> a:last-child:hover a:first-child': {
      display: 'none'
    }
  },
  state: {
    style: { filter: 'blur(0%)' }
  },
  sololaki: {
    proto: [Block, Flex, Link],
    image: {
      style: {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .9)), url(' + COVER_JPG + ')',
        '&:hover': {
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .7)), url(' + COVER_JPG + ')',
          boxShadow: 'inset -75px 0px 75px 0px rgba(0, 0, 0, .4)'
        }
      }
    },
    props: {
      href: '/Sololaki',
      color: 'white'
    }
  },

  headingSololaki: {
    tag: 'h6',
    proto: heading,
    props: {
      text: 'sololaki'
    },
    style: {
      left: `${100 / 16}em`,
      top: `100px`
    }
  },

  rustaveli: {
    proto: [Block, Link],
    style: {
      borderLeft: '0px solid rgba(0, 0, 0, 0)',
      '&:hover ~ span': { opacity: 1 }
      // '&:hover': {
      //   borderLeft: '2px solid rgba(165, 125, 2, .3)'
      // }
    },
    // on: {
    //   mouseover: (ev, el, state) => {
    //     el.parent.sololaki.update({ style: { filter: 'blur(2px)' } })
    //     console.log(el.parent.sololaki.style)
    //   }
    // },
    image: {
      style: {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .9)), url(' + BALCONY_JPEG + ')',
        '&:hover': {
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .7)), url(' + BALCONY_JPEG + ')',
          // borderLeft: '5px solid rgba(0, 0, 0, .5)',
          boxShadow: 'inset 75px 0px 75px 0px rgba(0, 0, 0, .4)'
        }
      }
    }
  },
  headingRustaveli: {
    tag: 'h6',
    proto: heading,
    props: { text: 'rustaveli' },
    style: {
      right: `${100 / 16}em`,
      bottom: `100px`
    }
  },

  laninaBanner: {
    proto: LaninaBanner
  },
  span: {
    proto: underConstruction,
    style: {
      opacity: 0,
      transition: 'opacity .5s ease-in-out'
    }
  }
}
