'use strict'
import { Box } from '@symbo.ls/symbols'
import { HeaderMobile, Menu, Header, Book, Footer } from '../../components'
import { Residence, Apartments, Wine, Location, Building, Entrence, Contact } from '../../articles'
import { banner } from './banner'

import SOLOLAKI2_JPG from '../../assets/images/CoverPage/sololaki.jpg'

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
    // background: 'rgba(244, 233, 217, 1)',
    // border: '10px solid green',
    margin: '0 auto',
    // background: 'rgba(42, 81, 61, 1)',
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
  Footer,
  Building,
  Entrence,
  Apartments,
  Wine,
  Location,
  Contact

}
