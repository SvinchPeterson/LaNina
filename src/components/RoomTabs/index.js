'use strict'

import { Box, Link, Img, Text } from '@symbo.ls/symbols'

import { ballerina, redBrick, yellowCouch, greenForest, retro } from '../../texts'

import BALLERINA_JPG from '../../assets/images/ballerina/ballerinaTab.jpg'
import REDBRICK_JPG from '../../assets/images/redBrick/redbrickTab.jpg'
import YELLOWCOUCH_JPG from '../../assets/images/yellowCouch/yellowcouchTab.jpg'
import GREENFOREST_JPG from '../../assets/images/greenForest/greenforestTab.jpg'
import RETRO_JPG from '../../assets/images/retro/retroTab.jpg'

import DRESS_PNG from '../../assets/icons/dress.png'
import BRICKS_PNG from '../../assets/icons/bricks2.png'
import SOFA_PNG from '../../assets/icons/sofa.png'
import LEAF_PNG from '../../assets/icons/leaf.png'
import VINYL_PNG from '../../assets/icons/vinyl.png'

import { styleRoomTab } from './style'

const book = {
  proto: [Link, Box],
  props: {
    flexAlign: 'center center',
    flexFlow: 'row',
    bottom: '10%',
    left: '50%',
    padding: 'Z1 A1',
    gap: 'Y'
  },
  icon: {
    proto: [Img, Box],
    props: { boxSize: 'A1 A1' }
  },
  span: {
    proto: [Text, Box],
    props: {
      text: 'book',
      color: 'cream',
      size: 'B'
    }
  }
}

const roomTab = {
  proto: [Link, Box],
  class: [styleRoomTab],
  props: {
    flexFlow: 'column',
    flexAlign: 'center flex-start',
    padding: 'D A',
    position: 'relative'
  },
  image: {
    proto: Box,
    props: {
      boxSize: '100% 100%',
      position: 'absolute',
      top: '0',
      left: '0'
    }
  },
  h3: {
    proto: [Text, Box],
    props: {
      size: 'B',
      color: 'cream'
    }
  },
  p: {
    proto: [Text, Box],
    props: {
      color: 'cream .75',
      padding: 'D 0 0 0'

    }
  },
  book: {
    proto: book
  }
}

export const tabBallerina = {
  proto: roomTab,
  image: {
    style: {
      backgroundImage: 'radial-gradient(rgba(0, 0, 0, .15), rgba(0, 0, 0, .45)),url(' + BALLERINA_JPG + ')',
      '&:hover': { backgroundImage: 'radial-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, .75)),url(' + BALLERINA_JPG + ')' }
    }
  },
  h3: { props: { text: 'ballerina' } },
  p: { proto: ballerina },
  book: { icon: { props: { src: DRESS_PNG } } }
}

export const tabRedBrick = {
  proto: roomTab,
  image: {
    style: {
      backgroundImage: 'radial-gradient(rgba(0, 0, 0, .15), rgba(0, 0, 0, .45)), url(' + REDBRICK_JPG + ')',
      '&:hover': { backgroundImage: 'radial-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, .75)),url(' + REDBRICK_JPG + ')' }
    }
  },
  h3: { props: { text: 'red brick' } },
  p: { proto: redBrick },
  book: { icon: { props: { src: BRICKS_PNG } } }
}

export const tabYellowCouch = {
  proto: roomTab,
  image: {
    style: {
      backgroundImage: 'radial-gradient(rgba(0, 0, 0, .15), rgba(0, 0, 0, .45)), url(' + YELLOWCOUCH_JPG + ')',
      '&:hover': { backgroundImage: 'radial-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, .75)),url(' + YELLOWCOUCH_JPG + ')' }
    }
  },
  h3: { props: { text: 'yellow couch' } },
  p: { proto: yellowCouch },
  book: { icon: { props: { src: SOFA_PNG } } }
}

export const tabGreenForest = {
  proto: roomTab,
  image: {
    style: {
      backgroundImage: 'radial-gradient(rgba(0, 0, 0, .15), rgba(0, 0, 0, .45)), url(' + GREENFOREST_JPG + ')',
      '&:hover': { backgroundImage: 'radial-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, .75)),url(' + GREENFOREST_JPG + ')' }
    }
  },
  h3: { props: { text: 'green forest' } },
  p: { proto: greenForest },
  book: { icon: { props: { src: LEAF_PNG } } }
}

export const tabRetro = {
  proto: roomTab,
  image: {
    style: {
      backgroundImage: 'radial-gradient(rgba(0, 0, 0, .15), rgba(0, 0, 0, .45)), url(' + RETRO_JPG + ')',
      '&:hover': { backgroundImage: 'radial-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, .75)),url(' + RETRO_JPG + ')' }
    }
  },
  h3: { props: { text: 'retro' } },
  p: { proto: retro },
  book: { icon: { props: { src: VINYL_PNG } } }
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
