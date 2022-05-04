'use strict'
import { Box } from '@symbo.ls/symbols'
import { Header, Menu } from '../../components'
import { Residence, Apartments, Wine, Location } from '../../articles'
import { banner } from './banner'

import { opacity } from '../../animations'

const container = {
  proto: Box,
  props: { background: 'green' },
  style: {
    flex: 1,
    overflowX: 'hidden',
    overflowY: 'auto',
    scrollBehavior: 'smooth',
    background: 'rgba(42, 81, 61, 1)',
    animationName: opacity,
    animationDuration: '2s',
    animationTimingFunction: 'ease-in-out'
  }
}
export default {
  state: {
    activeMenu: true,
    activeMenuItem: 0,
    activeTab: 0,
    activeImage: 0,
    offers: false
  },

  proto: container,
  banner,
  Header,
  Menu,

  Residence,
  Apartments,
  Wine,
  Location

}
