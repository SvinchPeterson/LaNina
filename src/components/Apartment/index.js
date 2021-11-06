'use strict'
import { Block, Img, Text, Flex, Link } from '@rackai/symbols'

import BALLERINA_JPG from '../../assets/images/ballerina.jpg'
import RED_BRICK_JPG from '../../assets/images/redBrick.jpg'
import YELLOW_COACH_JPG from '../../assets/images/yellowCoach.jpg'
import MEAMA_JPG from '../../assets/images/meama.jpg'

import style from './style'

const description = {
  proto: [Block, Flex],
  props: {
    spacing: '0 0 0 C',
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
    style: { color: '#BDB171' }
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

export default {
  tag: 'section',
  style,
  h4: {
    proto: [Block, Text],
    props: {
      text: 'Apartments',
      spacing: 'E 0 B 0'
    }
  },

  content: {
    proto: [Block, Flex],
    props: { gap: 'D1' },
    style: {
      height: `${1000 / 16}em`,
      background: 'rgba(98, 73, 62, 1)',
      flexFlow: 'column'
    },
    apartment: {
      proto: [Block, Flex],
      props: {
        spacing: 'C 0 0 0',
        gap: 'C'
      },
      style: {
        justifyContent: 'space-between',
        paddingTop: `${80 / 16}em`
      },

      description,
      gallery

    },
    rooms: {
      proto: [Block, Flex],
      props: {
        gap: 'D',
        spacing: '0 0 0 C'
      },
      style: {
        justifyContent: 'flex-start'
      },

      childProto: {
        proto: Block,
        style: {
          width: `${260 / 16}em`,
          height: `${320 / 16}em`,
          backgroundSize: 'cover',
          filter: 'brightness(50%) grayscale(100%)',
          cursor: 'pointer',
          boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, .4)'
          // backgroundAttachment: 'fixed'
        }
      },
      ...[
        { style: { backgroundImage: 'url(' + BALLERINA_JPG + ')' } },
        { style: { backgroundImage: 'url(' + RED_BRICK_JPG + ')' } },
        { style: { backgroundImage: 'url(' + YELLOW_COACH_JPG + ')' } }
      ]
    }
  }
}
