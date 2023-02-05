'use strict'

import { tabs } from './tabs'
import { rooms } from './rooms'
import ORNAMENT_PNG from '../../../assets/images/residence/sololaki/ornaments.png'

const props = {
  width: '100%',
  minHeight: '100%',
  flexAlign: 'center center',
  position: 'relative',
  background: 'url(' + ORNAMENT_PNG + ')',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  style: {
    scrollBehavior: 'smooth',
    backgroundAttachment: 'fixed'
  },
  ':before': {
    content: '""',
    boxSize: '101% 100%',
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'radial-gradient(rgba(25, 63, 55, .7),rgba(25, 63, 55, .8), rgba(25, 63, 55, 1), rgba(25, 63, 55, 1), rgba(25, 63, 55, 1))',
    style: { boxShadow: 'inset 0px 0px 5px .3px rgba(0, 0, 0, .7)' }
  },

  title: {
    fontSize: 'A',
    position: 'absolute',
    margin: '0',
    padding: '0',
    top: '-D2',
    left: '50%',
    transform: 'translate(-50%, 50%)',
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: `${10 / 16}em`,
    align: 'center flex-start',
    gap: 'Y2'
  }
}

export const apartments = {
  tag: 'section',
  props,
  class: {
    show: (element, state) => state.activeTab
      ? { zIndex: '70' } : { zIndex: 1 }
  },

  attr: { id: 'apartments' },

  title: { tag: 'h1', text: 'apartments' },
  tabs,
  rooms
}
