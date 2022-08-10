'use strict'

import { Img } from 'smbls'

import { ResidenceText } from '../texts'

import { SectionTitle } from '../components'
import BB_JPG from '../assets/images/sololaki/b.jpg'

const title = {
  proto: SectionTitle,
  props: {
    color: 'cream2 .85',
    // color: 'orange3 .65',
    // position: 'absolute',
    // top: '200px',
    // left: '100px',
    fontSize: 'D',
    fontWeight: '900',
    css: { zIndex: '2' }
  }
}

const paragraph = {
  proto: ResidenceText,
  props: {
    flexFlow: 'column',
    gap: 'A',
    maxWidth: `${650 / 16}em`,
    color: 'cream2 .7',
    textAlign: 'center',
    position: 'relative',
    css: {
      zIndex: '2',
      boxSizing: 'content-box',
      '@media only screen and (max-width: 480px)': {
        textAlign: 'left',
        fontSize: `${15 / 16}em`
      }
    },
    '@mobileL': {
      padding: '0 B2'
    },
    '@mobileXS': {
      padding: '0 B'
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
  props,
  attr: { id: 'residence' },

  title,
  paragraph
}
