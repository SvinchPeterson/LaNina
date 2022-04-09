'use strict'

import { Box, Link, Img, Text } from '@symbo.ls/symbols'

import { ballerina, redBrick, yellowCouch } from '../../texts'

import BALLERINA_JPG from '../../assets/images/ballerina/ballerinaTab.jpg'
import REDBRICK_JPG from '../../assets/images/redBrick/redbrickTab.jpg'
import YELLOWCOUCH_JPG from '../../assets/images/yellowCouch/yellowcouchTab.jpg'
import GREENFOREST_JPG from '../../assets/images/greenForest/greenforestTab.jpg'
import RETRO_JPG from '../../assets/images/retro/retroTab.jpg'

import { styleRoomTab } from './style'

const book = {
  proto: Box,
  icon: { proto: Img },
  span: {
    proto: Text
  }
}

const roomTab = {
  proto: [Link, Box],
  class: [styleRoomTab],
  h3: {
    proto: [Text, Box],
    props: { text: 'ballerina' }
  },
  p: {
    proto: [Text, Box]
  },
  book
}

export const tabBallerina = {
  proto: roomTab,
  style: {
    backgroundImage: 'url(' + BALLERINA_JPG + ')'
  }
}

export const tabRedBrick = {
  proto: roomTab,
  style: {
    backgroundImage: 'url(' + REDBRICK_JPG + ')'
  }
}

export const tabYellowCouch = {
  proto: roomTab,
  style: {
    backgroundImage: 'url(' + YELLOWCOUCH_JPG + ')'
  }
}

export const tabGreenForest = {
  proto: roomTab,
  style: {
    backgroundImage: 'url(' + GREENFOREST_JPG + ')'
  }
}

export const tabRetro = {
  proto: roomTab,
  style: {
    backgroundImage: 'url(' + RETRO_JPG + ')'
  }
}

// import { ballerina, redBrick, yellowCouch } from '../../texts'

// import style, { styleBook } from './style'

// import BALLERINA_TAB_IMG from '../../assets/images/ballerina/livingroom.jpg'
// import REDBRICK_TAB_IMG from '../../assets/images/redBrick/livingroom.jpg'
// import YELLOWCOUCH_TAB_IMG from '../../assets/images/yellowCouch/livingroom.jpg'
// import RETRO_TAB_IMG from '../../assets/images/retro/livingroom.jpg'
// import GREENFOREST_TAB_IMG from '../../assets/images/greenForest/livingroom.jpg'

// import BALLERINA_ICON from '../../assets/icons/dress.png'
// import BRICKS_ICON from '../../assets/icons/bricks.png'
// import COUCH_ICON from '../../assets/icons/couch.png'
// import KEY_ICON from '../../assets/icons/key.png'
// import LEAF_ICON from '../../assets/icons/leaf.png'

// const book = {
//   proto: [Link, Text, Box],
//   style: styleBook,
//   props: {
//     flexAlign: 'center center',
//     size: 'A',
//     text: 'BOOK',
//     gap: 'A',
//     padding: 'Z2 B1',
//     target: '_blank'
//   },

//   icon: {
//     proto: Img
//   }
// }

// const roomTab = {
//   proto: [Link, Box],
//   style,
//   props: {
//     flexAlign: 'center center',
//     padding: 'C'
//   },

//   on: {
//     click: (event, element, state) => {
//       state.update({ activeLink: element.key })
//       element.parent.parent.parent.rooms.update({
//         style: {
//           // transitionDelay: '5s',
//           // animationName: roomsContainer,
//           // animationDuration: '3s',
//           // animationTimingFunction: 'ease-in-out',
//           minHeight: `${800 / 16}em`
//         }
//       })
//       console.log(state.activeImage)
//     }
//   },

//   class: {
//     show: (element, state) => state.activeLink === element.key ? {
//       flex: '3 !important',
//       zIndex: 60,
//       '> div': {
//         backgroundAttachment: 'fixed !important',
//         filter: 'brightness(20%) grayscale(50%)'
//       },
//       '> p': { opacity: 1 },
//       '> a': { opacity: '.85' }
//     }
//       : {
//         flex: 1
//       }
//     // show2: (element, state) => state.activeTab ? { transform: 'translateX(200px)' } : { transform: 'translateX(-200px)' }
//     // show2: (element, state) => state.activeTab === true ? { transform: 'translateX(1000px)' } : { transform: 'translateX(-1000px)' }
//   },
//   image: {},
//   p: {},
//   book: { proto: book }
// }

// export const tabBallerina = {
//   proto: roomTab,
//   props: { href: '#ballerina' },

//   style: {
//     '&::after': {
//       content: '"balerina"'
//     }
//   },

//   image: {
//     style: { backgroundImage: 'url(' + BALLERINA_TAB_IMG + ')' }
//   },
//   p: {
//     proto: ballerina
//   },
//   book: {
//     props: { href: `https://www.airbnb.com/rooms/52732503?source_impression_id=p3_1645550353_mMXc6HH3zziZ95lR` },
//     icon: {
//       style: {
//         width: '20px',
//         height: '20px'
//       },
//       props: {
//         src: BALLERINA_ICON
//       }
//     }
//   }
// }

// export const tabRedBrick = {
//   proto: roomTab,
//   props: { href: '#redBrick' },

//   style: {
//     '&::after': {
//       content: '"Red Brick"'
//     }
//   },

//   image: {
//     style: { backgroundImage: 'url(' + REDBRICK_TAB_IMG + ')' }
//   },
//   p: { proto: redBrick },
//   book: {
//     props: { href: 'https://www.airbnb.com/rooms/52610522?source_impression_id=p3_1645550412_uPtKLs8OU5g3l%2Fjw' },
//     icon: {
//       style: {
//         width: '25px',
//         height: '20px'
//       },
//       props: {
//         src: BRICKS_ICON
//       }
//     }
//   }
// }

// export const tabYellowCouch = {
//   proto: roomTab,
//   props: { href: '#yellowCouch' },
//   style: {
//     flex: 1,
//     '&::after': {
//       content: '"yellow couch"'
//     }
//   },

//   image: {
//     style: { backgroundImage: 'url(' + YELLOWCOUCH_TAB_IMG + ')' }
//   },
//   p: {
//     proto: yellowCouch
//   },
//   book: {
//     props: { href: 'https://www.airbnb.com/rooms/52611151?source_impression_id=p3_1645550425_4DUFFaIG0wB3DIEA' },
//     icon: {
//       style: {
//         width: '25px',
//         height: '20px'
//       },
//       props: {
//         src: COUCH_ICON
//       }
//     }
//   }
// }

// export const tabRetro = {
//   proto: roomTab,
//   props: { href: '#retro' },
//   style: {
//     flex: 1,
//     '&::after': {
//       content: '"retro"'
//     }
//   },

//   image: {
//     style: { backgroundImage: 'url(' + RETRO_TAB_IMG + ')' }
//   },
//   p: {
//     proto: yellowCouch
//   },
//   book: {
//     props: { href: 'https://www.airbnb.com/rooms/52611151?source_impression_id=p3_1645550425_4DUFFaIG0wB3DIEA' },
//     icon: {
//       style: {
//         width: '25px',
//         height: '20px'
//       },
//       props: {
//         src: KEY_ICON
//       }
//     }
//   }
// }

// export const tabGreenForest = {
//   proto: roomTab,
//   props: { href: '#greenForest' },
//   style: {
//     flex: 1,
//     '&::after': {
//       content: '"green forest"'
//     }
//   },

//   image: {
//     style: { backgroundImage: 'url(' + GREENFOREST_TAB_IMG + ')' }
//   },
//   p: {
//     proto: yellowCouch
//   },
//   book: {
//     props: { href: 'https://www.airbnb.com/rooms/52611151?source_impression_id=p3_1645550425_4DUFFaIG0wB3DIEA' },
//     icon: {
//       style: {
//         width: '25px',
//         height: '20px'
//       },
//       props: {
//         src: LEAF_ICON
//       }
//     }
//   }
// }
