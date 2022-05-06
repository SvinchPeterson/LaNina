'use strict'

import { Box, Link, Img, Text } from '@symbo.ls/symbols'
import BACK_PNG from '../../assets/icons/leftCream.png'

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
    size: 'A',
    color: 'cream',
    position: 'absolute',
    right: '80px',
    bottom: '0px',
    padding: 'Z A'
    // background: 'cream'
  },
  attr: { target: '_blank' },
  style: {
    textTransform: 'uppercase',
    fontWeight: 700,
    zIndex: '30',
    textDecoration: 'none'
    // backdropFilter: 'blur(10px)'

  }
}
const back = {
  proto: [Link, Box, Text],
  icon: {
    proto: [Img, Box],
    props: {
      boxSize: ' Z2',
      src: BACK_PNG
    }
  },
  text: 'apartments',

  props: {
    position: 'absolute',
    top: '65px',
    left: '10px',
    href: '#apartments',
    color: 'cream',
    flexAlign: 'center center',
    gap: 'Z',
    padding: 'Z'
  },
  style: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: `${11.5 / 16}em`,
    fontWeight: 500,
    letterSpacing: '2px',
    '@media only screen and (max-width: 1225px)': {
      left: '30px',
      fontSize: '12.5px'
    }
  },
  class: {
    show: (element, state) => state.activeTab
      ? {
        opacity: 1,
        transition: 'opacity 2s ease-in-out .5s'
      }
      : { opacity: 0 }
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
        '@media only screen and (max-width: 1225px)': {
          transition: 'all .1s ease-in-out',
          display: 'block',
          height: `${600 / 16}em`
        },
        '@media only screen and (max-width: 768px)': {
          height: `${500 / 16}em`
        },
        '@media only screen and (max-width: 480px)': {
          height: `${400 / 16}em`
        },
        transition: 'all 1s ease-in-out',
        opacity: 1,
        paddingTop: `${100 / 16}em`
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
      top: '65%',
      '@media only screen and (max-width: 768px)': {
        top: '70%'
      }
    },
    ...[
      {
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
        }
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
