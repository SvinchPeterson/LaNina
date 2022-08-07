'use strict'

import { Img } from 'smbls'

import { ResidenceText } from '../texts'

import { SectionTitle } from '../components'
import BB_JPG from '../assets/images/sololaki/b.jpg'

const title = {
  proto: SectionTitle,
  props: {
    color: 'orange3 .85',
    css: { zIndex: '2' }
  }
}

const paragraph = {
  proto: ResidenceText,
  props: {
    flexFlow: 'column',
    gap: 'B',
    maxWidth: `${650 / 16}em`,
    color: 'cream 2',
    textAlign: 'center',
    position: 'relative',
    css: {
      zIndex: '2',
      boxSizing: 'content-box'
    }
  }
}

const props = {
  minHeight: '100%',
  position: 'relative',
  flexFlow: 'column',
  flexAlign: 'center center',
  gap: 'B',
  color: 'white',
  css: {
    backgroundImage: 'url(' + BB_JPG + ')',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
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
  },
  '@mobileL': {
    padding: 'E2 0'
  }
}

export const Residence = {
  tag: 'section',
  props,
  attr: { id: 'residence' },

  title,
  paragraph
}
