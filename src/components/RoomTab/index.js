'use strict'

import { Block, Link, Img, Text } from '@rackai/symbols'

import { ballerina } from '../../texts'

import style, { styleBook, styleParagraph, styleImage } from './style'

import BALLERINA_COVER_IMG from '../../assets/images/ballerina/ballerinaCovers.jpg'
import REDBRICK_COVER_IMG from '../../assets/images/redBrick/redBrickCovers.jpg'
import YELLOWCOUCH_COVER_IMG from '../../assets/images/yellowCouch/yellowCouchCovers.jpg'

import BALLERINA_ICON from '../../assets/dress.png'
import BRICKS_ICON from '../../assets/bricks.png'
import COUCH_ICON from '../../assets/couch.png'

const book = {
  proto: [Link, Text],
  style: styleBook,
  icon: {
    proto: Img
  },
  props: {
    text: 'BOOK'
  }

}

const roomTab = {
  proto: [Link, Block],
  style,
  props: {
    flexAlign: 'center center'
  },
  // state: {
  //   activeImage: 0
  // },

  on: {
    click: (event, element, state) => {
      state.update({ active: element.key })
      element.parent.parent.rooms.update({
        style: {
          minHeight: '700px'
          // animationName: heightGallery,
          // animationDuration: '4s',
          // animationDelay: '1s'
        }
      })
    }
  },

  class: {
    show: (element, state) => state.active === element.key ? {
      flex: '3 !important',
      // transform: 'scale(1.2)',
      zIndex: 60,
      '> div': {
        backgroundAttachment: 'fixed !important',
        filter: 'brightness(20%) grayscale(50%)'
      },
      '> p': {
        opacity: 1
      }
    }
      : {
        flex: 1
      }
  },
  image: {
    style: styleImage
  },
  p: {
    proto: ballerina,
    style: styleParagraph
  },
  book: {
    proto: book
  }
}

export const tabBallerina = {
  proto: roomTab,
  props: {
    href: '#ballerina'
  },

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
  props: {
    href: '#redBrick'
  },
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
  props: {
    href: '#yellowCouch'
  },
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
