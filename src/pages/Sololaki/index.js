'use strict'

import { Block, Text } from '@rackai/symbols'

import { Story, Apartment, Services, Contact } from '../../sections'
import { Header } from '../../components'

import { laninaResidence } from '../../texts'

import style, { styleBannerBackground } from './style'

// const banner = {
//   proto: Block,
//   props: {
//     flexFlow: 'column'
//   },
//   // class: [styleBanner],
//   lanina: {
//     proto: laninaResidence,
//     h4: {
//       props: {
//         text: 'La Nina Residence',
//         size: 'G'
//       }
//     },
//     span: { props: { text: 'SOLOLAKI' } }
//   },

//   p: {
//     proto: [Text, Block],
//     props: {
//       text: 'Be inspired by old city',
//       size: 'B',
//       padding: 'A 0 0 0'
//     }
//   }
// }

const banner = {
  style: styleBannerBackground,
  lanina: {
    proto: laninaResidence,
    props: {
      flexFlow: 'column',
      flexAlign: 'center flex-start'
    },
    style: {
      position: 'absolute',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'rgba(243, 231, 219, 1)'
    },

    h4: {
      props: {
        text: 'La Nina Residence',
        size: 'G'
      },
      style: {
        letterSpacing: '2px',
        fontWeight: '600',
        opacity: '.85'
      }
    },
    span: {
      props: {
        text: 'SOLOLAKI',
        size: 'C'
      },
      style: {
        letterSpacing: '10px',
        opacity: '.65'
      }
    }
  },

  p: {
    proto: Text,
    props: {
      text: 'Be inspired by old city',
      size: 'B'
    },
    style: {
      position: 'absolute',
      top: '55%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontFamily: 'Avenir Next',
      letterSpacing: '2px',
      opacity: '.65'
    }
  }
}

export default {
  style,

  banner,
  Header,
  Story,
  Apartment,
  Services,
  Contact

  // gela: {
  //   proto: Text,
  //   state: {
  //     text: 'gocha',
  //     color: 'red',
  //     style: {
  //       color: 'red',
  //       fontSize: '50px',
  //       cursor: 'pointer',
  //       textAlign: 'center'
  //     }
  //   },
  //   text: (el, s) => s.text,
  //   style: (el, s) => s.style,
  //   on: {
  //     click: (ev, el, s) => {
  //       s.update({ text: 'gela', style: { color: 'blue' } })
  //     }
  //   }
  //   // style: {
  //   //   fontSize: '50px',
  //   //   textAlign: 'center',
  //   //   cursor: 'pointer'
  //   // }
  // }
}
