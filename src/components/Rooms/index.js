'use strict'

import { Block, Button, Img, Flex } from '@rackai/symbols'

import { galleryBallerina, galleryRedBrick, galleryYellowCouch, RoomDescription } from '..'

import { heightGallery, opacity2 } from '../../animations'

import DOWN_ARROW from '../../assets/down-arrow.png'
import UP_ARROW from '../../assets/up-arrow.png'

const room = {
  state: {
    activeImage: 0
  },
  proto: [Block, Flex],

  style: {
    // flex: 0,
    // minHeight: 0,
    // minWidth: 0,
    boxSizing: 'border-box',
    padding: '120px 80px'
    // border: '5px solid red'
  },
  class: {
    show: (element, state) => state.active === element.key ? {
      height: '100%',
      animationName: heightGallery,
      animationDuration: '3s',
      opacity: 1,
      '> div': {
        opacity: 1
        // animationName: opacity2,
        // animationDuration: '3s'
      },
      '> aside': {
        opacity: 1
      }
    }
      : { height: 0, opacity: 0 }
  },

  gallery: {
    style: {
      flex: 1,
      position: 'relative',
      '> span': {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        filter: 'grayscale(50%) brightness(80%)'
      }
    }
  },

  roomDescription: {
    proto: RoomDescription
  },

  buttons: {
    proto: Block,
    props: {
      flexFlow: 'column',
      gap: '40px'
    },
    style: {
      height: 'fit-content',
      position: 'absolute',
      zIndex: '50',
      right: '120px',
      // background: 'rgba(0, 0, 0, .8)',
      background: 'rgba(243, 231, 219, .3)',
      display: 'flex',
      opacity: 0,
      top: '45%',
      transition: 'all 1s ease-in-out',
      transitionDelay: '1s',
      padding: '20px 10px',
      '> button': {
        background: 'transparent',
        width: '42px',
        height: '20px'
      },
      '> button > img': {
        width: '100%',
        height: '100%'
      }
    },
    upArrow: {
      proto: Button,
      arrowIcon: {
        proto: Img,
        props: { src: UP_ARROW }
      },

      on: {
        click: (event, element, state) => {
          const { activeImage } = state
          state.update({
            activeImage: activeImage > (element.parent.parent.gallery.length - 2) ? 0 : activeImage + 1
          })
          // if (activeImage === element.parent.gallery.length) {
          //   state.update({
          //     activeImage: activeImage === element.parent.gallery.length - 2
          //   })
          // }
        }
      }
    },

    downArrow: {
      proto: Button,
      arrowIcon: {
        proto: Img,
        props: { src: DOWN_ARROW }
      },
      on: {
        click: (event, element, state) => {
          const { activeImage } = state
          state.update({
            activeImage: activeImage === (element.parent.parent.gallery.length + 2) ? 0 : activeImage - 1
          })
        }
      }
    }
  }
}
export const roomBallerina = {
  proto: room,
  attr: { id: 'ballerina' },
  gallery: {
    proto: galleryBallerina

  }
}

export const roomRedBrick = {
  proto: room,
  attr: { id: 'redBrick' },

  gallery: {
    proto: galleryRedBrick
  }
}

export const roomYellowCouch = {
  proto: room,

  attr: { id: 'yellowCouch' },

  gallery: {
    proto: galleryYellowCouch
  }

}
