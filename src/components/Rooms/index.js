'use strict'

import { Box } from '@symbo.ls/symbols'

import {
  galleryBallerina, galleryRedBrick, galleryYellowCouch, galleryGreenForest, galleryRetro,
  RoomOffers,
  navButtons
} from '..'

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
        opacity: 1
      }
      : { height: '0', opacity: 0, button: { opacity: 0 }, '> aside': { display: 'none' } }
  },

  gallery: { },
  RoomOffers,
  navButtons
}

export const roomBallerina = {
  proto: Room,
  attr: { id: 'roomBallerina' },
  gallery: { proto: galleryBallerina }
}

export const roomRedBrick = {
  proto: Room,
  attr: { id: 'roomRedBrick' },
  gallery: { proto: galleryRedBrick }
}

export const roomYellowCouch = {
  proto: Room,
  attr: { id: 'roomYellowCouch' },
  gallery: { proto: galleryYellowCouch }
}

export const roomGreenForest = {
  proto: Room,
  attr: { id: 'roomGreenForest' },
  gallery: { proto: galleryGreenForest }
}

export const roomRetro = {
  proto: Room,
  attr: { id: 'roomRetro' },
  gallery: { proto: galleryRetro }
}

// import { Block, Button, Img, Flex } from '@symbo.ls/symbols'

// import { galleryBallerina, galleryRedBrick, galleryYellowCouch, galleryRetro, galleryGreenForest, RoomOffers } from '..'

// import { roomsContainer } from '../../animations'

// // import LEFT_ARROW from '../../assets/left.png'
// // import RIGHT_ARROW from '../../assets/right.png'
// import UP_ARROW from '../../assets/icons/up-arrow.png'
// import DOWN_ARROW from '../../assets/icons/down-arrow.png'

// import style from './style'
// import { galleryImgs } from '../Gallery/galleryBallerina'

// const navButtons = {
//   tag: 'span',
//   proto: Block,
//   props: {
//     flexAlign: 'center center',
//     flexFlow: 'column',
//     // gap: 'C'
//     padding: 'A W'
//   },

//   childProto: {
//     proto: Button,
//     arrow: { proto: Img }
//   },
//   ...[
//     {
//       arrow: { props: { src: UP_ARROW } },
//       on: {
//         click: (event, element, state) => {
//           const { activeImage } = state
//           state.update({
//             activeImage: (galleryImgs - 1) < activeImage ? 0 : activeImage + 1
//           })
//         }
//       }
//     },

//     {
//       arrow: { props: { src: DOWN_ARROW } },

//       on: {
//         click: (event, element, state) => {
//           console.log(event)
//           console.log(element)
//           console.log(state)
//           const { activeImage } = state
//           state.update({
//             activeImage: activeImage < (galleryImgs.length + 1) ? 0 : activeImage - 1
//           })
//           // if (activeImage === element.parent.gallery.length) {
//           //   state.update({
//           //     activeImage: activeImage === element.parent.gallery.length - 2
//           //   })
//           // }
//         }
//       }
//     }
//   ]
// }

// const room = {
//   proto: [Block, Flex],
//   style,
//   // class: {
//   //   show: (element, state) => state.activeTab === element.key ? {
//   //     // animationName: roomsContainer,
//   //     // animationDuration: '1.5s',
//   //     // animationTimingFunction: 'ease-in-out',
//   //     height: '100%',
//   //     opacity: 1,
//   //     '> aside': { display: 'grid' }
//   //   }
//   //     : {
//   //       height: 0,
//   //       opacity: 0
//   //     }
//   // },
//   props: {
//     // padding: 'E 0 0 0'
//   },

//   gallery: {},
//   offer: { proto: RoomOffers },
//   navButtons
// }

// export const roomBallerina = {
//   proto: room,
//   attr: { id: 'ballerina' },

//   gallery: { proto: galleryBallerina }
// }

// export const roomRedBrick = {
//   proto: room,
//   attr: { id: 'redBrick' },

//   gallery: { proto: galleryRedBrick }
// }

// export const roomYellowCouch = {
//   proto: room,
//   attr: { id: 'yellowCouch' },

//   gallery: { proto: galleryYellowCouch }
// }

// export const roomRetro = {
//   proto: room,
//   attr: { id: 'retro' },

//   gallery: { proto: galleryRetro }
// }

// export const roomGreenForest = {
//   proto: room,
//   attr: { id: 'greenForest' },

//   gallery: { proto: galleryGreenForest }
// }

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
