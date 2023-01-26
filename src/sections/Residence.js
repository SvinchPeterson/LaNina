'use strict'

import { Flex } from 'smbls'

import { ResidenceText } from '../texts'

import { Paragraph } from '../components'
import BB_JPG from '../assets/images/residence/sololaki/b.jpg'

const props = {
  width: '100%',
  minHeight: '100%',
  gap: 'B',
  position: 'relative',
  maxWidth: '1440px',
  flow: 'column',
  margin: 'F2 auto F auto',
  image: {
    alignSelf: 'center',
    boxSize: '95% 60%',
    backgroundImage: 'url(' + BB_JPG + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    position: 'relative',
    round: 'J J 0 0',
    overflow: 'hidden',
    style: {
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat'
    },
    ':before': {
      content: '""',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      backdropFilter: 'blur(.5px)',
      background: 'radial-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .8))'
    }
  },

  paragraph: {
    position: 'absolute',
    background: 'cream2',
    padding: 'D2',
    left: 'E',
    bottom: '-F',
    alignSelf: 'flex-start',
    round: '0 F 0 0',
    style: { boxShadow: '-20px 20px 300px 1px rgba(248, 241, 227, .5)' }
  }
}

export const Residence = {
  tag: 'section',
  attr: { id: 'residence' },
  extend: Flex,
  props,

  image: {},

  paragraph: {
    extend: Paragraph,
    title: { text: 'residence' },
    p: { extend: ResidenceText }
  }
}
