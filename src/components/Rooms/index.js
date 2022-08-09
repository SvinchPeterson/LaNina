'use strict'

import { Box, Link, Img, Flex } from 'smbls'

import BACK_PNG from '../../assets/icons/arrowBack.png'

import {
  galleryBallerina, galleryRedBrick, galleryYellowCouch, galleryGreenForest, galleryRetro,
  RoomOffers,
  NavButtons,
  NavButtons2
} from '..'

import { RoomDescription } from '../RoomDescription'

const book = {
  proto: [Link],
  props: {
    color: 'cream2',
    position: 'absolute',
    padding: 'Z A',
    fontSize: 'Z',
    width: 'fit-content',
    left: `${-60 / 14}em`,
    css: {
      zIndex: '30',
      textDecoration: 'none',
      textTransform: 'uppercase',
      '@media only screen and (min-width: 768px)': {
        textOrientation: 'upright',
        writingMode: 'vertical-rl',
        bottom: '0'
      },
      '@media only screen and (max-height: 650px)': {
        bottom: `${-50 / 14}em`
      },
      '&:hover > span': { opacity: 1 }
    },
    '@tabletL': {
      left: `${-75 / 14}em`
    },
    '@mobileL': {
      bottom: '-E',
      left: `${85 / 14}em`
    }
  },
  attr: { target: '_blank' },
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
      css: {
        opacity: '.7',
        transition: 'opacity .1s ease-in-out',
        '@media only screen and (max-width: 1366px)': {
          opacity: 1
        }
      }
    }
  }
}

const back = {
  proto: [Link],

  props: {
    gap: 'Z',
    position: 'absolute',
    top: 'D1',
    left: 'D',
    href: '#apartments',
    color: 'cream2',
    flexAlign: 'center center',
    padding: 'Z',
    '@tabletL': {
      top: 'E'
    },
    // '@mobileS': { top: 'C1' },
    css: {
      textDecoration: 'none',
      '&:hover > span': { opacity: '1' },
      '&:hover > img': { opacity: '1' },
      '@media only screen and (max-height: 650px)': {
        top: `${45 / 16}em`,
        left: `${120 / 16}em`,
        // border: '3px solid red',
        '> span': { opacity: 1 }
      }
    }
  },

  class: {
    show: (element, state) => state.activeTab
      ? {
        opacity: 1,
        transition: 'opacity 1.8s ease-in-out .8s'
      }
      : { opacity: 0 },
    show2: (element, state) => state.back
      ? {
        visibility: 'visible'
      }
      : { visibility: 'hidden' }
  },

  on: {
    click: (event, element, state) => {
      state.update({ back: false })
    }
  },

  icon: {
    proto: [Img],
    props: {
      boxSize: '- A1',
      src: BACK_PNG,
      css: {
        opacity: '.65',
        transition: 'opacity .1s ease-in-out',
        '@media only screen and (max-width: 1366px)': {
          opacity: 1
        }
      }
    }
  },
  span: {
    props: {
      text: 'APARTMENTS',
      fontSize: 'Y',
      '@tabletL': {
        fontSize: 'Z'
      },
      css: {
        letterSpacing: '1px',
        opacity: '.7',
        transition: 'opacity .15s ease-in-out',
        '@media only screen and (max-width: 1366px)': {
          opacity: 1
        }
      }
    }
  }
}

const Room = {
  props: {
    boxSize: '100% 100%',
    flexAlign: 'center spance-between',
    css: {
      border: '5px solid pink',
      zIndex: 10,
      alignSelf: 'center'
    }
  },

  class: {
    show: (element, state) => state.activeTab === element.key
      ? {
        // minWidth: '100%'
        // height: '100%'
        // border: '5px solid purple',

        // transition: 'all 1.1s ease-in-out',
        // opacity: 1,
        // // paddingTop: `${130 / 16}em`,
        // '@media only screen and (max-width: 1366px)': {
        //   marginTop: `${125 / 16}em`,
        //   paddingTop: `${160 / 16}em`,
        //   height: `${500 / 16}em`,
        //   display: 'block'
        // },
        // '@media only screen and (max-height: 800px)': {
        //   height: `${500 / 16}em`
        // },
        // '@media only screen and (max-height: 788px)': {
        //   height: `${450 / 16}em`
        // },
        // '@media only screen and (max-height: 722px)': {
        //   height: `${400 / 16}em`
        // },
        // '@media only screen and (max-height: 650px)': {
        //   paddingTop: `${90 / 16}em`
        // },
        // '@media only screen and (max-width: 560px)': {
        //   height: `${350 / 16}em`
        // },
        // '@media only screen and (max-width: 480px)': {
        //   height: `${300 / 16}em`
        // }
      }

      : {
        // height: `0`,
        // opacity: 0,
        // button: { opacity: 0 },
        // '> aside': { display: 'none' },
        // '@media only screen and (max-width: 1366px)': {
        //   display: 'none',
        //   height: `${500 / 16}em`
        // }
      }
  },

  article: {
    props: { css: { border: '4px solid red' } },
    RoomDescription
  },
  gallery: {}
  // RoomOffers,
  // navButton: {
  //   proto: NavButtons,
  //   props: { '@mobileL': { display: 'none' } }
  // },
  // navButton2: {
  //   proto: NavButtons2,
  //   style: {
  //     display: 'none',
  //     '@media only screen and (max-width: 768px)': {
  //       display: 'flex',
  //       top: '70%',
  //       width: '100%',
  //       '> button': {
  //         background: 'rgba(60, 84, 72, .95)',
  //         '&:first-child': {
  //           marginLeft: `${-1.5 / 16}em`
  //         },
  //         '&:last-child': {
  //           marginRight: `${-1.5 / 16}em`
  //         }
  //       }
  //     },
  //     '@media only screen and (max-width: 560px)': {
  //       top: '85%'
  //     },
  //     '@media only screen and (max-height: 650px)': {
  //       top: '70%'
  //     }
  //   },

  //   ...[
  //     {
  //       on: {
  //         click: (event, element, state) => {
  //           const { activeImage } = state
  //           state.update({
  //             activeImage: activeImage + 1
  //           })
  //           if (activeImage >= 8) {
  //             state.update({ activeImage: 0 })
  //           }
  //         }
  //       }
  //     },

  //     {
  //       on: {
  //         click: (event, element, state) => {
  //           const { activeImage } = state
  //           state.update({
  //             activeImage: activeImage - 1
  //           })
  //           if (activeImage <= 0) {
  //             state.update({ activeImage: 8 })
  //           }
  //         }
  //       },
  //       style: { marginRight: `${-3 / 16}em` }
  //     }
  //   ]
  // }

  // book: { proto: book },
  // back: { proto: back }
}

export const roomBallerina = {
  proto: Room,
  attr: { id: 'roomBallerina' },
  article: {},
  gallery: { proto: galleryBallerina }
  // RoomOffers: {},
  // navButton: {},
  // book: { props: { href: 'https://www.airbnb.com/rooms/52732503?source_impression_id=p3_1649549940_lilV4c5SZhQLXjub' } }
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
