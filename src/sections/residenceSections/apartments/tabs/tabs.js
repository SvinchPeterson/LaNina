'use strict'
import { RoomTab } from '../../../../components'

import BALLERINA_JPG from '../../../../assets/images/residence/rooms/ballerina/ballerinaTab.jpg'
import REDBRICK_JPG from '../../../../assets/images/residence/rooms/redBrick/redbrickTab.jpg'
import YELLOWCOUCH_JPG from '../../../../assets/images/residence/rooms/yellowCouch/yellowcouchTab.jpg'
import GREENFOREST_JPG from '../../../../assets/images/residence/rooms/greenForest/greenforestTab.jpg'
import RETRO_JPG from '../../../../assets/images/residence/rooms/retro/retroTab.jpg'

import DRESS_PNG from '../../../../assets/icons/dress.png'
import BRICKS_PNG from '../../../../assets/icons/bricks.png'
import SOFA_PNG from '../../../../assets/icons/sofa.png'
import LEAF_PNG from '../../../../assets/icons/leaf.png'
import VINYL_PNG from '../../../../assets/icons/vinyl.png'

export const tabBallerina = {
  extend: RoomTab,

  class: {
    show: (element, state) => state.tabs === 0
      ? { '@media only screen and (max-width: 1366px)': { display: 'block' } }
      : { '@media only screen and (max-width: 1366px)': { display: 'none' } }
  },

  props: {
    href: '#roomBallerina',
    image: { style: { backgroundImage: 'url(' + BALLERINA_JPG + ')' } },
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
    image: { style: { backgroundImage: 'url(' + REDBRICK_JPG + ')' } },
    title: { text: 'red brick' }
  },
  class: {
    show: (element, state) => state.tabs === 1
      ? { '@media only screen and (max-width: 1366px)': { display: 'block' } }
      : { '@media only screen and (max-width: 1366px)': { display: 'none' } }
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
  extend: RoomTab,
  props: {
    href: '#roomYellowCouch',
    image: { style: { backgroundImage: 'url(' + YELLOWCOUCH_JPG + ')' } },
    title: { text: 'yellow couch' }
  },
  class: {
    show: (element, state) => state.tabs === 2
      ? { '@media only screen and (max-width: 1366px)': { display: 'block' } }
      : { '@media only screen and (max-width: 1366px)': { display: 'none' } }
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
  extend: RoomTab,
  props: {
    href: '#roomGreenForest',
    image: { style: { backgroundImage: 'url(' + GREENFOREST_JPG + ')' } },
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
    image: { style: { backgroundImage: 'url(' + RETRO_JPG + ')' } },
    title: { text: 'retro' }
  },
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
