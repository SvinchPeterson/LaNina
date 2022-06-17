'use strict'

import { Box, Link, Img, Text } from '@symbo.ls/symbols'

import { ballerina, redBrick, yellowCouch, greenForest, retro } from '../../texts'

import BALLERINA_JPG from '../../assets/images/ballerina/ballerinaTab.jpg'
import REDBRICK_JPG from '../../assets/images/redBrick/redbrickTab.jpg'
import YELLOWCOUCH_JPG from '../../assets/images/yellowCouch/yellowcouchTab.jpg'
import GREENFOREST_JPG from '../../assets/images/greenForest/greenforestTab.jpg'
import RETRO_JPG from '../../assets/images/retro/retroTab.jpg'

import DRESS_PNG from '../../assets/icons/dress.png'
import BRICKS_PNG from '../../assets/icons/bricks.png'
import SOFA_PNG from '../../assets/icons/sofa.png'
import LEAF_PNG from '../../assets/icons/leaf.png'
import VINYL_PNG from '../../assets/icons/vinyl.png'

import { styleRoomTab, styleParagraph, styleBook } from './style'

const book = {
  proto: [Link, Box],
  class: [styleBook],
  props: {
    flexAlign: 'center center',
    flexFlow: 'row',
    position: 'absolute',
    left: '50%',
    bottom: 'A',
    padding: 'Z A1 Z A1',
    gap: 'Y'
  },
  style: { pointerEvents: 'pointed !important' },
  icon: {
    proto: [Img, Box],
    props: { boxSize: 'Z1 Z1' }
  },
  span: {
    proto: [Text, Box],
    props: {
      text: 'book',
      color: 'cream'
    }
  }
}

const roomTab = {
  proto: [Link, Box],
  props: {
    padding: 'B',
    position: 'relative',
    round: 'X'
  },
  style: styleRoomTab,
  on: {
    click: (event, element, state) => {
      state.update({ activeTab: element.key })
      element.parent.parent.parent.rooms.update({
        style: {
          minHeight: `${700 / 16}em`,
          opacity: 1,
          padding: `0 ${200 / 16}em`,
          '@media only screen and (max-width: 1024px)': { padding: 0 }
        }
      })
    }
  },
  content: {
    proto: Box,
    props: {
      position: 'absolute',
      boxSize: '100% 100%',
      top: '0',
      left: '0',
      flexFlow: 'column',
      flexAlign: 'center center'

    },

    p: {
      proto: [Text, Box],
      style: styleParagraph,
      props: {
        color: 'cream 1'
      },
      class: {
        show: (element, state) => state.activeTab === element.parent.parent.key ? { opacity: 1 } : {}
      }
    },
    book: {
      proto: book
    }
  }
}

export const tabBallerina = {
  proto: roomTab,
  style: {
    backgroundImage: 'url(' + BALLERINA_JPG + ')',
    '&:after': { content: '"ballerina"' }
  },
  class: {
    show: (element, state) => state.activeTab === element.key
      ? {
        flex: 5.5,
        pointerEvents: 'none',
        '&:before': { opacity: 1 },
        backgroundAttachment: 'fixed',
        boxShadow: 'none',
        '@media only screen and (max-width: 1225px)': { backgroundAttachment: 'initial' }
      } : {}
  },
  props: { href: '#roomBallerina' },
  content: {
    p: { proto: ballerina },
    book: {
      props: {
        href: 'https://www.airbnb.com/rooms/52732503?source_impression_id=p3_1649549940_lilV4c5SZhQLXjub',
        target: '_blank'
      },
      style: { pointerEvents: 'painted' },
      icon: { props: { src: DRESS_PNG } }
    }
  }
}

export const tabRedBrick = {
  proto: roomTab,
  props: { href: '#roomRedBrick' },
  style: { backgroundImage: 'url(' + REDBRICK_JPG + ')', '&:after': { content: '"red brick"' } },
  class: {
    show: (element, state) => state.activeTab === element.key
      ? {
        flex: 5.5,
        backgroundAttachment: 'fixed',
        pointerEvents: 'none',
        boxShadow: 'none',
        '&:before': { opacity: 1 },
        '@media only screen and (max-width: 1225px)': { backgroundAttachment: 'initial' }
      } : {}
  },
  content: {
    p: {
      proto: redBrick,
      style: { width: `${465 / 14}em !important` }
    },
    book: {
      props: {
        href: 'https://www.airbnb.com/rooms/52610522?source_impression_id=p3_1649549944_%2BCos1t1uD845OoWN',
        target: '_blank'
      },
      style: { pointerEvents: 'painted' },
      icon: { props: { src: BRICKS_PNG } }
    }
  }
}

export const tabYellowCouch = {
  proto: roomTab,
  props: { href: '#roomYellowCouch' },
  style: { backgroundImage: 'url(' + YELLOWCOUCH_JPG + ')', '&:after': { content: '"yellow couch"' } },
  class: {
    show: (element, state) => state.activeTab === element.key
      ? {
        flex: 5.5,
        backgroundAttachment: 'fixed',
        pointerEvents: 'none',
        boxShadow: 'none',
        '&:before': { opacity: 1 },
        '@media only screen and (max-width: 1225px)': { backgroundAttachment: 'initial' }
      } : {}
  },
  content: {
    p: { proto: yellowCouch },
    book: {
      props: {
        href: 'https://www.airbnb.com/rooms/52611151?source_impression_id=p3_1649549947_6qVLP%2BHZyXqY%2BvrL',
        target: '_blank'
      },
      style: { pointerEvents: 'painted' },
      icon: { props: { src: SOFA_PNG } }
    }
  }
}

export const tabGreenForest = {
  proto: roomTab,
  props: { href: '#roomGreenForest' },
  style: { backgroundImage: 'url(' + GREENFOREST_JPG + ')', '&:after': { content: '"green forest"' } },
  class: {
    show: (element, state) => state.activeTab === element.key
      ? {
        flex: 5.5,
        backgroundAttachment: 'fixed',
        pointerEvents: 'none',
        boxShadow: 'none',
        '&:before': { opacity: 1 },
        '@media only screen and (max-width: 1225px)': { backgroundAttachment: 'initial' }
      } : {}
  },
  content: {
    p: { proto: greenForest },
    book: {
      props: {
        href: 'https://www.airbnb.com/rooms/578777975140256943?source_impression_id=p3_1649549949_GCS4Ixi%2FrxMbApfW',
        target: '_blank'
      },
      style: { pointerEvents: 'painted' },
      icon: { props: { src: LEAF_PNG } }
    }
  }
}

export const tabRetro = {
  proto: roomTab,
  props: { href: '#roomRetro' },
  style: { backgroundImage: 'url(' + RETRO_JPG + ')', '&:after': { content: '"retro"' } },
  class: {
    show: (element, state) => state.activeTab === element.key
      ? {
        flex: 5.5,
        backgroundAttachment: 'fixed',
        pointerEvents: 'none',
        boxShadow: 'none',
        '&:before': { opacity: 1 },
        '@media only screen and (max-width: 1225px)': { backgroundAttachment: 'initial' }
      } : {}
  },
  content: {
    p: { proto: retro },
    book: {
      props: {
        href: 'https://www.airbnb.com/rooms/579012726681765152?source_impression_id=p3_1649552000_jBh%2BzYZTB7v6VHUs',
        target: '_blank'
      },
      style: { pointerEvents: 'painted' },
      icon: { props: { src: VINYL_PNG } }
    }
  }
}
