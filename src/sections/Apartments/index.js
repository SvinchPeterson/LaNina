'use strict'
import { tabs } from './tabs'
import { rooms } from './rooms'
import { SectionTitle } from '../../components'
import ORNAMENT_PNG from '../../assets/images/sololaki/ornaments.png'

const title = {
  extend: SectionTitle,
  props: {
    text: 'apartments',
    left: 'D',
    position: 'absolute',
    top: '-B2',
    alignSelf: 'flex-start'
  }
}

const props = {
  height: '100%',
  width: '100%',
  minHeight: '101.5%',
  flexAlign: 'center center',
  position: 'relative',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  background: 'url(' + ORNAMENT_PNG + ')',
  style: {
    scrollBehavior: 'smooth',
    boxSizing: 'border-box',
    backgroundAttachment: 'fixed',
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
    },
    '@media only screen and (max-width: 1366px)': { backgroundImage: 'none' }
  }
}

export const Apartments = {
  tag: 'section',
  props,

  attr: { id: 'apartments' },

  title,
  tabs,
  rooms

}
