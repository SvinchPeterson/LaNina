'use strict'
import { RoomTab } from './index'

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
