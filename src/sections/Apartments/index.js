'use strict'
import { tabs } from './tabs'
import { rooms } from './rooms'
import ORNAMENT_PNG from '../../assets/images/residence/sololaki/ornaments.png'

const props = {
  width: '100%',
  minHeight: '101.5%',
  flexAlign: 'center center',
  position: 'relative',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  overflow: 'hidden',
  background: 'url(' + ORNAMENT_PNG + ')',
  '@tabletL': { background: 'none' },
  style: {
    scrollBehavior: 'smooth',
    '@media only screen and (min-width: 1366px)': { backgroundAttachment: 'fixed' },
    '@media only screen and (max-height: 750px)': { padding: 'D -' }
  },

  ':before': {
    content: '""',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'radial-gradient(rgba(25, 63, 55, .85),rgba(25, 63, 55, .9),rgba(25, 63, 55, 1), rgba(25, 63, 55, 1), rgba(25, 63, 55, 1))',
    '@tabletL': { background: 'rgba(25, 63, 55, 1)' }
  }
}

export const Apartments = {
  tag: 'section',
  props,
  class: {
    show: (element, state) => state.activeTab
      ? { zIndex: '70' } : { zIndex: 1 }
  },

  attr: { id: 'apartments' },

  tabs,
  rooms
}
