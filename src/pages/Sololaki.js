'use strict'

import { Flex } from 'smbls'

import { Menu, MenuMobile, Header, Footer } from '../components'

import { banner, residence, servicesFacilities, mission, apartments, wine, feedBacks, location } from '../sections/residenceSections'

import { properties } from './props'

const state = {
  activeMenu: false,
  activeMenuItem: 0,
  activeMobileMenu: false,
  activeTab: 0,
  activeImage: 0,
  offers: false,
  back: true,
  tabs: 0
}

const menu = {
  extend: Menu,
  navBar: {
    class: {
      show: (element, state) => state.activeMenu
        ? { width: `${550 / 16}em` } : { width: '0' }
    },
    childExtend: { on: { click: (event, element, state) => { state.update({ activeMenu: false }) } } },
    ...[
      { props: { text: 'residence', href: '#residence' } },
      { props: { text: 'services & facilities', href: '#service&facilities' } },
      { props: { text: 'apartments', href: '#apartments' } },
      { props: { text: 'location', href: '#location' } }
    ]
  }
}

const menuMobile = {
  extend: MenuMobile,
  navBar: {
    childExtend: { on: { click: (event, element, state) => { state.update({ activeMenu: false, activeMobileMenu: false }) } } },
    ...[
      { props: { text: 'residence', href: '#residence' } },
      { props: { text: 'services & facilities', href: '#service&facilities' } },
      { props: { text: 'apartments', href: '#apartments' } },
      { props: { text: 'location', href: '#location' } }
    ]
  }

}

export const Sololaki = {
  extend: Flex,
  state,
  props: {
    ...properties
  },

  banner,
  Header,
  menu,
  menuMobile,
  residence,
  servicesFacilities,
  mission,
  apartments,
  wine,
  feedBacks,
  location,
  Footer
}
