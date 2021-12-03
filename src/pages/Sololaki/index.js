'use strict'

import { Block, Text, SVG } from '@rackai/symbols'

import { Story, Apartment, Services, Contact } from '../../sections'
import { LaninaHeading, Header } from '../../components'

import style, { styleBannerBackground, styleBanner } from './style'

const banner = {
  proto: LaninaHeading,
  class: [styleBanner],
  h4: {
    props: {
      size: 'G',
      text: 'La Nina Residence'
    }
  },

  span: {
    props: {
      text: 'sololaki',
      size: 'B'
    }
  },

  p: {
    proto: [Text, Block],
    props: {
      text: 'Be inspired by old city',
      size: 'B',
      padding: 'A 0 0 0'
    }
  }
}

const bannerBackground = {
  style: styleBannerBackground,
  bannerImg: {},
  banner
}

export default {
  style,
  bannerBackground,
  Header,
  Story,
  Apartment,
  Services,
  Contact,

  gela: {
    proto: Text,
    state: {
      text: 'gocha',
      color: 'red',
      style: {
        color: 'red',
        fontSize: '50px',
        cursor: 'pointer',
        textAlign: 'center'
      }
    },
    text: (el, s) => s.text,
    style: (el, s) => s.style,
    on: {
      click: (ev, el, s) => {
        s.update({ text: 'gela', style: { color: 'blue' } })
      }
    }
    // style: {
    //   fontSize: '50px',
    //   textAlign: 'center',
    //   cursor: 'pointer'
    // }
  }
}
