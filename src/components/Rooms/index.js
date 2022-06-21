'use strict'

import { Box, Link, Img, Text } from '@symbo.ls/symbols'
import BACK_PNG from '../../assets/icons/up-arrow.png'

import {
  galleryBallerina, galleryRedBrick, galleryYellowCouch, galleryGreenForest, galleryRetro,
  RoomOffers,
  navButtons,
  navButtons2
} from '..'

const book = {
  proto: [Link, Text, Box],
  props: {
    color: 'cream2',
    position: 'absolute',
    padding: 'Z A',
    fontSize: 'Z',
    bottom: '0',
    left: '-D',
    '@tabletL': {
      left: 'auto',
      right: '-D',
      bottom: '-E1'
    },
    '@mobileL': { right: '-C1' },
    '@mobileM': {
      right: 'B',
      bottom: '-E'
    }
  },
  attr: { target: '_blank' },
  style: {
    textTransform: 'uppercase',
    fontWeight: 900,
    zIndex: '30',
    textDecoration: 'none',
    textOrientation: 'upright',
    '@media only screen and (min-width: 560px)': { writingMode: 'vertical-rl' },
    '&:hover > span': { opacity: 1 }
  },
  class: {
    show: (element, state) => state.activeTab
      ? {
        opacity: 1,
        transition: 'opacity 1.5s ease-in-out .5s'
      }
      : { opacity: 0 }
  },

  span: {
    proto: Box,
    text: 'BOOK',
    props: {
    },
    style: {
      opacity: '.7',
      transition: 'opacity .1s ease-in-out'
    }
  }
}

const back = {
  proto: [Link, Box, Text],

  props: {
    flexFlow: 'column',
    gap: 'Z',
    position: 'absolute',
    top: 'G',
    left: '-C2',
    href: '#apartments',
    color: 'cream2',
    flexAlign: 'center center',
    padding: 'Z',
    '@tabletL': {
      left: 'C',
      top: '122%'
    },
    '@mobileL': {
      left: '0',
      top: '135%'
    },
    '@mobileM': {
      left: 'A',
      top: '136%'
    },
    '@mobileS': {
      top: '138%',
      left: 'Y'

    }
  },
  style: {
    textDecoration: 'none',
    '&:hover > span': { opacity: '1' },
    '&:hover > img': { opacity: '1' },
    '@media only screen and (max-width: 1366px)': { transform: 'rotate(-90deg)' },
    '@media only screen and (max-width: 560px)': { transform: 'rotate(0deg)' }
  },
  class: {
    show: (element, state) => state.activeTab
      ? {
        opacity: 1,
        transition: 'opacity 1.8s ease-in-out .8s'
      }
      : { opacity: 0 }
  },

  icon: {
    proto: [Img, Box],
    props: {
      boxSize: ' B',
      src: BACK_PNG
    },
    style: {
      opacity: '.65',
      transition: 'opacity .1s ease-in-out'
    }
  },
  span: {
    proto: Box,
    props: {
      text: 'UP',
      fontSize: 'Z'
    },
    style: {
      fontWeight: '500',
      '@media only screen and (min-width: 1366px)': {
        textOrientation: 'upright',
        writingMode: 'vertical-rl',
        letterSpacing: '0',
        opacity: '.7',
        transition: 'opacity .15s ease-in-out'
      },
      textDecoration: 'upleft',
      writingMode: 'vertical-lr'
    }
  }
}

const Room = {
  proto: Box,
  props: { position: 'relative' },
  class: {
    show: (element, state) => state.activeTab === element.key
      ? {
        height: `${600 / 16}em`,
        transition: 'all 1s ease-in-out',
        opacity: 1,
        paddingTop: `${130 / 16}em`,
        '@media only screen and (max-width: 1366px)': {
          transition: 'all .1s ease-in-out',
          display: 'block',
          height: `${550 / 16}em`
        },
        '@media only screen and (max-width: 768px)': {
          height: `${400 / 16}em`
        },
        '@media only screen and (max-width: 480px)': {
          height: `${350 / 16}em`
        },
        '@media only screen and (max-height: 650px)': {
          height: `${300 / 16}em`
        }
      }

      : {
        '@media only screen and (max-width: 1225px)': { display: 'none' },
        height: 0,
        opacity: 0,
        button: { opacity: 0 },
        '> aside': { display: 'none' }
      }
  },

  gallery: {},
  RoomOffers,
  navButton: {
    proto: navButtons,
    props: { '@tabletL': { display: 'none' } }
  },
  navButton2: {
    proto: navButtons2,
    props: {
      width: '120%',
      '@tabletL': { top: '65%' },
      '@mobileL': {
        width: '110%',
        top: '75%'
      },
      '@mobileM': { width: '101%' }
    },

    ...[
      {
        props: { '@mobileM': { padding: 'C B C Z1' } },
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
        },
        image: { props: { '@mobileM': { boxSize: 'A B' } } }
      },

      {
        props: {
          '@mobileM': { padding: 'C Z1 C B' }
        },
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
        image: { props: { '@mobileM': { boxSize: 'A B' } } },
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
