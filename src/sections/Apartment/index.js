'use strict'
import { Block, Img, Text, Flex, Link } from '@rackai/symbols'

import BALLERINA_JPG from '../../assets/images/ballerina/ballerinaCover.jpg'
import RED_BRICK_JPG from '../../assets/images/redBrick/redBrickCover.jpg'
import YELLOW_COACH_JPG from '../../assets/images/yellowCouch/yellowCouchCover.jpg'
import MEAMA_JPG from '../../assets/images/meama.jpg'
import BALLERINA_ICON from '../../assets/ballerina.png'
import BRICK_ICON from '../../assets/bricks.png'
import COUCH_ICON from '../../assets/couch.png'

import style from './style'

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

const description = {
  proto: [Block, Flex],
  props: {
    padding: '0 0 0 C',
    gap: 'B'
  },
  style: {
    flexFlow: 'column',
    flex: '.8',
    boxSizing: 'border-box'
  },
  h1: {
    proto: Text,
    props: {
      text: 'Ballerina'
    },
    style: { color: '#BDB171', letterSpacing: '2px' }
  },
  p: {
    proto: Text,
    props: {
      text: `In the city of Tbilisi, a forgotten classical building has been transformed into a brand new 5-star hotel.
      In the interior, the traditional designs have been replaced by a minimalist aesthetic, projecting
      the power of imagination during the process of architectural transformation. In the city of Tbilisi, a forgotten classical building has been transformed into a brand new 5-star hotel. In the interior, the traditional designs have been replaced by a minimalist aesthetic, projecting the power of imagination during the process of architectural transformation.`
    },
    style: {
      maxWidth: `${600 / 15}em`,
      marginRight: '-100px',
      color: 'rgba(243, 231, 219, .85)',
      fontFamily: 'Avenir Next'
    }
  }
}

const gallery = {
  style: {
    flex: 1,
    height: `${400 / 16}em`,
    // border: '3px solid lightgreen',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  image: {
    // proto: Img,
    // props: {
    //   src: MEAMA_JPG
    // },
    style: {
      // display: 'block',
      // maxWidth: '100%',
      // maxHeight: '100%',
      width: '100%',
      height: '100%',
      backgroundImage: 'url(' + BALLERINA_JPG + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      boxShadow: 'inset 2px 2px 5px 2px rgba(0, 0, 0, .6)',
      filter: 'brightness(80%) grayscale(50%)'
    }
  }
}
const rooms = {
  proto: [Block, Flex],
  props: {
    gap: 'D',
    padding: '0 0 0 C'
  },
  style: {
    // justifyContent: 'flex-start'
    justifyContent: 'center'
  },

  childProto: {
    proto: Block,
    style: {
      width: `${360 / 16}em`,
      height: `${500 / 16}em`,
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
export default {
  tag: 'section',
  style,
  h4: {
    proto: [Block, Text],
    props: {
      text: 'Apartments',
      padding: 'E 0 C 0'
    }
  },

  content: {
    rooms
  }

  // content: {
  //   proto: [Block, Flex],
  //   props: { gap: 'D1' },
  //   style: {
  //     height: `${1000 / 16}em`,
  //     background: 'rgba(98, 73, 62, 1)',
  //     flexFlow: 'column'
  //   },
  //   apartment: {
  //     proto: [Block, Flex],
  //     props: {
  //       padding: 'C 0 0 0',
  //       gap: 'C'
  //     },
  //     style: {
  //       justifyContent: 'space-between',
  //       paddingTop: `${80 / 16}em`
  //     },

  //     description,
  //     gallery
  //   },
  //   rooms
  // }
}
