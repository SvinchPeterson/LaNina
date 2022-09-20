'use strict'
import { HeaderMobile, Menu, Header, Footer } from '../../components'

import { Residence, placeFeature, Entrence, Apartments, Wine, feedBacks, Location } from '../../sections'
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

const props = {
  position: 'relative',
  background: 'cream2',
  flexFlow: 'column',
  gap: '0',
  width: '100%',
  height: '100%',
  style: {
    flex: 1,
    overflowX: 'hidden',
    overflowY: 'auto',
    scrollBehavior: 'smooth',
    margin: '0 auto'
  }
}

export default {
  state,
  props,

  banner,
  Header,
  HeaderMobile,
  Menu,
  Residence,
  placeFeature,
  Entrence,
  Apartments,
  Wine,
  feedBacks,

  Location,
  Footer
}
