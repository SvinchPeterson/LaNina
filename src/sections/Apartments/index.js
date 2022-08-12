'use strict'
import { tabs } from './tabs'
import { rooms } from './rooms'
import { SectionTitle } from '../../components'
import ORNAMENT_PNG from '../../assets/images/sololaki/ornaments.png'

const title = {
  proto: SectionTitle,
  props: {
    text: 'apartments',
    left: 'E',
    position: 'absolute',
    top: '-B2',
    css: { alignSelf: 'flex-start' }
  }
}

const props = {
  height: '100%',
  width: '100%',
  minHeight: '101.5%',
  // overflow: 'hidden',
  flexAlign: 'center center',
  position: 'relative',

  css: {
    scrollBehavior: 'smooth',
    backgroundImage: 'url(' + ORNAMENT_PNG + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    boxSizing: 'border-box',
    backgroundAttachment: 'fixed',
    '@media only screen and (max-width: 1366px)': { backgroundImage: 'none' },
    '&:before': {
      content: '""',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      background: 'radial-gradient(rgba(60, 84, 72, .85),rgba(60, 84, 72, .9),rgba(60, 84, 72, 1), rgba(60, 84, 72, 1), rgba(60, 84, 72, 1))',
      backgroundAttachment: 'fixed',
      '@media only screen and (max-width: 1366px)': {
        backgroundAttachment: 'initial',
        background: 'rgba(60, 84, 72, 1)'
      }
    }
  },

  content: {
    css: { border: '5px solid red' }

  }
}

export const Apartments = {
  tag: 'section',
  props,
  class: {
    show: (element, state) => state.activeTab
      ? {
        // justifyContent: 'flex-start'
      }
      : {}
  },

  attr: { id: 'apartments' },

  title,
  tabs,
  rooms

}
