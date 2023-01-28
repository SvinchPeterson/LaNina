'use strict'

import { Flex } from 'smbls'

import { tabs } from './tabs'
import { rooms } from './rooms'
import ORNAMENT_PNG from '../../assets/images/residence/sololaki/ornaments.png'

const props = {
  width: '100%',
  // padding: 'E -',
  minHeight: '101.5%',
  flexAlign: 'center center',
  position: 'relative',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  // overflow: 'hidden',
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
    height: '101%',
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'radial-gradient(rgba(25, 63, 55, .85),rgba(25, 63, 55, .9),rgba(25, 63, 55, 1), rgba(25, 63, 55, 1), rgba(25, 63, 55, 1))',
    '@tabletL': { background: 'rgba(25, 63, 55, 1)' }
  },
  title: {
    fontSize: 'A',
    position: 'absolute',
    margin: '0',
    padding: '0',
    top: '-D2',
    left: '50%',
    color: 'black',
    zIndex: '100',
    transform: 'translate(-50%, 50%)',
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: '10px',
    align: 'center flex-start',
    gap: 'Y2',
    ':before': {
      content: '""',
      minWidth: 'E',
      minHeight: 'A',
      background: 'green2',
      display: 'none',
      round: 'A 0 0 A'
    }
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
  title: { extend: Flex, tag: 'h1', text: 'apartments' },
  tabs,
  rooms
}
