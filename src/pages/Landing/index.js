'use strict'
import { Block, Button, Img, Text, Flex, Shape, Link } from '@rackai/symbols'

import Logo from '../../assets/logoWhite.png'

import style, { stylePages, stylePageCover, styleLaninaBanner, stylePageLink } from './style'

import { move, move2, filter } from '../../animations'

import COVER_JPG from '../../assets/images/cover.jpg'

const logo = {
  proto: Img,
  props: { src: Logo },
  style: {
    width: '120px',
    height: '150px',
    opacity: '.65'
  }
}

const pageLink = {
  proto: [Block, Text, Link],
  props: {
    text: 'SOLOLAKI',
    spacing: 'A'
  },
  class: [stylePageLink],
  style: {
    animationName: move2,
    animationDuration: '3s',
    animationTimingFunction: 'ease-in-out'
  }
}

const pageLink2 = {
  proto: [Block, Text, Link],
  props: {
    text: 'RUSTAVELI',
    spacing: 'A'
  },
  class: [stylePageLink],
  style: {
    bottom: 0,
    right: '60px',
    background: 'linear-gradient(rgba(209, 153, 115, .3), rgba(0, 0, 0, .4))',
    animationName: move,
    animationDuration: '3s',
    animationTimingFunction: 'ease-in-out'
  }
}

const laninaBanner = {
  proto: [Block, Flex],
  class: [styleLaninaBanner],
  props: { gap: 'B' },
  logo,
  heading: {
    h4: {
      proto: Text,
      props: {
        text: 'La Nina'
      }
    },
    span: {
      proto: Text,
      props: {
        text: 'Residence',
        size: 'C'
      }
    }
  }
}

export default {
  style: {
    flex: 1,
    display: 'flex',
    background: 'red'
  },
  laninaBanner,

  main: {
    proto: Flex,
    style: {
      flex: 1
    },
    childProto: {
      proto: [Block, Flex],
      style: {
        position: 'relative',
        flex: '.5',
        overflow: 'hidden',
        transition: 'all 1s ease-in-out',
        animationName: filter,
        animationDuration: '6s',
        '&:hover': {
          flex: '2.5',
          '> div': {
            transform: 'scale(1.1)',
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .8)), url(' + COVER_JPG + ')'
          }
        },
        '> div': {
          flex: 1,
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, .95)), url(' + COVER_JPG + ')',
          backgroundSize: 'cover',
          transition: 'all 1s ease-out',
          transitionDelay: '.05s'
        }
      }
    },
    ...[
      {
        pageLink,
        image: {
          style: { backgroundPosition: 'center left' }
        }
      },
      {
        pageLink2,
        image: { style: { backgroundPosition: 'center right' } }

      }
    ]
  }
}
