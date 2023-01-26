'use strict'
import { Flex } from 'smbls'
import { Menu, Header, Footer } from '../../components'

import { Residence, ServiceFacility, Mission, Apartments, Wine, feedBacks, Location } from '../../sections'

import { deopacity } from '../../animations'
import { banner } from './banner'

const state = {
  activeMenu: false,
  activeMenuItem: 0,
  activeTab: 0,
  activeImage: 0,
  offers: false,
  back: true,
  tabs: 0
}

const header = {
  extend: Header,
  logoMenuButton: {
    logoLink: {}
  },
  navigation: {
    back: {},
    nav: {
      ...[
        { props: { text: 'residence', href: '#residence' } },
        { props: { text: 'servises & facilities', href: '#features' } },
        { props: { text: 'apartments', href: '#apartments' } },
        { props: { text: 'location', href: '#location' } }
      ]
    }
  }
}

export const props = {
  position: 'relative',
  background: 'cream2',
  flow: 'column',
  width: '100%',
  height: '100%',
  // gap: 'E',
  style: {
    mixBlendMode: 'screen',
    flex: 1,
    overflowX: 'hidden',
    overflowY: 'auto',
    scrollBehavior: 'smooth',
    '::-webkit-scrollbar': { display: 'none' }
  },

  ':after': {
    content: '""',
    boxSize: '100% 100%',
    background: 'linear-gradient(rgba(0 , 0, 0, 1), rgba(0, 0, 0, 1))',
    opacity: '0',
    position: 'absolute',
    pointerEvens: 'none',
    style: {
      animationName: deopacity,
      animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)',
      animationDuration: '5s'
    }
  }
}

export default {
  extend: Flex,
  state,
  props,
  // attr: { id: 'residence' },

  banner,
  header,
  Menu,
  Residence,
  ServiceFacility,
  Mission,
  Apartments,
  Wine,
  feedBacks,
  Location,
  Footer
}
