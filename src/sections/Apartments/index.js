'use strict'
import { tabs } from './tabs'
import { rooms } from './rooms'
import ORNAMENT_PNG from '../../assets/images/residence/sololaki/ornaments.png'

const props = {
  height: '100%',
  width: '100%',
  minHeight: '101.5%',
  flexAlign: 'center center',
  position: 'relative',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  background: 'url(' + ORNAMENT_PNG + ')',
  '@tabletL': { background: 'none' },
  style: {
    scrollBehavior: 'smooth',
    '@media only screen and (min-width: 1366px)': { backgroundAttachment: 'fixed' }
  },

  ':before': {
    content: '""',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'radial-gradient(rgba(60, 84, 72, .85),rgba(60, 84, 72, .9),rgba(60, 84, 72, 1), rgba(60, 84, 72, 1), rgba(60, 84, 72, 1))',
    '@tabletL': { background: 'green2' }
  }
}

export const Apartments = {
  tag: 'section',
  props,

  attr: { id: 'apartments' },

  tabs,
  rooms
}
