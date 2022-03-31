'use strict'

import { Block, Link, Img, Text } from '@rackai/symbols'

import { ballerina, redBrick, yellowCouch } from '../../texts'

import style, { styleBook } from './style'

import BALLERINA_TAB_IMG from '../../assets/images/sololaki/ballerinaTab.jpg'
import REDBRICK_TAB_IMG from '../../assets/images/sololaki/redBrickTab.jpg'
import YELLOWCOUCH_TAB_IMG from '../../assets/images/sololaki/yellowCouchTab.jpg'
import RETRO_TAB_IMG from '../../assets/images/sololaki/retroTab.jpg'
import GREENFOREST_TAB_IMG from '../../assets/images/sololaki/greenForestTab.jpg'

import BALLERINA_ICON from '../../assets/icons/dress.png'
import BRICKS_ICON from '../../assets/icons/bricks.png'
import COUCH_ICON from '../../assets/icons/couch.png'

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
      state.update({ activeLink: element.key })
      element.parent.parent.parent.rooms.update({
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
    // show2: (element, state) => state.activeTab ? { transform: 'translateX(200px)' } : { transform: 'translateX(-200px)' }
    // show2: (element, state) => state.activeTab === true ? { transform: 'translateX(1000px)' } : { transform: 'translateX(-1000px)' }
  },
  image: {},
  p: {},
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
    style: { backgroundImage: 'url(' + BALLERINA_TAB_IMG + ')' }
  },
  p: {
    proto: ballerina
  },
  book: {
    props: { href: `https://www.airbnb.com/rooms/52732503?source_impression_id=p3_1645550353_mMXc6HH3zziZ95lR` },
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
    style: { backgroundImage: 'url(' + REDBRICK_TAB_IMG + ')' }
  },
  p: { proto: redBrick },
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
    style: { backgroundImage: 'url(' + YELLOWCOUCH_TAB_IMG + ')' }
  },
  p: {
    proto: yellowCouch
  },
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

export const tabRetro = {
  proto: roomTab,
  props: { href: '#retro' },
  style: {
    flex: 1,
    '&::after': {
      content: '"retro"'
    }
  },

  image: {
    style: { backgroundImage: 'url(' + RETRO_TAB_IMG + ')' }
  },
  p: {
    proto: yellowCouch
  },
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

export const tabGreenForest = {
  proto: roomTab,
  props: { href: '#greenForest' },
  style: {
    flex: 1,
    '&::after': {
      content: '"green forest"'
    }
  },

  image: {
    style: { backgroundImage: 'url(' + GREENFOREST_TAB_IMG + ')' }
  },
  p: {
    proto: yellowCouch
  },
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
