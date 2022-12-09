'use strict'

import { Flex } from 'smbls'

import { ResidenceText } from '../texts'

import { Paragraph } from '../components'
import BB_JPG from '../assets/images/residence/sololaki/b.jpg'

const props = {
  minHeight: '100%',
  gap: 'B',
  position: 'relative',
  align: 'center center',
  padding: 'D A2',
  margin: 'V - D -',
  backgroundImage: 'url(' + BB_JPG + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  ':before': {
    content: '""',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backdropFilter: 'blur(.5px)',
    background: 'radial-gradient(rgba(0, 0, 0, .87), rgba(0, 0, 0, .65))'
  },
  style: {
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    '@media only screen and (max-width: 1366px)': { backgroundAttachment: 'initial' }
  },
  '@tabletL': { margin: 'V - 0 -' },

  paragraph: {
    color: 'cream2',
    padding: '- D',
    gap: 'A',
    '@mobileM': { padding: '- A' },
    '@mobileS': { padding: '- Y' },
    style: { '@media only screen and (max-height: 630px)': { fontSize: `${14 / 16}em` } },
    title: {
      fontSize: 'D',
      text: 'residence',
      textTransform: 'capitalize',
      '@mobileS': { fontSize: 'C' }
    },
    p: {
      fontSize: 'A',
      '@mobileS': { fontSize: `${15 / 16}em` }
    }
  }
}

export const Residence = {
  tag: 'section',
  attr: { id: 'residence' },
  extend: Flex,
  props,

  paragraph: {
    extend: Paragraph,
    title: {},
    p: { extend: ResidenceText }
  }
}
