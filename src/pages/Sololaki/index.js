'use strict'
import { Flex } from 'smbls'
import { Menu, Header, Footer } from '../../components'

import { Residence, ServiceFacility, Mission, Apartments, Wine, feedBacks, Location } from '../../sections'
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
  props: {
    logo: {
      title: { display: 'none' }
    },
    navBar: {
      childProps: { color: 'white' }
    },
    menuButton: {
      content: {
        childProps: { background: 'cream' }
      }
    }
  }
}

export const props = {
  position: 'relative',
  background: 'cream2',
  flow: 'column',
  width: '100%',
  height: '100%',
  style: {
    mixBlendMode: 'screen',
    flex: 1,
    overflowX: 'hidden',
    overflowY: 'auto',
    scrollBehavior: 'smooth',
    '::-webkit-scrollbar': { display: 'none' }
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
  // Residence,
  ServiceFacility,
  Mission,
  Apartments,
  Wine,
  feedBacks,
  Location,
  Footer
}
