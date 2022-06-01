'use strict'

import { Box, Link, Img, Text } from '@symbo.ls/symbols'
import BACK2_PNG from '../../assets/icons/left-arrow2.png'

import {
  galleryBallerina, galleryRedBrick, galleryYellowCouch, galleryGreenForest, galleryRetro,
  RoomOffers,
  navButtons,
  navButtons2
} from '..'

const book = {
  proto: [Link, Text, Box],
  text: 'book',
  props: {
    size: 'B',
    color: 'cream',
    position: 'absolute',
    padding: 'Z A'
  },
  attr: { target: '_blank' },
  style: {
    textTransform: 'uppercase',
    fontWeight: 700,
    zIndex: '30',
    textDecoration: 'none',
    bottom: 0,
    right: '80px',
    '@median only screen and (max-width: 1225px)': {
      right: '60px',
      bottom: '0px'
    }
  }
}
const back = {
  proto: [Link, Box, Text],

  props: {
    position: 'absolute',
    top: '65px',
    left: '10px',
    href: '#apartments',
    color: 'cream',
    flexAlign: 'center center',
    gap: 'Y2',
    padding: 'Z'
  },
  style: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: `${11.5 / 16}em`,
    fontWeight: 700,
    letterSpacing: '0px',
    '@media only screen and (max-width: 1225px)': {
      left: '30px',
      fontSize: '12.5px',
      top: '160px'
    },
    '@media only screen and (max-width: 768px)': { top: '90px' }
  },
  class: {
    show: (element, state) => state.activeTab
      ? {
        opacity: 1,
        transition: 'opacity 2s ease-in-out .5s'
      }
      : { opacity: 0 }
  },

  icon: {
    proto: [Img, Box],
    props: {
      boxSize: 'B1',
      src: BACK2_PNG
    }
  }
}

const Room = {
  proto: Box,
  props: {
    position: 'relative'
  },
  class: {
    show: (element, state) => state.activeTab === element.key
      ? {
        height: `${700 / 16}em`,
        transition: 'all 1s ease-in-out',
        opacity: 1,
        // paddingTop: `${100 / 16}em`,
        '@media only screen and (max-width: 1225px)': {
          transition: 'all .1s ease-in-out',
          display: 'block',
          height: `${600 / 16}em`
          // paddingTop: `${200 / 16}em`
        },
        '@media only screen and (max-width: 768px)': {
          height: `${500 / 16}em`
          // paddingTop: `${130 / 16}em`
        },
        '@media only screen and (max-width: 480px)': {
          height: `${400 / 16}em`
        },
        '@media only screen and (max-height: 650px)': {
          height: `${300 / 16}em`
        }
      }

      : {
        '@media only screen and (max-width: 1225px)': {
          display: 'none'
        },
        height: '0',
        opacity: 0,
        button: { opacity: 0 },
        '> aside': { display: 'none' }
      }
  },

  gallery: { },
  RoomOffers,
  navButton: {
    proto: navButtons,

    style: {
      '@media only screen and (max-width: 1225px)': {
        display: 'none'
      }
    }
  },
  navButton2: {
    proto: navButtons2,
    style: {
      '@media only screen and (max-width: 1225px)': {
        bottom: '100px'
      },
      '@media only screen and (max-height: 650px)': {
        bottom: '0px'
      }
    },
    ...[
      {
        style: { marginLeft: '-3px' },
        on: {
          click: (event, element, state) => {
            const { activeImage } = state
            state.update({
              activeImage: activeImage + 1
            })
            if (activeImage >= 8) {
              state.update({ activeImage: 0 })
            }
          }
        }
      },
      {
        on: {
          click: (event, element, state) => {
            const { activeImage } = state
            state.update({
              activeImage: activeImage - 1
            })
            if (activeImage <= 0) {
              state.update({ activeImage: 8 })
            }
          }
        },
        style: { marginRight: '-3px' }
      }
    ]
  },
  book: { proto: book },
  back: { proto: back }
}

export const roomBallerina = {
  proto: Room,
  attr: { id: 'roomBallerina' },
  gallery: { proto: galleryBallerina },
  RoomOffers: {},
  navButton: {},
  book: { props: { href: 'https://www.airbnb.com/rooms/52732503?source_impression_id=p3_1649549940_lilV4c5SZhQLXjub' } }
}

export const roomRedBrick = {
  proto: Room,
  attr: { id: 'roomRedBrick' },
  gallery: { proto: galleryRedBrick },
  RoomOffers: {},
  navButton: {},
  book: { props: { href: 'https://www.airbnb.com/rooms/52610522?source_impression_id=p3_1649549944_%2BCos1t1uD845OoWN' } }
}

export const roomYellowCouch = {
  proto: Room,
  attr: { id: 'roomYellowCouch' },
  gallery: { proto: galleryYellowCouch },
  RoomOffers: {},
  navButton: {},
  book: { props: { href: 'https://www.airbnb.com/rooms/52611151?source_impression_id=p3_1649549947_6qVLP%2BHZyXqY%2BvrL' } }
}

export const roomGreenForest = {
  proto: Room,
  attr: { id: 'roomGreenForest' },
  gallery: { proto: galleryGreenForest },
  RoomOffers: {},
  navButton: {},
  book: { props: { href: 'https://www.airbnb.com/rooms/578777975140256943?source_impression_id=p3_1649549949_GCS4Ixi%2FrxMbApfW' } }
}

export const roomRetro = {
  proto: Room,
  attr: { id: 'roomRetro' },
  gallery: { proto: galleryRetro },
  RoomOffers: {},
  navButton: {},
  book: { props: { href: 'https://www.airbnb.com/rooms/579012726681765152?source_impression_id=p3_1649552000_jBh%2BzYZTB7v6VHUs' } }
}
