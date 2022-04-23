'use strict'
import { Box, Link, Text, Flex } from '@symbo.ls/symbols'

import { Logo, Logo2 } from '../../components'

import { opacity } from '../../animations'

import SOLOLAKI_JPG from '../../assets/images/CoverPage/sololaki.jpg'
import RUSTAVELI_JPG from '../../assets/images/CoverPage/rustaveli.jpg'
import SOLOLAKI_TABLET_JPG from '../../assets/images/CoverPage/sololaki-tablet.jpg'
import RUSTAVELI_TABLET_JPG from '../../assets/images/CoverPage/rustaveli-tablet.jpg'
import SOLOLAKI_MOBILE_JPG from '../../assets/images/CoverPage/sololaki-mobile.jpg'
import RUSTAVELI_MOBILE_JPG from '../../assets/images/CoverPage/rustaveli-mobile.jpg'

const PropsLogo = {
  props: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  },
  style: {
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none'
  }
}

const logo = {
  proto: [Logo, PropsLogo],
  style: {
    '@media only screen and (max-width: 1225px)': { display: 'none' }
  }
}

const logo2 = {
  proto: [Logo2, PropsLogo],
  style: {
    '@media only screen and (min-width: 1225px)': { display: 'none' }
  }
}

const heading = {
  tag: 'h4',
  proto: [Text, Box],
  props: {
    color: 'cream .75'
  },

  style: {
    textTransform: 'uppercase',
    zIndex: 2,
    '@media only screen and (min-width: 1225px)': {
      transition: 'font-weight .8s ease-in-out, letter-spacing .8s ease-in-out, border .8s ease-in-out',
      fontWeight: 500,
      letterSpacing: '2px'
    },
    '@media only screen and (max-width: 1225px)': {
      fontSize: '2em',
      color: 'rgba(244, 233, 217, 1)',
      fontWeight: 700
    }
  }
}
const underConstruction = {
  tag: 'span',
  proto: [Text, Box],
  text: 'under construction',
  props: {
    color: 'orange2',
    position: 'absolute'
  },
  style: {
    whiteSpace: 'nowrap',
    display: 'block',
    '@media only screen and (min-width: 1225px)': {
      fontSize: `${12 / 16}em`,
      paddingTop: `${3 / 14}em`,
      opacity: 0
    },
    '@media only screen and (max-width: 1225px)': { fontSize: `${16 / 32}em` },
    fontWeight: 700,
    textTransform: 'uppercase'
  }
}

const link = {
  proto: [Link, Box, Flex],
  style: {
    flex: 1,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxSizing: 'border-box',
    animationName: opacity,
    animationDuration: '2s',
    animationTimingFunction: 'ease-in-out',
    textDecoration: 'none',
    position: 'relative',
    '&:before': {
      content: "''",
      width: '100%',
      height: '100%',
      position: 'absolute',
      background: 'linear-gradient(rgba(42, 81, 61, .25), rgba(42, 81, 61, .85))',
      top: 0,
      left: 0,
      transition: 'opacity 1s ease-in-out'
    },
    '@media only screen and (min-width: 1225px)': {
      paddingBottom: `${100 / 16}em`,
      transition: 'flex .8s ease-in-out, background-position .8s ease-in-out',
      backgroundAttachment: 'fixed',
      alignItems: 'flex-end',
      '&:after': {
        content: "''",
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: 0,
        background: 'linear-gradient(rgba(42, 81, 61, .1), rgba(42, 81, 61, .55))',
        top: 0,
        left: 0,
        transition: 'opacity 1s ease-in-out'
      },
      '&:hover:after': { opacity: '1' },
      '&:hover:before': {
        opacity: 0
      },
      '&:hover': { flex: 8 },
      '&:hover > h4': {
        color: 'rgba(244, 233, 217, 1)',
        fontWeight: 700,
        letterSpacing: '2.5px'
      }
    },
    '@media only screen and (max-width: 1225px)': {
      alignItems: 'center',
      justifyContent: 'center'
      // '&:before': {
      //   content: "''",
      //   width: '100%',
      //   height: '100%',
      //   position: 'absolute',
      //   background: 'linear-gradient(rgba(42, 81, 61, .25), rgba(42, 81, 61, .65))',
      //   top: 0,
      //   left: 0,
      //   transition: 'opacity 1s ease-in-out'
      // }
    }
  },

  heading: { proto: heading }
}

const sololaki = {
  proto: link,
  props: { href: '/Sololaki' },
  style: {
    '@media only screen and (min-width: 1225px)': {
      backgroundImage: 'url(' + SOLOLAKI_JPG + ')',
      justifyContent: 'flex-end',
      paddingRight: `${10 / 16}em`,
      '&:hover': {
        backgroundPosition: 'center left -100px'
      }
    },

    '@media only screen and (max-width: 1225px)': {
      backgroundImage: 'url(' + SOLOLAKI_TABLET_JPG + ')'

    },
    '@media only screen and (max-width: 1024px)': {
      '&:before': { background: 'linear-gradient(rgba(42, 81, 61, .25), rgba(42, 81, 61, .65)) !important' }

    },

    '@media only screen and (max-width: 768px)': {
      backgroundImage: 'url(' + SOLOLAKI_MOBILE_JPG + ')'
    }
  },
  heading: {
    text: 'sololaki'
  }
}

const rustaveli = {
  proto: link,
  style: {
    '@media only screen and (min-width: 1225px)': {
      backgroundImage: 'url(' + RUSTAVELI_JPG + ')',
      paddingLeft: `${10 / 16}em`,
      '&:hover': {
        backgroundPosition: 'center left 100px'
      },
      '&:hover > h4 > span': {
        opacity: 1,
        transition: 'opacity .5s ease-in-out'
      }
    },

    '@media only screen and (max-width: 1225px)': {
      backgroundImage: 'url(' + RUSTAVELI_TABLET_JPG + ')'
      // '&:before': { background: 'linear-gradient(to top, rgba(42, 81, 61, .25), rgba(42, 81, 61, .65)) !important' }
      // '&:after': {
      //   content: "''",
      //   width: '100%',
      //   height: '100%',
      //   position: 'absolute',
      //   background: 'linear-gradient(to top, rgba(42, 81, 61, .25), rgba(42, 81, 61, .65))',
      //   top: 0,
      //   left: 0,
      //   transition: 'opacity 1s ease-in-out'
      // }
    },
    '@media only screen and (max-width: 1024px)': {
      '&:before': { background: 'linear-gradient(to top, rgba(42, 81, 61, .25), rgba(42, 81, 61, .65)) !important' }
    },
    '@media only screen and (max-width: 768px)': {
      backgroundImage: 'url(' + RUSTAVELI_MOBILE_JPG + ')'
    }
  },
  heading: {
    text: 'rustaveli',
    props: { position: 'relative' },
    underConstruction
  }
}
const Container = {
  proto: [Box, Flex],
  props: {
    boxSize: '100% 100%',
    background: 'green'
  },
  style: {
    position: 'relative',
    border: '1px solid black',
    overflow: 'hidden',
    boxSizing: 'border-box',
    '@media only screen and (max-width: 1024px)': {
      flexFlow: 'column'
    }
  }
}
export default {
  proto: Container,

  sololaki,
  rustaveli,
  logo,
  logo2
}
