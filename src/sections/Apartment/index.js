'use strict'
import { Block, Img, Text, Flex, Link, Icon } from '@rackai/symbols'

import BALLERINA_JPG from '../../assets/images/ballerina/ballerinaCover.jpg'
import BALLERINA_GALLERY_JPG from '../../assets/images/ballerina/ballerina.jpg'
import RED_BRICK_JPG from '../../assets/images/redBrick/redBrickCover.jpg'
import YELLOW_COACH_JPG from '../../assets/images/yellowCouch/yellowCouchCover.jpg'
import MEAMA_JPG from '../../assets/images/meama.jpg'
import BALLERINA_ICON from '../../assets/ballerina.png'
import BRICK_ICON from '../../assets/bricks.png'
import COUCH_ICON from '../../assets/couch.png'

import CHECK_SVG from '../../assets/tick.png'

import style from './style'

const amenityItem = {
  proto: Block,
  props: { flexAlign: 'center flex-start' },
  icon: {
    proto: Img,
    src: CHECK_SVG

  },
  span: {
    proto: Text,
    props: { text: 'Air condition' }
  }
}

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
      text: `"Ballerina" is a cozy and quite two-bedroom apartment  of 72m2 on high first floor with open terrace,  composed of living room with comfortable sofa bed for 1 person and 2 bedrooms  with King size bed and 2 single beds, private bathroom with shower,  kitchen with a dining area, making the apartment comfortable for 5 people
      Equipped with air-conditioning, smart TV, gas stove, refrigerator, microwave oven, ironing facilities, coffee and tea maker, washing machine, bathroom with shower and toiletries.
      Parking space available in inner yard.`
    },
    style: {
      maxWidth: `${500 / 15}em`,
      marginRight: '-100px',
      color: 'rgba(243, 231, 219, .85)',
      fontFamily: 'Avenir Next'
    }
  },
  amenities: {
    caption: {
      proto: [Block, Text],
      props: {
        text: 'Amenities',
        size: 'D'
      }
    },
    content: {
      childProto: {
        proto: amenityItem
      },
      ...[
        {},
        {}

      ]

    }
  }
}

const gallery = {
  style: {
    flex: 1.5,
    height: `${700 / 16}em`,
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
      backgroundImage: 'url(' + BALLERINA_GALLERY_JPG + ')',
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
    proto: Block,
    props: {
      padding: 'D 0',
      flexFlow: 'column',
      gap: 'E'

    },
    // style: { background: 'radial-gradient(rgba(98, 73, 62, .8), rgba(98, 73, 62, 1) )' },
    style: {
      background: 'radial-gradient(rgba(136, 108, 107, .8), rgba(97, 77, 76, 1))'
    },
    rooms,
    apartment: {
      proto: Block,
      props: {
        flexAlign: 'flex-start flex-start',
        gap: 'D'
      },
      description,
      gallery
    }
  }

  // content: {
  //   proto: [Block, Flex],
  //   props: { gap: 'D1' },
  //   style: {
  //     height: `${1000 / 16}em`,
  // background: 'rgba(98, 73, 62, 1)',
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
