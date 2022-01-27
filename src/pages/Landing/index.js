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
    style: {
      borderRight: '0px solid rgba(0, 0, 0, 1)',
      '&:hover': {
        borderRight: '100px solid rgba(0, 0, 0, 1)',
        transition: 'all 1s ease-in-out'
      },
      '&:hover ~ span': { opacity: 1 }
    },
    image: {
      style: {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, .55), rgba(0, 0, 0, .55)), url(' + SOLOLAKI_JPG + ')',
        '&:hover': {
        }
      }
    },
    props: {
      href: '/Sololaki',
      color: 'white'
    }
  },

  rustaveli: {
    proto: [Block, Link],
    style: {
      borderLeft: '0px solid rgba(0, 0, 0, 1)',
      '&:hover': {
        borderLeft: '100px solid rgba(0, 0, 0, 1)',
        transition: 'all 1s ease-in-out'
      },
      '&:hover ~ span': { opacity: 1 }
    },
    image: {
      style: {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, .55), rgba(0, 0, 0, .55)), url(' + RUSTAVELI_JPG + ')',
        '&:hover': {
        }
      }
    }
  }

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
