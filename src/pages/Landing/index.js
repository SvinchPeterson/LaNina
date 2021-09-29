'use strict'
import { Block, Button, Img, Text, Flex, Shape } from '@rackai/symbols'

import Logo from '../../assets/logo.png'
import NEWYORK_JPEG from '../../assets/newyork.jpeg'
import AMSTERDAM_JPEG from '../../assets/amsterdam.jpeg'
import style, { center, styleContent, rightBorderRadius, leftBorderRadius } from './style'

// const logo = {
//   proto: Img,
//   props: { src: Logo }
// }

// const logo2 = {
//   proto: Img,
//   props: { src: Logo }
// }

const caption = {
  tag: 'caption',
  proto: [Block, Text],
  props: {
    text: '',
    size: 'D',
    spacing: 'X A'
  },
  style: {
    textTransform: 'capitalize'
  }
}

const content = {
  style: styleContent,
  proto: [Block, Flex, Shape],
  props: {
    round: 'B'
  },

  childProto: {
    proto: [Block, Flex],
    style: {
      flex: '.5',
      backgroundSize: 'cover',
      filter: 'grayscale(100%)'
    },

    door: {
      proto: [Shape],
      style: {
        flex: 1
      }
    }
  },
  ...[
    {
      class: [leftBorderRadius],
      style: {
        backgroundImage: 'url(' + NEWYORK_JPEG + ')'
      },

      door: {
        class: [leftBorderRadius]
      }
    },
    {
      class: [rightBorderRadius],
      style: {
        background: 'url(' + AMSTERDAM_JPEG + ')'
      },
      door: {
        class: [rightBorderRadius]
      }
    }
  ]
}

// const content = {
//   style: {
//     flex: 1,
//     display: 'flex',
//     borderRadius: '20px',
//     // boxShadow: '-1px -2px 20px rgba(0, 0, 0, .5)',
//     filter: 'drop-shadow(6px 6px 6px rgba(0, 0, 0, .6))'

//   },
//   childProto: {
//     proto: Block,
//     style: {
//       height: '100%',
//       position: 'relative',
//       display: 'flex',
//       boxSizing: 'border-box',
//       flex: '.5',
//       backgroundSize: 'cover',
//       filter: 'grayscale(100%)'
//     }
//   },
//   ...[
//     {
//       style: {
//         backgroundImage: 'url(' + NEWYORK_JPEG + ')'

//       },

//       doorContainer: {
//         style: {
//           width: '100%',
//           height: '100%',
//           transition: 'all .4s linear',
//           transformOrigin: 'left',
//           display: 'flex',
//           position: 'absolute',
//           borderTopLeftRadius: '20px',
//           borderBottomLeftRadius: '20px',
//           background: 'rgba(194, 217, 219, .3)',
//           backdropFilter: 'blur(2px)',
//           top: 0,
//           left: 0,
//           overflow: 'hidden',

//           '&:hover': {
//             transform: 'perspective(3000px) translateZ(0px) translateY(0px) rotateY(50deg)'
//           }
//         },

//         logoContainer: {
//           style: {
//             alignSelf: 'center',
//             marginLeft: 'auto',
//             marginRight: '-60px',
//             position: 'relative',
//             opacity: '.6',
//             '&::after': {
//               content: "''",
//               width: '50%',
//               height: '100%',
//               position: 'absolute',
//               top: 0,
//               right: 0
//             },
//             '> img': {
//               height: '150px',
//               width: '120px',
//               display: 'block'
//             }
//           },
//           logo
//         }
//       }
//     },

//     {
//       style: {
//         background: 'url(' + AMSTERDAM_JPEG + ')',
//         borderTopRightRadius: '20px',
//         borderBottomRightRadius: '20px'

//       },
//       doorContainer: {
//         style: {
//           width: '100%',
//           height: '100%',
//           transition: 'all .4s linear',
//           transformOrigin: 'right',
//           cursor: 'pointer',
//           borderTopRightRadius: '20px',
//           borderBottomRightRadius: '20px',
//           display: 'flex',
//           overflow: 'hidden',
//           background: 'rgba(194, 217, 219, .3)',
//           '&:hover': {
//             transform: 'perspective(3000px) translateZ(0px) translateY(0px) rotateY(-40deg)'
//           }
//         },
//         logoContainer: {
//           style: {
//             alignSelf: 'center',
//             marginRight: 'auto',
//             marginLeft: '-60px',
//             position: 'relative',
//             opacity: '.6',
//             '&::before': {
//               content: "''",
//               width: '50%',
//               height: '100%',
//               background: 'white',
//               position: 'absolute',
//               top: 0,
//               left: 0

//             },
//             '> img': {
//               height: '150px',
//               width: '120px'
//             }
//           },
//           logo2
//         }
//       }

//     }
//   ]
// }

export default {
  style,
  proto: [Block, Flex],
  props: {
    spacing: 'A B1'
  },

  cap: {
    proto: caption,
    props: { text: 'sololaki' },
    style: { textAlign: 'left' }
  },

  content,

  cap2: {
    proto: caption,
    props: { text: 'rustaveli' },
    style: { textAlign: 'right' }
  }
}
