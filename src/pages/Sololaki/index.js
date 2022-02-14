'use strict'

import { Block, Text, Flex } from '@rackai/symbols'

import { Story, Apartment, Services, Contact } from '../../sections'

import { Header, SideMenu } from '../../components'

import style from './style'

const bannerHeading = {
  proto: Block,
  props: {
    flexFlow: 'column',
    flexAlign: 'center flex-start'
  },
  h2: {
    proto: Text,
    props: {
      text: 'La Nina Residence',
      size: 'H'
    }
  },
  span: {
    proto: Text,
    props: {
      text: 'sololaki',
      size: 'D'
    }
  },
  p: {
    proto: [Block, Text],
    props: {
      text: 'We are ordinary, becoming extraordinary',
      size: 'B',
      padding: 'C 0 0 0'
    }
  }
}

const banner = {
  proto: [Block, Flex],

  image: { tag: 'span' },
  bannerHeading,

  // lanina: {
  //   proto: laninaResidence,
  //   props: {
  //     flexFlow: 'column',
  //     flexAlign: 'center flex-start'
  //   },
  //   style: {
  //     color: 'rgba(243, 231, 219, 1)'
  //   },

  //   h4: {
  //     props: {
  //       text: 'La Nina Residence',
  //       size: 'G'
  //     },
  //     style: {
  //       letterSpacing: '2px',
  //       fontWeight: '600',
  //       opacity: '.85'
  //     }
  //   },
  //   span: {
  //     props: {
  //       text: 'SOLOLAKI',
  //       size: 'C'
  //     },
  //     style: {
  //       letterSpacing: '10px',
  //       opacity: '.65'
  //     }
  //   }
  // },
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
}
