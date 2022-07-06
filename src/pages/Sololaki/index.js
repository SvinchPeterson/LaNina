'use strict'
import { Box } from '@symbo.ls/symbols'
import { HeaderMobile, Menu, Header, Footer } from '../../components'
import { Building, Entrence, Apartments, Wine, Location, Contact, placeFeature } from '../../articles'
import { banner } from './banner'

import { opacity } from '../../animations'

const container = {
  proto: Box,
  props: {
    position: 'relative',
    background: 'cream2',
    flexFlow: 'column',
    gap: 'C2'
  },
  style: {
    flex: 1,
    overflowX: 'hidden',
    overflowY: 'auto',
    scrollBehavior: 'smooth',
    margin: '0 auto',
    animationName: opacity,
    animationDuration: '2s',
    animationTimingFunction: 'cubic-bezier(.17,.61,.3,.71)',
    // border: '5px solid green',
    '> *': {
      // border: '10px solid black',
      // boxSizing: 'border-box'
      // height: '100%'
    }
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
  placeFeature,
  Entrence,
  Apartments,
  Wine,
  Location,
  Footer
}
