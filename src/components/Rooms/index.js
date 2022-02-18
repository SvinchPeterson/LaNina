'use strict'

import { Block, Button, Img, Flex } from '@rackai/symbols'

import { galleryBallerina, galleryRedBrick, galleryYellowCouch, RoomOffers } from '..'

import { roomsContainer } from '../../animations'

import DOWN_ARROW from '../../assets/down-arrowBlack.png'
import UP_ARROW from '../../assets/up-arrowBlack.png'

import style from './style'

const navButtons = {
  tag: 'span',
  proto: Block,
  props: {
    flexFlow: 'column',
    gap: 'C'
  },

  childProto: {
    proto: Button,
    arrow: { proto: Img }
  },
  ...[
    {
      arrow: { props: { src: UP_ARROW } },
      on: {
        click: (event, element, state) => {
          const { activeImage } = state
          state.update({
            activeImage: activeImage > (element.parent.parent.gallery.length - 2) ? 0 : activeImage + 1
          })
        }
      }
    },

    {
      arrow: { props: { src: DOWN_ARROW } },

      on: {
        click: (event, element, state) => {
          console.log(event)
          console.log(element)
          console.log(state)
          const { activeImage } = state
          state.update({
            activeImage: activeImage < (element.parent.parent.gallery.length - 2) ? 0 : activeImage - 1
          })
        }
      }
    }
  ]
}

const room = {
  proto: [Block, Flex],
  style,
  class: {
    show: (element, state) => state.activeLink === element.key ? {
      animationName: roomsContainer,
      animationDuration: '1.5s',
      animationTimingFunction: 'ease-in-out',
      height: '100%',
      opacity: 1,
      '> aside': { display: 'grid' }
    }
      : {
        height: 0,
        opacity: 0
      }
  },

  gallery: {},
  offer: { proto: RoomOffers },
  navButtons
}

// const room = {
//   proto: [Block, Flex],
//   style,
//   // style: { height: '100%', opacity: 1 },

//   // class: {
//   //   show: (element, state) => state.activeImage === element.key ? {
//   //     height: '100%',
//   //     opacity: 1,
//   //     transition: 'all 2s ease-in-out',
//   //     '> div': {
//   //       opacity: 1
//   //       // animationName: opacity2,
//   //       // animationDuration: '1.5s'
//   //     },
//   //     '> aside': {
//   //       background: 'rgba(243, 231, 219, 1)'
//   //       // height: '300px'
//   //     },
//   //     '> aside > div': {
//   //       // opacity: 1
//   //     }
//   //   }
//   //     : { height: 0, opacity: 0 }
//   // },

//   gallery: {
//     style: {
//       flex: 1,
//       position: 'relative',
//       '> span': {
//         width: '100%',
//         height: '100%',
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         filter: 'grayscale(50%) brightness(80%)',
//         backgroundAttachment: 'fixed'
//       }
//     }
//   },

//   roomDescription: {
//     proto: RoomDescription
//   },

//   buttons: {
//     proto: Block,
//     props: {
//       flexFlow: 'column',
//       gap: '40px'
//     },
//     style: {
//       height: 'fit-content',
//       position: 'absolute',
//       zIndex: '50',
//       right: '120px',
//       // background: 'radial-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .05))',
//       background: 'radial-gradient(rgba(243, 231, 219, .2), rgba(243, 231, 219, .1))',
//       // background: 'rgba(243, 231, 219, .3)',
//       display: 'flex',
//       opacity: 1,
//       top: '45%',
//       transition: 'all 1s ease-in-out',
//       transitionDelay: '1s',
//       padding: '20px 10px',
//       '> button': {
//         background: 'transparent',
//         width: '42px',
//         height: '20px'
//       },
//       '> button > img': {
//         width: '100%',
//         height: '100%',
//         opacity: '.2'
//       }
//     },
//     upArrow: {
//       proto: Button,
//       arrowIcon: {
//         proto: Img,
//         props: { src: UP_ARROW }
//       }

//       // on: {
//       //   click: (event, element, state) => {
//       //     const { activeImage } = state
//       //     state.update({
//       //       activeImage: activeImage > (element.parent.parent.gallery.length - 2) ? 0 : activeImage + 1
//       //     })
//       //     // if (activeImage === element.parent.gallery.length) {
//       //     //   state.update({
//       //     //     activeImage: activeImage === element.parent.gallery.length - 2
//       //     //   })
//       //     // }
//       //   }
//       // }
//     }

//     // downArrow: {
//     //   proto: Button,
//     //   arrowIcon: {
//     //     proto: Img,
//     //     props: { src: DOWN_ARROW }
//     //   },
//     //   on: {
//     //     click: (event, element, state) => {
//     //       const { activeImage } = state
//     //       state.update({
//     //         activeImage: activeImage === (element.parent.parent.gallery.length + 2) ? 0 : activeImage - 1
//     //       })
//     //     }
//     //   }
//     // }
//   }
// }
export const roomBallerina = {
  proto: room,
  attr: { id: 'ballerina' },

  gallery: { proto: galleryBallerina }
}

export const roomRedBrick = {
  proto: room,
  attr: { id: 'redBrick' },

  gallery: { proto: galleryRedBrick }
}

export const roomYellowCouch = {
  proto: room,
  attr: { id: 'yellowCouch' },

  gallery: { proto: galleryYellowCouch }

}
