'use strict'
import { RoomTab } from './RoomTab'

import BALLERINA_JPG from '../../assets/images/residence/rooms/ballerina/ballerinaTab.jpg'
import REDBRICK_JPG from '../../assets/images/residence/rooms/redBrick/redbrickTab.jpg'
import YELLOWCOUCH_JPG from '../../assets/images/residence/rooms/yellowCouch/yellowcouchTab.jpg'
import GREENFOREST_JPG from '../../assets/images/residence/rooms/greenForest/greenforestTab.jpg'
import RETRO_JPG from '../../assets/images/residence/rooms/retro/retroTab.jpg'

import DRESS_PNG from '../../assets/icons/dress.png'
import BRICKS_PNG from '../../assets/icons/bricks.png'
import SOFA_PNG from '../../assets/icons/sofa.png'
import LEAF_PNG from '../../assets/icons/leaf.png'
import VINYL_PNG from '../../assets/icons/vinyl.png'

export const tabBallerina = {
  extend: RoomTab,
  style: {
    backgroundImage: 'url(' + BALLERINA_JPG + ')'
  },

  class: {
    show: (element, state) => state.tabs === 0
      ? { '@media only screen and (max-width: 1366px)': { display: 'block' } }
      : { '@media only screen and (max-width: 1366px)': { display: 'none' } }
  },

  props: {
    href: '#roomBallerina',
    title: { text: 'ballerina' }
  },
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
  extend: RoomTab,
  props: {
    href: '#roomRedBrick',
    title: { text: 'red brick' }
  },
  class: {
    show: (element, state) => state.tabs === 1
      ? { '@media only screen and (max-width: 1366px)': { display: 'block' } }
      : { '@media only screen and (max-width: 1366px)': { display: 'none' } }
  },
  style: { backgroundImage: 'url(' + REDBRICK_JPG + ')' },
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
  extend: RoomTab,
  props: {
    href: '#roomYellowCouch',
    title: { text: 'yellow couch' }
  },
  class: {
    show: (element, state) => state.tabs === 2
      ? { '@media only screen and (max-width: 1366px)': { display: 'block' } }
      : { '@media only screen and (max-width: 1366px)': { display: 'none' } }
  },
  style: { backgroundImage: 'url(' + YELLOWCOUCH_JPG + ')' },
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
  extend: RoomTab,
  props: {
    href: '#roomGreenForest',
    title: { text: 'green forest' }
  },
  class: {
    show: (element, state) => state.tabs === 3
      ? {
        '@media only screen and (max-width: 1366px)': { display: 'block' }

      }
      : {
        '@media only screen and (max-width: 1366px)': { display: 'none' }
      }
  },
  style: { backgroundImage: 'url(' + GREENFOREST_JPG + ')' },
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
  extend: RoomTab,
  props: {
    href: '#roomRetro',
    title: { text: 'retro' }
  },
  style: { backgroundImage: 'url(' + RETRO_JPG + ')' },
  class: {
    show: (element, state) => state.tabs === 4
      ? { '@media only screen and (max-width: 1366px)': { display: 'block' } }
      : {
        '@media only screen and (max-width: 1366px)': { display: 'none' }
      }
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
