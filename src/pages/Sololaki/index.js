'use strict'

import { Block, Text } from '@rackai/symbols'

import { Story, Apartment, Services, Contact } from '../../sections'
import { Header, SideMenu } from '../../components'

import { laninaResidence } from '../../texts'

import style, { styleBanner } from './style'

const banner = {
  proto: Block,
  props: {
    flexFlow: 'column',
    flexAlign: 'center center',
    gap: 'D'
  },
  style: styleBanner,
  lanina: {
    proto: laninaResidence,
    props: {
      flexFlow: 'column',
      flexAlign: 'center flex-start'
    },
    style: {
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
        size: 'B'
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
      textAlign: 'center',
      fontFamily: 'Avenir Next',
      letterSpacing: '2px',
      color: 'rgba(243, 231, 219, .45)'
    }
  }
}

export default {
  style,
  banner,
  state: {
    active: true
  },
  aside: {
    proto: SideMenu,
    class: {
      show: (element, state) => state.active ? { opacity: 0, height: 0 } : { height: '100%', opacity: 1 },
      show2: (element, state) => state.active ? { nav: { filter: 'blur(2px)', pointerEvents: 'none' } } : { nav: { filter: 'blur(0px)' } }
      // show3: (element, state) => state.active ? { 'nav svg': { opacity: 0, filter: 'blur(3px)' } } : { 'nav svg': { opacity: 0.65, filter: 'blur(0px)' } }

    }
  },
  header: {
    proto: Header,
    input: {
    },
    hmburgerMenuIcon: {
      on: {
        click: (event, element, state) => {
          state.active ? state.update({ active: false }) : state.update({ active: true })
        }
      }
    }
  },
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
