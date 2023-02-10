'use strict'
import { Img, Flex } from 'smbls'

import LEFT_ARROW_BLACK_PNG from '../assets/icons/leftArrow-black.png'
import RIGHT_ARROW_BLACK_PNG from '../assets/icons/rightArrow-black.png'
import DOWN_ARROW_BLACK_PNG from '../assets/icons/downArrow-black.png'
import UP_ARROW_BLACK_PNG from '../assets/icons/upArrow-black.png'

import LEFT_ARROW_CREAM_PNG from '../assets/icons/leftArrow-cream.png'
import RIGHT_ARROW_CREAM_PNG from '../assets/icons/rightArrow-cream.png'
import DOWN_ARROW_CREAM_PNG from '../assets/icons/downArrow-cream.png'
import UP_ARROW_CREAM_PNG from '../assets/icons/upArrow-cream.png'

import LEFT_ARROW_WHITE_PNG from '../assets/icons/leftArrow-white.png'
import RIGHT_ARROW_WHITE_PNG from '../assets/icons/rightArrow-white.png'

const props = {
  align: 'center space-between',
  maxWidth: 'fit-content',
  height: 'fit-content',
  position: 'relative',
  childProps: {
    background: 'transparent',
    opacity: '.75',
    ':hover': { opacity: '1' },
    style: { cursor: 'pointer' },
    arrow: {
      alignSelf: 'center'
    }
  }
}

export const NavArrows = {
  extend: Flex,
  props,
  childExtend: { tag: 'button', arrow: { extend: Img } }
}

export const HorArrowsBor = {
  extend: NavArrows,
  props: {
    gap: 'B',
    position: 'relative',
    childProps: {
      border: 'solid, white .35',
      borderWidth: '.5px',
      boxSize: 'C1 C1',
      round: '100%',
      arrow: { boxSize: ' Y2' }
    }
  }
}

export const HorArrowsBlackBor = {
  extend: HorArrowsBor,
  ...[
    { arrow: { props: { src: LEFT_ARROW_BLACK_PNG } } },
    { arrow: { props: { src: RIGHT_ARROW_BLACK_PNG } } }
  ]
}

export const HorArrowsWhiteBor = {
  extend: HorArrowsBor,
  ...[
    { arrow: { props: { src: LEFT_ARROW_WHITE_PNG } } },
    { arrow: { props: { src: RIGHT_ARROW_WHITE_PNG } } }
  ]
}

export const HorArrows = {
  extend: NavArrows,
  props: {
    gap: 'D',
    position: 'relative',
    ':after': {
      content: '""',
      boxSize: '60% 2px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      round: 'C',
      opacity: '.85'
    },
    childProps: {
      border: 'none',
      arrow: { boxSize: ' Z2' }
    }
  }
}

export const HorArrowsBlack = {
  extend: HorArrows,
  props: { ':after': { background: 'black' } },
  ...[
    { arrow: { props: { src: LEFT_ARROW_BLACK_PNG } } },
    { arrow: { props: { src: RIGHT_ARROW_BLACK_PNG } } }
  ]
}
export const HorArrowsCream = {
  extend: HorArrows,
  props: { ':after': { background: 'cream2' } },
  ...[
    { arrow: { props: { src: LEFT_ARROW_CREAM_PNG } } },
    { arrow: { props: { src: RIGHT_ARROW_CREAM_PNG } } }
  ]
}
export const HorArrowsWhite = {
  extend: HorArrows,
  props: { ':after': { background: 'white' } },
  ...[
    { arrow: { props: { src: LEFT_ARROW_WHITE_PNG } } },
    { arrow: { props: { src: RIGHT_ARROW_WHITE_PNG } } }
  ]
}

export const VerArrows = {
  extend: NavArrows,
  props: {
    ':after': {
      content: '""',
      boxSize: '2px 60%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      round: 'C',
      opacity: '.85'
    }
  }
}

export const VerArrowsBlack = {
  extend: NavArrows,
  props: { ':after': { background: 'black' } },
  ...[
    { arrow: { props: { src: UP_ARROW_BLACK_PNG } } },
    { arrow: { props: { src: DOWN_ARROW_BLACK_PNG } } }
  ]
}
export const VerArrowsCream = {
  extend: NavArrows,
  props: { ':after': { background: 'cream2' } },
  ...[
    { arrow: { props: { src: UP_ARROW_CREAM_PNG } } },
    { arrow: { props: { src: DOWN_ARROW_CREAM_PNG } } }
  ]
}

// export const horizontalArrows = {
//   extend: Flex,
//   props: {
//     ...props,
//     gap: 'D',
//     position: 'relative',
//     ':after': {
//       content: '""',
//       boxSize: '60% 2px',
//       position: 'absolute',
//       top: '50%',
//       left: '50%',
//       transform: 'translate(-50%, -50%)',
//       round: 'C',
//       opacity: '.85'
//     }
//   },
//   childExtend: { tag: 'button', arrow: { extend: [Img, Box] } }
// }

// const verticalArrows = {
//   extend: Flex,
//   props: {
//     ...props,
//     flow: 'column',
//     ':after': { boxSize: '2px 45%' },
//     childProps: { arrow: { boxSize: ' B' } }
//   }
// }

// const borderedHorArrows = {
//   // extend: navigationHorizontalArrows,
//   props: { gap: '0' }
//   // props: {
//   //   gap: '0',
//   //   childProps: {
//   //     boxSize: 'C2 C2',
//   //     round: '100%',
//   //     arrow: { boxSize: ' D' }

//   //   }
//   // }
// }

// export const borderedHorArrowsWhite = {
//   extend: borderedHorArrows,
//   props: {
//     childProps: {
//       border: 'solid, white',
//       borderWidth: '1px',
//       arrow: { boxSize: ' Z' }
//     }
//   },
//   ...[
//     { props: { arrow: { src: LEFT_ARROW_WHITE_PNG } } },
//     { props: { arrow: { src: RIGHT_ARROW_WHITE_PNG } } }
//   ]
// }

// export const NavVerticalArrowsBlack = {
//   extend: navigationVerticalArrows,
//   props: { ':after': { background: 'black' } },

//   ...[
//     { props: { arrow: { src: UP_ARROW_BLACK_PNG } } },

//     { props: { arrow: { src: DOWN_ARROW_BLACK_PNG } } }
//   ]
// }

// export const NavVerticalArrowsCream = {
//   extend: navigationVerticalArrows,
//   props: { ':after': { background: 'cream2' } },

//   ...[
//     { props: { arrow: { src: UP_ARROW_CREAM_PNG } } },

//     { props: { arrow: { src: DOWN_ARROW_CREAM_PNG } } }
//   ]
// }

// export const NavHorizontalArrowsBlack = {
//   extend: navigationHorizontalArrows,
//   props: { ':after': { background: 'black' } },

//   ...[
//     { props: { arrow: { src: LEFT_ARROW_BLACK_PNG } } },

//     { props: { arrow: { src: RIGHT_ARROW_BLACK_PNG } } }
//   ]
// }

// export const NavHorizontalArrowsWhite = {
//   extend: navigationHorizontalArrows,
//   props: { ':after': { background: 'black' } },

//   ...[
//     { props: { arrow: { src: LEFT_ARROW_WHITE_PNG } } },

//     { props: { arrow: { src: RIGHT_ARROW_WHITE_PNG } } }
//   ]
// }
// export const NavHorizontalArrowsCream = {
//   extend: navigationHorizontalArrows,
//   props: { ':after': { background: 'cream2' } },

//   ...[
//     { props: { arrow: { src: LEFT_ARROW_CREAM_PNG } } },

//     { props: { arrow: { src: RIGHT_ARROW_CREAM_PNG } } }
//   ]
// }

// export const NavHorizontalArrowsBlue = {
//   extend: navigationHorizontalArrows,
//   props: { ':after': { background: 'cream2' } },

//   ...[
//     { props: { arrow: { src: LEFT_ARROW_BLUE_PNG } } },

//     { props: { arrow: { src: RIGHT_ARROW_BLUE_PNG } } }
//   ]
// }

// rgba(189, 216, 246, 1)
