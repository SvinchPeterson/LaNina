'use strict'
import { tabs } from './tabs'
import { rooms } from './rooms'
import { SectionTitle } from '../../components'
import ORNAMENT_PNG from '../../assets/images/sololaki/ornaments.png'

const title = {
  proto: SectionTitle,
  props: {
    text: 'apartments',
    padding: '0 0 0 D2',
    position: 'absolute',
    top: '-C',
    css: { alignSelf: 'flex-start' }
  }
}

const props = {
  flexFlow: 'column',
  position: 'relative',
  padding: `G 0`,
  margin: '0 0 G 0',
  '@tabletL': { padding: 'F1 0 G 0' },
  '@mobileM': {
    padding: `E1 0 G 0`,
    margin: '0 0 E 0'
  },

  css: {
    scrollBehavior: 'smooth',
    backgroundImage: 'url(' + ORNAMENT_PNG + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    boxSizing: 'border-box',
    backgroundAttachment: 'fixed',
    '@media only screen and (max-width: 1366px)': { backgroundImage: 'none' },
    '@media only screen and (max-height: 768px)': {
      paddingTop: '150px !important'
    },
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
