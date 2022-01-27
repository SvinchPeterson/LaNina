'use strict'
import { Block, Img, Flex, Link, Text } from '@rackai/symbols'

import { landingBanner } from '../../animations'

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
      '& > h6': {
        right: 0
      },
      '&:hover': {
        '& > div': {
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .5), rgba(0, 0, 0, .8)), url(' + SOLOLAKI_JPG + ')',
          backgroundPosition: 'top right',
          transition: 'all 1.2s ease-in-out'
        },
        // '&:hover ~ div': {
        //   left: '43%'
        // },
        '& > span': { opacity: 1 }
        // '&:hover > h6': {
        //   width: '160px'
        // }
      }

    },
    image: {
      style: {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .8), rgba(0, 0, 0, 1)), url(' + SOLOLAKI_JPG + ')',
        transition: 'all 3s ease-in-out'
      }
    },
    heading: {
      tag: 'h6',
      span: { text: 'SOLOLAKI' }
    },
    props: {
      href: '/Sololaki',
      color: 'white'
    }
  },

  rustaveli: {
    proto: [Block, Link],
    style: {
      '&:hover': {
        '& > div': {
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .7), rgba(0, 0, 0, .9)), url(' + RUSTAVELI_JPG + ')',
          backgroundPosition: 'top left'
        },
        '& ~ span': {
          opacity: 1
        }
        // '&:hover ~ div': {
        //   left: '57%'
        // }
        // '&:hover > h6': {
        //   width: '160px'
        // }
      }
    },
    image: {
      style: {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .8), rgba(0, 0, 0, 1)), url(' + RUSTAVELI_JPG + ')',
        '&:hover': {
        }
      }
    },
    heading: {
      tag: 'h6',
      span: {
        text: 'RUSTAVELI'
      }
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
