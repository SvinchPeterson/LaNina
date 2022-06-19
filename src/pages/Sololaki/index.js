'use strict'
import { Box } from '@symbo.ls/symbols'
import { HeaderMobile, Menu, Header, Footer } from '../../components'
import { Apartments, Wine, Location, Building, Entrence, Contact } from '../../articles'
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
    animationTimingFunction: 'ease-in-out'
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
