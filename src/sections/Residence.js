'use strict'

import { ResidenceText } from '../texts'

import { SectionTitle } from '../components'
import BB_JPG from '../assets/images/sololaki/b.jpg'

const title = {
  extend: SectionTitle,
  props: {
    fontSize: 'B',
    fontWeight: 700,
    style: { textTransform: 'uppercase' }
  }
}

const paragraph = {
  props: {
    color: 'cream2',
    maxWidth: `${650 / 16}em`,
    flexFlow: 'column',
    gap: 'C',
    flexAlign: 'center center',
    style: { zIndex: '2' },

    p: {
      flexFlow: 'column',
      gap: 'A',
      color: 'cream2 .8',
      textAlign: 'center',
      '@mobileS': {
        fontSize: `${14.7 / 16}em`,
        textAlign: 'left'
      }
    }
  },

  title,
  p: { extend: ResidenceText }
}

const props = {
  minHeight: '100%',
  gap: 'B',
  position: 'relative',
  flexAlign: 'center center',
  padding: '0 A2',
  margin: 'F2 0 D 0',
  '@tabletL': { margin: '0 0 0 0' },
  '@mobileXS': { padding: '0 A' },
  style: {
    backgroundImage: 'url(' + BB_JPG + ')',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
    '@media only screen and (max-width: 1366px)': { backgroundAttachment: 'initial' },
    '&:before': {
      content: '""',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      backdropFilter: 'blur(.5px)',
      background: 'radial-gradient(rgba(0, 0, 0, .87), rgba(0, 0, 0, .65))'
    }
  }
}

export const Residence = {
  tag: 'section',
  attr: { id: 'residence' },
  props,

  paragraph
}
