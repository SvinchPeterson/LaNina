'use strict'
import { Box, Link, Text } from '@symbo.ls/symbols'

import { Logo } from '../../components'

import SOLOLAKI_JPG from '../../assets/images/CoverPage/sololaki.jpg'
import RUSTAVELI_JPG from '../../assets/images/CoverPage/rustaveli.jpg'

import style, { styleLink } from './style'

const logo = {
  proto: Logo,
  props: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  },
  style: {
    transform: 'translate(-50%, -50%)'
  }
}

const Heading = {
  proto: [Box, Text],
  props: {
    color: 'green'
  }
}

const Sololaki = {
  proto: [Link, Box],
  class: [styleLink],
  style: {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .85)),url(' + SOLOLAKI_JPG + ')',
    '&:hover': {
      backgroundPosition: `top left -${150 / 16}em`,
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .35)),url(' + SOLOLAKI_JPG + ')'
    }
  },

  heading: {
    proto: Heading,
    props: { text: 'sololaki' }
  }
}

const Rustaveli = {
  proto: [Link, Box],
  class: [styleLink],
  style: {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .85)), url(' + RUSTAVELI_JPG + ')',
    '&:hover': {
      backgroundPosition: `top left ${150 / 16}em`,
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .25)), url(' + RUSTAVELI_JPG + ')'
    }
  },

  heading: {
    proto: Heading,
    props: { text: 'rustaveli' }
  }
}

export default {
  proto: Box,
  style,
  props: {
    flexAlign: 'flex-start space-between',
    position: 'relative'
  },

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
