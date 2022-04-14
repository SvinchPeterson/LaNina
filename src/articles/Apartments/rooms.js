'use strict'

// import { Block, Text, Link, Button, Flex, Img } from '@symbo.ls/symbols'

// import { galleryBallerina, galleryRedBrick, galleryYellowCouch } from '../../components'

// import DOWN_ARROW from '../../assets/down-arrow.png'
// import UP_ARROW from '../../assets/up-arrow.png'

// // proto: Img,
// // //       props: { src: RIGHT_ARROW }

// export const room = {
//   state: {
//     activeImage: 0
//   },
//   style: {
//     // border: '5px solid red',
//     flex: 1,
//     display: 'flex',
//     position: 'relative',
//     '> button': {
//       position: 'absolute',
//       width: 'fit-content',
//       height: 'fit-content',
//       background: 'transparent',
//       right: '50px',
//       padding: '15px',
//       borderRadius: '6px',
//       zIndex: '30'
//     },
//     '> button > img': {
//       width: '40px',
//       height: '24px'
//     }
//   },
//   proto: Block,
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
//         filter: 'grayscale(50%) brightness(80%)'
//       }
//     }
//   },
//   roomDescription: {},
//   upArrow: {
//     proto: Button,
//     style: {
//       top: '43%'
//     },
//     arrowIcon: {
//       proto: Img,
//       props: { src: UP_ARROW }
//     },

// on: {
//   click: (event, element, state) => {
//     const { activeImage } = state
//     state.update({
//       activeImage: activeImage > (element.parent.gallery.length - 2) ? 0 : activeImage + 1
//     })
//     // if (activeImage === element.parent.gallery.length) {
//     //   state.update({
//     //     activeImage: activeImage === element.parent.gallery.length - 2
//     //   })
//     // }
//   }
// }
//   },

//   downArrow: {
//     proto: Button,
//     style: {
//       top: '50%'
//     },
//     arrowIcon: {
//       proto: Img,
//       props: { src: DOWN_ARROW }
//     },
// on: {
//   click: (event, element, state) => {
//     const { activeImage } = state
//     state.update({
//       activeImage: activeImage === (element.parent.gallery.length + 2) ? 0 : activeImage - 1
//     })
//   }
// }
//   }
// }

// export const roomBallerina = {
//   proto: room,

//   attr: { id: 'ballerina' },
//   gallery: {
//     proto: galleryBallerina
//   }
// }

// export const roomRedBrick = {
//   proto: room,
//   attr: { id: 'redBrick' },
//   gallery: {
//     proto: galleryRedBrick
//   }
// }

// export const roomYellowCouch = {
//   proto: room,
//   attr: { id: 'yellowCouch' },
//   gallery: {
//     proto: galleryYellowCouch
//   }
// }

// const Room = {
//   proto: Block,
//   gallery: {
//     tag: 'nav',
//     style: {
//       position: 'relative',
//       overflow: 'hidden'
//     },
//     description: {
//       proto: RoomDescription,
//       style: {
//         transition: 'all 2s ease-in-out',
//         transitionDelay: '1s'
//       },
// class: {
//   show: (element, state) => state.active === element.parent.parent.key ? { height: '100%', opacity: 1, left: 0 } : { height: 0, opacity: 0, left: '-100%' }
// }
//     }
//   }
// }
// // export const roomBallerina = {
// //   proto: Room,
// //   gallery: {
// //     proto: galleryBallerina
// //     // description: {
// //     //   proto: RoomDescription
// //     // }
// //   }
// // }

// // export const roomRedBrick = {
// //   proto: Room,
// //   gallery: {
// //     proto: galleryRedBrick
// //     // description: {
// //     //   proto: RoomDescription,
// //     //   h3: { props: { text: 'Red Brick' } }
// //     // }
// //   }
// // }

// // export const roomYellowCouch = {
// //   proto: Room,
// //   gallery: {
// //     proto: galleryYellowCouch
// //     // description: {
// //     //   proto: RoomDescription,
// //     //   h3: { props: { text: 'Yellow Couch' } }
// //     // }
// //   }
// // }
