'use strict'

import { Block, Img, Flex } from '@rackai/symbols'

import BALLERINA_JPG from '../../assets/images/ballerina/ballerinaCover.jpg'
import RED_BRICK_JPG from '../../assets/images/redBrick/redBrickCover.jpg'
import YELLOW_COACH_JPG from '../../assets/images/yellowCouch/yellowCouchCover.jpg'
import BALLERINA_ICON from '../../assets/ballerina.png'
import BRICK_ICON from '../../assets/bricks.png'
import COUCH_ICON from '../../assets/couch.png'

const roomIcon = {
  proto: Img,
  style: {
    width: '30px',
    height: '30px',
    padding: '14px',
    background: 'rgba(189, 177, 113, .6)',
    // background: 'rgba(255, 255, 255, .2)',
    // border: '2px solid rgba(189, 177, 113, .6)',
    position: 'absolute',
    opacity: 0,
    transition: 'all .3s ease-in-out'
  }
}

export const room = {
  proto: Block,
  style: {
    width: `${320 / 16}em`,
    height: `${400 / 16}em`,
    backgroundSize: 'cover',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    transition: 'all .3s ease-in-out',
    '&:hover': {
      boxShadow: 'inset 1px 1px 5px 1px rgba(0, 0, 0, .4)',
      '> img:last-child': { opacity: 1 },
      '> img:first-child': {
        transform: 'scale(.92)',
        boxShadow: 'none',
        filter: 'grayscale(100%) brightness(30%)'
      }
    }
  },
  img: {
    proto: Img,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'grayscale(100%) brightness(50%)',
      transition: 'all .3s ease-in-out',
      boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, .4)'
    }
  },
  icon: { proto: roomIcon }

}

export default {
  proto: [Block, Flex],
  props: {
    gap: 'D'
  },
  style: {
    justifyContent: 'center'
  },

  childProto: {
    proto: Block,
    style: {
      width: `${320 / 16}em`,
      height: `${400 / 16}em`,
      backgroundSize: 'cover',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      transition: 'all .3s ease-in-out',
      '&:hover': {
        boxShadow: 'inset 1px 1px 5px 1px rgba(0, 0, 0, .4)',
        '> img:last-child': { opacity: 1 },
        '> img:first-child': {
          transform: 'scale(.92)',
          boxShadow: 'none',
          filter: 'grayscale(100%) brightness(30%)'
        }
      }
    },
    img: {
      proto: Img,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'grayscale(100%) brightness(50%)',
        transition: 'all .3s ease-in-out',
        boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, .4)'
      }
    },
    icon: { proto: roomIcon }
  },
  ...[
    {
      img: { props: { src: BALLERINA_JPG } },
      icon: { props: { src: BALLERINA_ICON } }

    },
    {
      img: { props: { src: RED_BRICK_JPG } },
      icon: { props: { src: BRICK_ICON } }
    },
    {
      img: { props: { src: YELLOW_COACH_JPG } },
      icon: { props: { src: COUCH_ICON } }
    }
  ]
}
