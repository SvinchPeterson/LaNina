'use strict'

import { Block, Link, Img, Text } from '@rackai/symbols'

import { ballerina } from '../../texts'

import style, { styleBook, styleParagraph, styleImage } from './style'

import { roomsContainer } from '../../animations'

import BALLERINA_COVER_IMG from '../../assets/images/ballerina/ballerinaCovers.jpg'
import REDBRICK_COVER_IMG from '../../assets/images/redBrick/redBrickCovers.jpg'
import YELLOWCOUCH_COVER_IMG from '../../assets/images/yellowCouch/yellowCouchCovers.jpg'

import BALLERINA_ICON from '../../assets/dress.png'
import BRICKS_ICON from '../../assets/bricks.png'
import COUCH_ICON from '../../assets/couch.png'

const book = {
  proto: [Link, Text, Block],
  style: styleBook,
  props: {
    flexAlign: 'center center',
    size: 'A',
    text: 'BOOK',
    gap: 'A',
    padding: 'Z2 B1',
    target: '_blank'
  },

  icon: {
    proto: Img
  }
}

const roomTab = {
  proto: [Link, Block],
  style,
  props: {
    flexAlign: 'center center',
    padding: 'C'
  },

  on: {
    click: (event, element, state) => {
      state.update({ activeLink: element.key, offers: true })
      element.parent.parent.rooms.update({
        style: {
          // transitionDelay: '5s',
          // animationName: roomsContainer,
          // animationDuration: '3s',
          // animationTimingFunction: 'ease-in-out',
          minHeight: `${800 / 16}em`
        }
      })
      console.log(state.activeImage)
    }
  },

  class: {
    show: (element, state) => state.activeLink === element.key ? {
      flex: '3 !important',
      zIndex: 60,
      '> div': {
        backgroundAttachment: 'fixed !important',
        filter: 'brightness(20%) grayscale(50%)'
      },
      '> p': { opacity: 1 },
      '> a': { opacity: '.85' }
    }
      : {
        flex: 1
      }
  },

  image: {},
  p: {
    proto: ballerina
  },
  book: { proto: book }
}

export const tabBallerina = {
  proto: roomTab,
  props: { href: '#ballerina' },

  style: {
    '&::after': {
      content: '"balerina"'
    }
  },

  image: {
    style: { backgroundImage: 'url(' + BALLERINA_COVER_IMG + ')' }
  },
  p: {},
  book: {
    props: { href: `https://www.airbnb.com/rooms/52732503?source_impression_id=p3_1645550353_mMXc6HH3zziZ95lR` },
    style: { background: 'red' },
    icon: {
      style: {
        width: '20px',
        height: '20px'
      },
      props: {
        src: BALLERINA_ICON
      }
    }
  }
}

export const tabRedBrick = {
  proto: roomTab,
  props: { href: '#redBrick' },
  style: {
    '&::after': {
      content: '"Red Brick"'
    }
  },

  image: {
    style: { backgroundImage: 'url(' + REDBRICK_COVER_IMG + ')' }
  },
  p: {},
  book: {
    props: { href: 'https://www.airbnb.com/rooms/52610522?source_impression_id=p3_1645550412_uPtKLs8OU5g3l%2Fjw' },
    icon: {
      style: {
        width: '25px',
        height: '20px'
      },
      props: {
        src: BRICKS_ICON
      }
    }
  }
}

export const tabYellowCouch = {
  proto: roomTab,
  props: { href: '#yellowCouch' },
  style: {
    flex: 1,
    '&::after': {
      content: '"yellow couch"'
    }
  },

  image: {
    style: { backgroundImage: 'url(' + YELLOWCOUCH_COVER_IMG + ')' }
  },
  p: {},
  book: {
    props: { href: 'https://www.airbnb.com/rooms/52611151?source_impression_id=p3_1645550425_4DUFFaIG0wB3DIEA' },
    icon: {
      style: {
        width: '25px',
        height: '20px'
      },
      props: {
        src: COUCH_ICON
      }
    }
  }
}
