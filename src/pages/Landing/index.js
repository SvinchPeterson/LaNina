'use strict'
import { Block, Img, Flex, Link, Text } from '@rackai/symbols'

import { LaninaBanner } from '../../components'
import style from './style'

import RUSTAVELI_JPG from '../../assets/images/rustaveli.jpg'
import SOLOLAKI_JPG from '../../assets/images/sololaki.jpg'

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
  sololaki: {
    proto: [Block, Flex, Link],
    image: {
      style: {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, .75)), url(' + SOLOLAKI_JPG + ')',
        // backgroundImage: 'url(' + SOLOLAKI_JPG + ')',
        // background: 'linear-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, .75)), url(' + SOLOLAKI_JPG + ')'
        // backgroundColor: 'linear-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, .75))'
        '&:hover': {
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, .55), rgba(0, 0, 0, .55)), url(' + SOLOLAKI_JPG + ')',
          boxShadow: 'inset -75px 0px 75px 0px rgba(0, 0, 0, .55)'
        }
      }
    },
    props: {
      href: '/Sololaki',
      color: 'white'
    }
  },

  // headingSololaki: {
  //   proto: heading,
  //   props: {
  //     text: 'sololaki'
  //   },
  //   style: {
  //     left: `${100 / 16}em`,
  //     top: `${50 / 16}em`
  //   }
  // },

  rustaveli: {
    proto: [Block, Link],
    style: {
      // borderRight: '1px solid rgba(0, 0, 0, 1)',
      '&:hover': { borderRight: '3px solid rgba(0, 0, 0, 1)' },
      '&:hover ~ span': { opacity: 1 }
    },
    image: {
      style: {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, .9)), url(' + RUSTAVELI_JPG + ')'
        // backgroundImage: 'linear-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, .9)), url(' + RUSTAVELI_JPG + ')'
        // '&:hover': {
        //   backgroundImage: 'linear-gradient(rgba(0, 0, 0, .55), rgba(0, 0, 0, .55)), url(' + RUSTAVELI_JPG + ')',
        //   // borderLeft: '5px solid rgba(0, 0, 0, .5)',
        //   boxShadow: 'inset 75px 0px 75px 0px rgba(0, 0, 0, .55)'
        // }
      }
    }
  }
  // headingRustaveli: {
  //   tag: 'h6',
  //   proto: heading,
  //   props: { text: 'rustaveli' },
  //   style: {
  //     right: `${100 / 16}em`,
  //     bottom: `${200 / 16}em`
  //   }
  // },

  // laninaBanner: {
  //   proto: LaninaBanner
  // },
  // span: {
  //   proto: underConstruction,
  //   style: {
  //     opacity: 0,
  //     transition: 'opacity .5s ease-in-out'
  //   }
  // }
}
