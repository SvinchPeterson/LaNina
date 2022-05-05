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
    left: '50%',
    bottom: '0px',
    padding: 'Z1 A1 Z1 A1',
    gap: 'Y'
  },
  style: { pointerEvents: 'pointed !important' },
  icon: {
    proto: [Img, Box],
    props: { boxSize: 'A A' }
  },
  span: {
    proto: [Text, Box],
    props: {
      text: 'book',
      color: 'cream',
      size: 'A'
    }
  }
}

const roomTab = {
  proto: [Link, Box],
  style: styleRoomTab,
  props: {
    flexFlow: 'column',
    flexAlign: 'center flex-start',
    padding: 'D B',
    position: 'relative'
  },
  on: {
    click: (event, element, state) => {
      state.update({ activeTab: element.key })
      element.parent.parent.parent.rooms.update({
        style: {
          minHeight: `${700 / 16}em`,
          opacity: 1,
          padding: `0 ${80 / 16}em`,
          '@media only screen and (max-width: 1024px)': { padding: 0 }

          // paddingTop: '100px'
          // borderTop: '5px solid rgba(168, 98, 63, 1)'
        }
      })
    }
  },
  // class: {
  //   show: (element, state) => state.activeTab === element.key ? { display: 'none' } : {}
  // },

  h3: {
    proto: [Text, Box],
    props: {
      size: 'A',
      color: 'cream'
    },
    class: {
      show: (element, state) => state.activeTab === element.parent.key ? { letterSpacing: '1px' } : {}
    }
  },

  p: {
    proto: [Text, Box],
    style: styleParagraph,
    props: {
      color: 'cream 1',
      padding: 'C1 0 0 0',
      size: 'Z'
    },
    class: {
      show: (element, state) => state.activeTab === element.parent.key ? { opacity: 1 } : {}
    }
  },
  book: {
    proto: book
  }
}

export const tabBallerina = {
  proto: roomTab,
  style: { backgroundImage: 'url(' + BALLERINA_JPG + ')' },
  class: {
    show: (element, state) => state.activeTab === element.key
      ? {
        flex: 5.5,
        pointerEvents: 'none',
        '&:before': { opacity: 1 },
        backgroundAttachment: 'fixed',
        '@media only screen and (max-width: 1225px)': { backgroundAttachment: 'initial' }
      } : {}
  },
  props: { href: '#roomBallerina' },
  h3: { props: { text: 'ballerina' } },
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

export const tabRedBrick = {
  proto: roomTab,
  props: { href: '#roomRedBrick' },
  style: { backgroundImage: 'url(' + REDBRICK_JPG + ')' },
  class: {
    show: (element, state) => state.activeTab === element.key
      ? {
        flex: 5.5,
        backgroundAttachment: 'fixed',
        pointerEvents: 'none',
        '&:before': { opacity: 1 },
        '@media only screen and (max-width: 1225px)': { backgroundAttachment: 'initial' }
      } : {}
  },
  h3: { props: { text: 'red brick' } },
  p: { proto: redBrick },
  book: {
    props: {
      href: 'https://www.airbnb.com/rooms/52610522?source_impression_id=p3_1649549944_%2BCos1t1uD845OoWN',
      target: '_blank'
    },
    style: { pointerEvents: 'painted' },
    icon: { props: { src: BRICKS_PNG } }
  }
}

export const tabYellowCouch = {
  proto: roomTab,
  props: { href: '#roomYellowCouch' },
  style: { backgroundImage: 'url(' + YELLOWCOUCH_JPG + ')' },
  class: {
    show: (element, state) => state.activeTab === element.key
      ? {
        flex: 5.5,
        backgroundAttachment: 'fixed',
        pointerEvents: 'none',
        '&:before': { opacity: 1 },
        '@media only screen and (max-width: 1225px)': { backgroundAttachment: 'initial' }
      } : {}
  },
  h3: { props: { text: 'yellow couch' } },
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

export const tabGreenForest = {
  proto: roomTab,
  props: { href: '#roomGreenForest' },
  style: { backgroundImage: 'url(' + GREENFOREST_JPG + ')' },
  class: {
    show: (element, state) => state.activeTab === element.key
      ? {
        flex: 5.5,
        backgroundAttachment: 'fixed',
        pointerEvents: 'none',
        '&:before': { opacity: 1 },
        '@media only screen and (max-width: 1225px)': { backgroundAttachment: 'initial' }
      } : {}
  },
  h3: { props: { text: 'green forest' } },
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

export const tabRetro = {
  proto: roomTab,
  props: { href: '#roomRetro' },
  style: { backgroundImage: 'url(' + RETRO_JPG + ')' },
  class: {
    show: (element, state) => state.activeTab === element.key
      ? {
        flex: 5.5,
        backgroundAttachment: 'fixed',
        pointerEvents: 'none',
        '&:before': { opacity: 1 },
        '@media only screen and (max-width: 1225px)': { backgroundAttachment: 'initial' }
      } : {}
  },
  h3: { props: { text: 'retro' } },
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
