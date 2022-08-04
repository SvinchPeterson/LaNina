'use strict'
import { HeaderMobile, Menu, Header, Footer } from '../../components'

import { Residence, Entrence, Apartments, Wine, Location, placeFeature, feedBacks } from '../../sections'
import { banner } from './banner'

import { opacity } from '../../animations'

const state = {
  activeMenu: false,
  activeMenuItem: 0,
  activeTab: 0,
  activeImage: 0,
  offers: false,
  back: true
}

const paragraph = {
  props: {
    maxWidth: `${650 / 14.5}em`,
    FontSize: `${14.5 / 16}em`,
    padding: '0 E1 E2 0',
    margin: '0 0 0 auto',
    color: 'black .8',
    lineHeight: `${23 / 14.5}em`,
    css: {
      textAlign: 'right',
      '@media only screen and (max-width: 1024px)': {
        textAlign: 'left'
      },
      '@media only screen and (max-width: 560px)': {
        // textAlign: 'justify'
      }
    },
    '@tabletS': {
      padding: '0 0 E2 0',
      margin: '0 auto',
      maxWidth: `${450 / 14.5}em`
    },
    '@mobileL': { padding: 'F 0 E2 0' },
    '@mobileM': {
      padding: 'C B1 E2 B1',
      maxWidth: `${400 / 14.5}em`
    },
    '@mobileXS': { padding: 'C A2 E2 A2'  }
  },
  ...[
    'If you’re ready to step out and explore the area, our apartments are conveniently located, within walking distance of a variety of popular local attractions: ',
    {
      tag: 'span',
      props: {
        // color: 'black 1',
        fontWeight: '500',
        css: {
          span: { color: 'rgba(0, 0, 0, .8)', fontWeight: '400' }
        }
      },
      // text: ' Liberty square, Botanical Garden, Sulfur bathes, bars, restaurants, shopping center.',
      ...[
        'Liberty square',
        { tag: 'span', text: ', ' },
        'Botanical Garden',
        { tag: 'span', text: ', ' },
        'Sulfur bathes',
        { tag: 'span', text: ', ' },
        'bars',
        { tag: 'span', text: ', ' },
        'restaurants',
        { tag: 'span', text: ', ' },
        'shopping center',
        { tag: 'span', text: '.' }
      ]
    }
  ]
}

const props = {
  position: 'relative',
  background: 'cream2',
  flexFlow: 'column',
  gap: '0',
  width: '100%',
  height: '100%',
  css: {
    flex: 1,
    overflowX: 'hidden',
    overflowY: 'auto',
    scrollBehavior: 'smooth',
    margin: '0 auto',
    animationName: opacity,
    animationDuration: '2s',
    animationTimingFunction: 'cubic-bezier(.17,.61,.3,.71)'
  }
}

export default {
  state,
  props,

  banner,
  Header,
  HeaderMobile,
  Menu,
  Residence,
  placeFeature,
  Entrence,
  Apartments,
  Wine,
  feedBacks,
  paragraph,
  Location,
  Footer
}
