'use strict'
import { HeaderMobile, Menu, Header, Footer } from '../../components'
import { Building, Entrence, Apartments, Wine, Location, placeFeature, feedBacks } from '../../articles'
import { banner } from './banner'

import { opacity } from '../../animations'

const state = {
  activeMenu: false,
  activeMenuItem: 0,
  activeTab: 0,
  activeImage: 0,
  offers: false,
  back: true

}

const props = {
  position: 'relative',
  background: 'cream2',
  flexFlow: 'column',
  gap: '0',
  width: '100%',
  height: '100%',
  css: {
    flex: 1,
    overflowX: 'hidden',
    overflowY: 'auto',
    scrollBehavior: 'smooth',
    margin: '0 auto',
    animationName: opacity,
    animationDuration: '2s',
    animationTimingFunction: 'cubic-bezier(.17,.61,.3,.71)',
    fontFamily: 'Helvetica Neue'
  }
}

export default {
  state,
  props,

  banner,
  Header,
  HeaderMobile,
  Menu,
  Building,
  placeFeature,
  Entrence,
  Apartments,
  Wine,
  feedBacks,
  Location,
  Footer
}
