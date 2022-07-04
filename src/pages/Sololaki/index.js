'use strict'
import { Box } from '@symbo.ls/symbols'
import { HeaderMobile, Menu, Header, Footer } from '../../components'
import { Building, Entrence, Apartments, Wine, Location, Contact } from '../../articles'
import { banner } from './banner'

import { opacity } from '../../animations'

const container = {
  proto: Box,
  props: {
    position: 'relative',
    background: 'cream2'
  },
  style: {
    flex: 1,
    overflowX: 'hidden',
    overflowY: 'auto',
    scrollBehavior: 'smooth',
    margin: '0 auto',
    animationName: opacity,
    animationDuration: '2s',
    animationTimingFunction: 'cubic-bezier(.17,.61,.3,.71)'
  }
}
export default {
  state: {
    activeMenu: false,
    activeMenuItem: 0,
    activeTab: 0,
    activeImage: 0,
    offers: false,
    back: true
  },

  proto: container,

  banner,
  Header,
  HeaderMobile,
  Menu,
  Building,
  Entrence,
  Apartments,
  Wine,
  Location,
  Contact,
  Footer
}
