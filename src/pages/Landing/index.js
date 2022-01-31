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
        // marginRight: '30px',
        // borderRight: '5px solid brown',
        '& > div > div': {
          backgroundImage: 'url(' + SOLOLAKI_JPG + ')'
          // backgroundPosition: 'top right'
        },
        '& > span': { opacity: 1 }
        // '&:hover > h6': {
        //   width: '160px'
        // }
      }

    },
    imageContainer: {
      image: {
        style: {
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(' + SOLOLAKI_JPG + ')'
        }
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
        // marginLeft: '30px',
        '> div > div': {
          backgroundImage: 'url(' + RUSTAVELI_JPG + ')'
          // backgroundPosition: 'top left'
        },
        '&:hover ~ span': {
          opacity: 1

        }
        // '&:hover > h6': {
        //   width: '160px'
        // }
      }
    },
    imageContainer: {
      image: {
        style: {
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(' + RUSTAVELI_JPG + ')'

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
