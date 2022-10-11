'use strict'

import { Flex } from 'smbls'

import { ResidenceText } from '../texts'

import { Paragraph } from '../components'
import BB_JPG from '../assets/images/residence/sololaki/b.jpg'

export const paragraph = {
  extend: Paragraph,
  props: {
    color: 'cream2',
    title: { text: 'residence' },
    p: {}
  },

  title: {},
  p: { extend: ResidenceText }
}

const props = {
  minHeight: '100%',
  gap: 'B',
  position: 'relative',
  align: 'center center',
  padding: '0 A2',
  margin: 'F2 0 D 0',
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
    '@media only screen and (max-width: 1366px)': { backgroundAttachment: 'initial' }
  },
  '@tabletL': { margin: '0 0 0 0' },
  '@mobileXS': { padding: '0 A' }
}

export const Residence = {
  tag: 'section',
  attr: { id: 'residence' },
  extend: Flex,
  props,

  paragraph
}
