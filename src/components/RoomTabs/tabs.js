'use strict'
import { RoomTab } from './RoomTab'

import { ballerinaParagraph, redBrickParagrap, yellowCouchParagraph, greenForestParagraph, retroParagraph } from '../../texts'

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

export const tabBallerina = {
  proto: RoomTab,
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
    paragraph: {
      ...[
        'Enjoy special atmosphere, delicate and airy',
        { text: `as ballerina's dressing interior.` }
      ]
    },
    icon: { img: { props: { src: DRESS_PNG } } }
  }
}

export const tabRedBrick = {
  proto: RoomTab,
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
    paragraph: {
      ...[
        'Where traditional Georgian old style',
        { text: 'meets modernity!' }
      ]
    },
    icon: { img: { props: { src: BRICKS_PNG } } }
  }
}

export const tabYellowCouch = {
  proto: RoomTab,
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
    paragraph: {
      ...[
        'Make yourself comfortable on',
        { text: 'yellow couch' }
      ]
    },
    icon: { img: { props: { src: SOFA_PNG } } }
  }
}

export const tabGreenForest = {
  proto: RoomTab,
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
    paragraph: {
      ...[
        'Timeless and elegant, yet modern and fresh,',
        { text: 'green is your choice!' }
      ]
    },
    icon: { img: { props: { src: LEAF_PNG } } }
  }
}

export const tabRetro = {
  proto: RoomTab,
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
    paragraph: {
      ...[
        'Where contemporary design combine with',
        { text: 'traditional architecture.' }

      ]
    },
    icon: { img: { props: { src: VINYL_PNG } } }
  }
}
