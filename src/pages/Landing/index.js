'use strict'
import { Box, Link, Text } from '@symbo.ls/symbols'

import { Logo } from '../../components'

import SOLOLAKI_JPG from '../../assets/images/CoverPage/sololaki.jpg'
import RUSTAVELI_JPG from '../../assets/images/CoverPage/rustaveli.jpg'

import style, { styleLink, styleheading } from './style'

const Page = {
  props: {
    flexAlign: 'center center',
    position: 'relative'
  }
}

const logo = {
  proto: Logo,
  props: {
    position: 'absolute'
  },
  style: { transform: 'scale(1.1)' }
}

const link = {
  proto: [Link, Box],
  class: [styleLink],
  props: {
    minHeight: '100%',
    padding: '0 0 E 0'
  }
}

const heading = {
  tag: 'h4',
  proto: [Text, Box],
  props: {
    color: 'cream .65',
    size: 'B'
  },
  class: [styleheading]
}

const underConstruction = {
  tag: 'span',
  proto: [Text, Box],
  props: {
    text: 'under construction',
    position: 'absolute',
    size: 'Z',
    color: 'orange',
    bottom: '5px',
    left: '16px'
  },
  style: {
    textTransform: 'initial',
    whiteSpace: 'nowrap',
    fontWeight: '300',
    letterSpacing: '.5px'
  }

}
const Sololaki = {
  proto: link,
  style: {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .85)),url(' + SOLOLAKI_JPG + ')'
  },
  props: {
    flexAlign: 'flex-end flex-end'
  },
  heading: {
    proto: heading,
    props: {
      text: 'sololaki',
      padding: 'A1 Z1 A1 A1'
    }
  }
}

const Rustaveli = {
  proto: link,
  style: {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .85)), url(' + RUSTAVELI_JPG + ')'
  },
  props: {
    flexAlign: 'flex-end flex-start'
  },
  heading: {
    proto: heading,
    props: {
      text: 'rustaveli',
      padding: 'A1 C A1 Z1',
      position: 'relative'
    },
    underConstruction
  }
}

export default {
  style,
  proto: [Box, Page],

  Sololaki,
  Rustaveli,
  logo
}

// import { Logo } from '../../components'
// import { logoB } from '../../components/Logo'

// import RUSTAVELI_JPG from '../../assets/images/coverPage/rustaveli.jpg'
// import SOLOLAKI_JPG from '../../assets/images/coverPage/sololaki.jpg'

// import RUSTAVELI_HOVER_JPG from '../../assets/images/coverPage/rustaveli-hover.jpg'
// import SOLOLAKI_HOVER_JPG from '../../assets/images/coverPage/sololaki-hover.jpg'

// import style, { styleLink, styleLogo, styleLogo2, styleheading } from './style'

// const heading = {
//   tag: 'h3',
//   proto: [Block, Text],
//   props: { size: 'B' },
//   class: [styleheading]
// }

// const Sololaki = {
//   proto: [Link, Block],
//   class: [styleLink],
//   props: { href: './Sololaki' },
//   style: {
//     backgroundImage: 'url(' + SOLOLAKI_JPG + ')',
//     '@media only screen and (min-width: 1225px)': {
//       justifyContent: 'flex-end',
//       alignItems: 'flex-end',
//       '&:hover': {
//         backgroundImage: 'url(' + SOLOLAKI_HOVER_JPG + ')',
//         backgroundPosition: `top left -${100 / 16}em`
//       },

//       '> h3': { padding: `0 ${10 / 18}em ${70 / 18}em 0` }
//     }
//   },

//   caption: {
//     proto: heading,
//     props: { text: 'sololaki' }
//   }
// }

// const Rustaveli = {
//   proto: [Link, Block],
//   class: [styleLink],
//   // props: {href: './Rustaveli',},
//   style: {
//     backgroundImage: 'url(' + RUSTAVELI_JPG + ')',
//     cursor: 'auto',
//     '@media only screen and (min-width: 1225px)': {
//       alignItems: 'flex-end',
//       justifyContet: 'flex-start',

//       '&:hover': {
//         backgroundImage: 'url(' + RUSTAVELI_HOVER_JPG + ')',
//         backgroundPosition: `top left ${100 / 16}em`
//       },
//       '&:not(:hover)': { border: 'none' },

//       '> h3': { padding: `0 0 ${70 / 18}em ${10 / 18}em` }
//     }
//   },
//   // on: {
//   //   mouseover: (event, element, state) => {
//   //     element.update({ style: { border: '30px solid red' } })
//   //   }

//   // },

//   caption: {
//     proto: heading,
//     text: 'rustaveli',
//     span: {
//       proto: Text,
//       props: {
//         text: 'under construction',
//         size: 'Z'
//       }
//     }
//   }
// }
// const logo = {
//   proto: Logo,
//   style: styleLogo
// }

// const logo2 = {
//   proto: logoB,
//   style: styleLogo2
// }

// export default {
//   proto: [Block],
//   style,
//   state: {
//     underConstruction: false
//   },

//   Sololaki,
//   Rustaveli,
//   logo,
//   logo2
// }
